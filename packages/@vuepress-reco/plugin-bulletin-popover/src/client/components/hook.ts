import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { resolveLocalePath } from 'vuepress/shared'
import { resolveThemeLocaleData } from '@vuepress/plugin-theme-data/client'

export function useVisible() {
  const themeLocal = useThemeLocaleData()

  const bulletin = computed(() => themeLocal?.value?.bulletin)

  const visible = ref(false)
  const bulletinPopoverKey = '__CLOSE_BULLETIN_POPOVER__'

  onMounted(() => {
    const closeNote = sessionStorage.getItem(bulletinPopoverKey)
    visible.value = closeNote !== 'true' && !!bulletin?.value?.body
  })

  const closeBulletinPopover = () => {
    visible.value = false
    sessionStorage.setItem(bulletinPopoverKey, 'true')
  }

  return { visible, bulletin, closeBulletinPopover }
}

const nodeHandler = {
  handleImage (node) {
    return `<img style=\"${node.style || ''}\" src=\"${node.src}\" />`
  },
  handleText (node) {
    return `<div style=\"${node.style || ''}\">${node.content}</div>`
  },
  handleTitle (node) {
    return `<h5 style=\"${node.style || ''}\">${node.content}</h5>`
  },
  handleButton (node) {
    return `<a style=\"${node.style || ''}\" class=\"btn\" href=\"${node.link}\">${node.text}</a>`
  },
  handleButtongroup (node) {
    const btnChildren = (node.children || []).reduce((total, next) => {
      return total += `<a style=\"${next.style || node.style || ''}\" class=\"btn\" href=\"${next.link}\">${next.text}</a>`
    }, '')

    return `<div class="btn-group">${btnChildren}</div>`
  },
  handleHr (node) {
    return `<hr />`
  },
}

export function useHandleNodes() {
  const themeLocal = useThemeLocaleData()

  function handleNode (nodes) {
    if (!Array.isArray(nodes)) {
      let type = nodes.type
      type = type.slice(0, 1).toUpperCase() + type.slice(1)
      return nodeHandler[`handle${type}`](nodes)
    } else {
      return nodes.map(node => handleNode(node))
    }
  }

  const bodyNodes = computed(() => {
    return handleNode(themeLocal?.value?.bulletin?.body).join('')
  })

  return { bodyNodes, handleNode }
}

function useThemeLocaleData() {
  // @ts-ignore
  const themeConfig = __THEME_CONFIG__
  const route = useRoute()
  const routeLocale = computed(() =>
    resolveLocalePath(themeConfig.locales || {}, route?.path || '/'),
  )

  const themeLocaleData = computed(() =>
    resolveThemeLocaleData(themeConfig, routeLocale.value),
  )

  return themeLocaleData
}
