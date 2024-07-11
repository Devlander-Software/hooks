import { useMemo } from "react"
import type { TextStyle } from "react-native"

/**
 * Custom hook that returns the text style based on the provided props.
 *
 * This hook takes optional text style properties and returns the appropriate text style. If the input is undefined or empty, it returns an empty object. It also merges with any new styles provided.
 *
 * @param textStyleProps - The initial style props for the text, which can be a single style object.
 * @param newStyles - Additional style props to be merged with the initial styles, which can be a single style object.
 * @returns The merged text style object.
 *
 * @example
 * ```typescript
 * const style = useTextStyle({ fontSize: 16 }, { color: 'blue' });
 * // style will be { fontSize: 16, color: 'blue' }
 *
 * const style = useTextStyle({ fontSize: 16 });
 * // style will be { fontSize: 16 }
 *
 * const style = useTextStyle();
 * // style will be {}
 * ```
 */
export const useTextStyle = (
  textStyleProps?: TextStyle,
  newStyles?: TextStyle,
): TextStyle => {
  const memoizedTextStyleProps = useMemo(
    () => JSON.stringify(textStyleProps || {}),
    [textStyleProps],
  )
  const memoizedNewStyles = useMemo(
    () => JSON.stringify(newStyles || {}),
    [newStyles],
  )

  const combinedStyleProps = useMemo(() => {
    const initialStyle = JSON.parse(memoizedTextStyleProps) as TextStyle
    const additionalStyle = JSON.parse(memoizedNewStyles) as TextStyle

    return { ...initialStyle, ...additionalStyle }
  }, [memoizedTextStyleProps, memoizedNewStyles])

  return combinedStyleProps
}
