import { isEmpty } from "@devlander/utils"
import { useMemo } from "react"
import type { ViewStyle } from "react-native"

/**
 * Custom hook that returns the container style based on the provided props.
 * @param containerStyleProps - The style props for the container.
 * @returns The container style.
 */
export const useContainerStyle = (
  containerStyleProps: ViewStyle | ViewStyle[],
) => {
  const isContainerStyleArray = Array.isArray(containerStyleProps)

  const getContainerStyle = useMemo(() => {
    if (isContainerStyleArray) {
      return containerStyleProps[0]
    } else if (isEmpty(containerStyleProps)) {
      return {}
    }
    return containerStyleProps
  }, [isContainerStyleArray, containerStyleProps])

  return getContainerStyle
}
