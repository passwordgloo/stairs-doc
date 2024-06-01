/**
 * Base nav item, displayed as text
 */
export interface NavItem {
    text: string;
    ariaLabel?: string;
}
/**
 * Base nav group, has nav items children
 */
export interface NavGroup<T> extends NavItem {
    children: T[];
}
/**
 * Props for `<NavLink>`
 */
export interface NavLink extends NavItem {
    link: string;
    icon?: string;
    rel?: string;
    target?: string;
    children?: Array<Record<string, any>>;
}
/**
 * Navbar types
 */
export type NavbarItem = NavLink;
export type NavbarGroup = NavGroup<NavbarGroup | NavbarItem | string>;
export type NavbarConfig = (NavbarItem | NavbarGroup | string)[];
export type ResolvedNavbarItem = NavbarItem | NavGroup<ResolvedNavbarItem>;
/**
 * Series types
 */
export type SeriesItem = NavLink;
export interface SeriesGroup extends NavGroup<SeriesGroup | NavLink | SeriesItem | string> {
}
export type SeriesConfigArray = (SeriesGroup | SeriesItem | string)[];
export type SeriesConfigObject = Record<string, SeriesConfigArray>;
export type SeriesConfig = SeriesConfigObject;
export interface ResolvedSeriesItem extends Partial<NavLink> {
    level?: number;
    children?: any[];
}
