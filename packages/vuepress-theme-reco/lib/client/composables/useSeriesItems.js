import { computed } from 'vue';
import { useRoute, usePageFrontmatter } from 'vuepress/client';
import { isPlainObject, isString, resolveLocalePath } from 'vuepress/shared';
import { useExtendPageData } from '@vuepress-reco/vuepress-plugin-page/composables';
import { useThemeLocaleData } from '@composables/index.js';
import { getNavLink } from './getNavLink.js';
export const useSeriesItems = () => {
    const route = useRoute();
    const { series } = useExtendPageData();
    const themeLocal = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const seriesItems = computed(() => resolveSeriesItems(frontmatter.value, themeLocal.value, route, series));
    if (!seriesItems) {
        throw new Error('useSeriesItems() is called without provider.');
    }
    return seriesItems;
};
const resolveSeriesItems = (frontmatter, themeLocal, route, autoSeries) => {
    // get series config from frontmatter > themeConfig
    let seriesConfig = themeLocal.series ?? {};
    seriesConfig = {
        ...autoSeries,
        ...seriesConfig,
    };
    // 解决
    // resolve series items according to the config
    if (frontmatter.home) {
        return [];
    }
    if (isPlainObject(seriesConfig)) {
        return resolveMultiSeriesItems(seriesConfig, route);
    }
    return [];
};
/**
 * Resolve series items if the config is an array
 */
const resolveArraySeriesItems = (seriesPath, seriesConfig) => {
    const handleChildItem = (item) => {
        let childItem;
        if (isString(item)) {
            const link = item.includes(seriesPath) ? item : `${seriesPath}${item}`;
            childItem = getNavLink(link);
        }
        else {
            childItem = item;
        }
        return childItem;
    };
    return seriesConfig.map((item) => {
        if (isString(item)) {
            const link = item.includes(seriesPath) ? item : `${seriesPath}${item}`;
            return getNavLink(link);
        }
        return {
            ...item,
            // @ts-ignore
            children: item.children.map(subItem => handleChildItem(subItem)),
        };
    });
};
/**
 * Resolve series items if the config is a key -> value (path-prefix -> array) object
 */
const resolveMultiSeriesItems = (seriesConfig, route) => {
    const seriesPath = resolveLocalePath(seriesConfig, decodeURIComponent(route.path));
    const matchedSeriesConfig = seriesConfig[seriesPath] ?? [];
    return resolveArraySeriesItems(seriesPath, matchedSeriesConfig);
};
