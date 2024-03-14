import { useCallback } from "react"
import type { ImageStyle, TextStyle, ViewStyle } from "react-native"
import { StyleSheet } from "react-native"

/**
 * A hook to create a conditional onPress handler based on the presence of a specified style.
 *
 * @param {UseOnPressByStyleOptions} options - Options for the hook.
 * @param {string} options.styleName - The name of the style key to check for.
 * @param {() => void} options.onPress - The onPress function to be executed if the style is present.
 * @returns {(styles: ViewStyle | TextStyle | ImageStyle) => (() => void) | undefined} - A function that takes styles as an argument and returns the onPress function if the specified style is present, otherwise undefined.
 */

export interface UseOnPressByStyleOptions {
  styleName: string
  onPress: () => void
}

export const useOnPressByStyle = ({
  styleName,
  onPress,
}: UseOnPressByStyleOptions) => {
  const handlePress = useCallback(
    (styles: ViewStyle | TextStyle | ImageStyle) => {
      const flattenedStyles = StyleSheet.flatten(styles)

      if (
        flattenedStyles &&
        flattenedStyles[
          styleName as keyof (ViewStyle | TextStyle | ImageStyle)
        ] &&
        typeof onPress === "function"
      ) {
        return onPress
      }

      return undefined
    },
    [styleName, onPress],
  )

  return handlePress
}
