import type { Router } from 'vue-router';
/**
 * Resolve a route with redirection
 */
export declare const useResolveRouteWithRedirect: (router: any, to: import("vue-router").RouteLocationRaw, currentLocation?: import("vue-router").RouteLocationNormalizedLoaded | undefined) => ReturnType<Router['resolve']>;
