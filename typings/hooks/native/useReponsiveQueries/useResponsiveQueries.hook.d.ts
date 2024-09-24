import type { ScaledSize } from "react-native";
export declare enum ViewportCategory {
    smallMobile = "smallMobile",
    mobile = "mobile",
    tablet = "tablet",
    desktop = "desktop",
    largeDesktop = "largeDesktop",
    tv = "tv"
}
export type ScreenOrWindow = "screen" | "window";
export interface ResponsiveQueryResult {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isPortrait: boolean;
    dimensions: ScaledSize;
    orientation: "portrait" | "landscape";
    viewportCategory: ViewportCategory;
}
interface ResponsiveQueryConfig {
    forcePortrait?: boolean;
    forceLandscape?: boolean;
}
export declare const useResponsiveQueries: (triggerBy?: ScreenOrWindow, config?: ResponsiveQueryConfig) => ResponsiveQueryResult;
export {};
