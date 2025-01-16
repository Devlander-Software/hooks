import type { ScaledSize } from "react-native";
/**
 * `useViewportInfo` hook provides the dimensions of both the window and the screen.
 * Useful for responsive layouts and dynamically adapting UI components
 * based on available space.
 *
 * @returns {{windowDimensions: ScaledSize, screenDimensions: ScaledSize}}
 * An object containing both the `window` and `screen` dimensions.
 */
export declare const useViewportInfo: () => {
    windowDimensions: ScaledSize;
    screenDimensions: ScaledSize;
};
