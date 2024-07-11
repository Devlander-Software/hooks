import type { ImageStyle } from "react-native";
/**
 * Custom hook that returns the image style based on the provided props.
 *
 * This hook takes optional image style properties and returns the appropriate image style. If the input is undefined or empty, it returns an empty object. It also merges with any new styles provided.
 *
 * @param imageStyleProps - The initial style props for the image, which can be a single style object.
 * @param newStyles - Additional style props to be merged with the initial styles, which can be a single style object.
 * @returns The merged image style object.
 *
 * @example
 * ```typescript
 * const style = useImageStyle({ width: 100 }, { height: 200 });
 * // style will be { width: 100, height: 200 }
 *
 * const style = useImageStyle({ width: 100 });
 * // style will be { width: 100 }
 *
 * const style = useImageStyle();
 * // style will be {}
 * ```
 */
export declare const useImageStyle: (imageStyleProps?: ImageStyle, newStyles?: ImageStyle) => ImageStyle;
