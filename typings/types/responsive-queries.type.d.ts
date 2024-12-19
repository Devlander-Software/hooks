import type { ScaledSize } from "react-native";
type ViewportSizeType = `${DeviceCategoryType}`;
export interface ViewportSize {
    extraSmall: ViewportSizeType;
    small: ViewportSizeType;
    medium: ViewportSizeType;
    large: ViewportSizeType;
    extraLarge: ViewportSizeType;
}
export declare enum DeviceCategory {
    ExtraSmall = "ExtraSmall",
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    ExtraLarge = "ExtraLarge"
}
export declare enum DeviceCategoryType {
    SmallMobile = "SmallMobile",
    Mobile = "Mobile",
    Tablet = "Tablet",
    Desktop = "Desktop",
    LargeDesktop = "LargeDesktop",
    TV = "TV"
}
export type ScreenOrWindow = "screen" | "window";
export interface MediaQueryConfig {
    extraSmall?: {
        maxWidth?: number;
    };
    small?: {
        minWidth?: number;
        maxWidth?: number;
    };
    medium?: {
        minWidth?: number;
        maxWidth?: number;
    };
    large?: {
        minWidth?: number;
        maxWidth?: number;
    };
    extraLarge?: {
        minWidth?: number;
    };
    smallMobile?: {
        minWidth?: number;
    };
}
export interface ResponsiveQueryConfig {
    forcePortrait?: boolean;
    forceLandscape?: boolean;
    mediaQueryConfig?: MediaQueryConfig;
}
export declare enum ViewportCategory {
    ExtraSmall = "ExtraSmall",
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    ExtraLarge = "ExtraLarge"
}
export interface ResponsiveQueryResult {
    isExtraSmall: boolean;
    isSmall: boolean;
    isMedium: boolean;
    isLarge: boolean;
    isExtraLarge: boolean;
    isPortrait: boolean;
    dimensions: ScaledSize;
    orientation: "portrait" | "landscape";
    viewportCategory: ViewportCategory;
}
export {};
