import * as zhConfig from './zh'
import * as enConfig from './en'

export const themeConfig = {
  primaryColor: '#8F41E9',
  locales: {
    '/': {
      selectLanguageText: '选择语言',
      selectLanguageName: '简体中文',
      lastUpdatedText: '拾穗',
      navbar: zhConfig.navbar,
      series: zhConfig.series,
      commentConfig: zhConfig.commentConfig,
      bulletin: zhConfig.bulletin,
      editLink:false
    },
    '/en/': {
      selectLanguageText: 'Languages',
      selectLanguageName: 'English',
      navbar: enConfig.navbar,
      series: enConfig.series,
      commentConfig: enConfig.commentConfig,
      bulletin: enConfig.bulletin,
      editLink:false
    },
  },
  logo: 'logo/foresee.svg',
  author: '风雅中华',
  docsRepo: 'https://github.com/passwordgloo/stairs-doc',
  docsBranch: 'master',
  docsDir: './docs',
  componentsDir: './docs/.vuepress/components',
  algolia: {
    appId: "GLIZVIBTPO",
    apiKey: "ef2fc85d3d5755628dcdc325a2bbe6e3",
    indexName: "Doc-stairs",
    inputSelector: '搜索',
    algoliaOptionos: { 'facetFilters': ["lang:$LANG"] },
    debug: false,
    locales: {
      "/": {
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
      "/en/": {
        placeholder: "Search Documentation",
        translations: {
          button: {
            buttonText: "Search Documentation",
          },
        },
      },
    },
  }
}
