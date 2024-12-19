import type { ScaledSize } from "react-native";

// Define a viewport size type using the more descriptive `DeviceCategoryType`
type ViewportSizeType = `${DeviceCategoryType}`;

// Interface representing the viewport sizes for different categories
export interface ViewportSize {
  extraSmall: ViewportSizeType;
  small: ViewportSizeType;
  medium: ViewportSizeType;
  large: ViewportSizeType;
  extraLarge: ViewportSizeType;
}

// Updated enum for device categories
export enum DeviceCategory {
  ExtraSmall = "ExtraSmall",
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  ExtraLarge = "ExtraLarge",
}

// Enum for specific device types
export enum DeviceCategoryType {
  SmallMobile = "SmallMobile",
  Mobile = "Mobile",
  Tablet = "Tablet",
  Desktop = "Desktop",
  LargeDesktop = "LargeDesktop",
  TV = "TV",
}

// Type to represent the screen or window options
export type ScreenOrWindow = "screen" | "window";

// Interface for media query configuration

// if they set extraLarge it should also set tv
// if they set large it should also set largeDesktop
// if they set small it should also set smallMobile
// if they set mobile it should also set tablet


export interface MediaQueryConfig {
  extraSmall?: { maxWidth?: number };
  small?: { minWidth?: number; maxWidth?: number };
  medium?: { minWidth?: number; maxWidth?: number };
  large?: { minWidth?: number; maxWidth?: number };
  extraLarge?: { minWidth?: number };

 

  smallMobile?: { minWidth?: number };
}

// Interface for responsive query configuration
export interface ResponsiveQueryConfig {
  forcePortrait?: boolean;
  forceLandscape?: boolean;
  mediaQueryConfig?: MediaQueryConfig;
}

// Enum for viewport categories
export enum ViewportCategory {
  ExtraSmall = "ExtraSmall",
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  ExtraLarge = "ExtraLarge",
}

// Interface for the result of the responsive query hook
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
