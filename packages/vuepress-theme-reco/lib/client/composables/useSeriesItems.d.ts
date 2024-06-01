import type { ComputedRef } from 'vue';
export interface NavItem {
    text: string;
    ariaLabel?: string;
}
export interface NavGroup<T> extends NavItem {
    children: T[];
}
export interface NavLink extends NavItem {
    link: string;
    rel?: string;
    target?: string;
}
export interface ResolvedSeriesItem extends Partial<NavLink> {
    text?: string;
    children?: ResolvedSeriesItem[];
    collapsible?: boolean;
}
export type SeriesItemsRef = ComputedRef<ResolvedSeriesItem[]>;
export declare const useSeriesItems: () => SeriesItemsRef;
