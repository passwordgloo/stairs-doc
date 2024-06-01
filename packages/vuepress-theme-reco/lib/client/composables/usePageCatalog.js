import { inject } from 'vue';
export const catalogSymbol = Symbol('catalog');
export const usePageCatalog = () => {
    const catalog = inject(catalogSymbol);
    if (!catalog) {
        throw new Error('usePageCatalog() is called without provider.');
    }
    return catalog;
};
const headerToCatalogItem = (header) => ({
    text: header.title,
    link: `#${header.slug}`,
    level: header.level,
    children: headersToCatalog(header.children),
});
export const headersToCatalog = (headers) => headers.map((header) => headerToCatalogItem(header));
