import { isEmpty } from "@devlander/utils"
import { useMemo } from "react"
import type { ViewStyle } from "react-native"

/**
 * Custom hook that returns the container style based on the provided props.
 * @param containerStyleProps - The style props for the container.
 * @returns The container style.
 */

type ContainerStyleProps = ViewStyle | ViewStyle[]

export const useContainerStyle = (containerStyleProps?: ContainerStyleProps) => {
  const isContainerStyleArray = Array.isArray(containerStyleProps)

  const getContainerStyle = useMemo(() => {
    if (containerStyleProps === undefined || isEmpty(containerStyleProps)) {
      return {}
    }
    
    if (isContainerStyleArray) {
      return containerStyleProps[0]
    }

    return containerStyleProps
  }, [isContainerStyleArray, containerStyleProps])

  return getContainerStyle
}
