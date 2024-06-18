import { Platform } from "react-native";
export interface MediaQueryBreakpointConfig {
    xSmall: boolean;
    small: boolean;
    medium: boolean;
    large: boolean;
    xLarge: boolean;
    xxLarge: boolean;
    platform: typeof Platform.OS;
}
export declare const useGetMediaQueryInfo: () => MediaQueryBreakpointConfig;
