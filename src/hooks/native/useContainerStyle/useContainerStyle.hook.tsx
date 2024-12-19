import { useMemo } from "react"
import type { ViewStyle } from "react-native"

/**
 * Custom hook that returns the container style based on the provided props.
 *
 * This hook takes optional style properties and returns the appropriate container style. If the input is undefined or empty, it returns an empty object. If the input is an array, it merges the styles in the array. It also merges with any new styles provided.
 *
 * @param containerStyleProps - The initial style props for the container, which can be a single style object or an array of style objects.
 * @param newStyles - Additional style props to be merged with the initial styles, which can be a single style object or an array of style objects.
 * @returns The merged container style object.
 *
 * @example
 * ```typescript
 * const style = useContainerStyle([{ padding: 10 }], { margin: 5 });
 * // style will be { padding: 10, margin: 5 }
 *
 * const style = useContainerStyle({ padding: 10 });
 * // style will be { padding: 10 }
 *
 * const style = useContainerStyle();
 * // style will be {}
 * ```
 */
export type ContainerStyle = ViewStyle | ViewStyle[]

export const useContainerStyle = (
  containerStyleProps?: ContainerStyle,
  newStyles?: ContainerStyle,
): ViewStyle => {
  const combinedStyleProps = useMemo(() => {
    const initialStyle = containerStyleProps
      ? Array.isArray(containerStyleProps)
        ? containerStyleProps.reduce((acc, style) => ({ ...acc, ...style }), {})
        : containerStyleProps
      : {}

    const additionalStyle = newStyles
      ? Array.isArray(newStyles)
        ? newStyles.reduce((acc, style) => ({ ...acc, ...style }), {})
        : newStyles
      : {}

    return { ...initialStyle, ...additionalStyle }
  }, [containerStyleProps, newStyles])

  return combinedStyleProps
}
