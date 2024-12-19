import { mergeObjects } from "@devlander/utils" // Ensure this path is correct
import { useMemo } from "react"
import type { ImageStyle, ViewStyle } from "react-native"
import { useViewSize } from "../useViewSize/useViewSize.hook"

// Function to calculate dynamic border radius for a leaf shape
function calculateLeafBorderRadius(
  width: number | string,
  height: number | string,
  widthPercentage = 0.3125,
  heightPercentage = 0.3521,
) {
  const widthAsNumber =
    typeof width === "string" && width.includes("%")
      ? parseFloat(width.replace("%", ""))
      : Number(width)

  const heightAsNumber =
    typeof height === "string" && height.includes("%")
      ? parseFloat(height.replace("%", ""))
      : Number(height)

  const borderTopRightRadius = (widthAsNumber / 100) * widthPercentage * 100
  const borderBottomLeftRadius = (heightAsNumber / 100) * heightPercentage * 100

  return {
    borderTopRightRadius,
    borderBottomLeftRadius,
  }
}

// Hook to compute dynamic styles for a leaf shape
export const useLeafStyle = ({
  containerStyle,
  additionalContainerStyleFromTheme,
  imageStyle,
}: {
  containerStyle?: ViewStyle
  additionalContainerStyleFromTheme?: ViewStyle
  imageStyle?: ImageStyle
}) => {
  const [size, setSize] = useViewSize()

  // Default base styles for the container
  const baseContainerStyles = useMemo(() => {
    const defaultStyles: ViewStyle = {
      maxWidth: "100%",
      maxHeight: "100%",
      overflow: "hidden",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 25,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 0,
    }

    return mergeObjects(defaultStyles, {
      ...additionalContainerStyleFromTheme,
      ...containerStyle,
    })
  }, [additionalContainerStyleFromTheme, containerStyle])

  // Dynamically calculate border radii based on size
  const borderRadiusStyles = useMemo(
    () => calculateLeafBorderRadius(size.width || 0, size.height || 0),
    [size],
  )

  // Merged container styles with dynamic border radii
  const mergedContainerStyles = useMemo(
    () => ({
      ...baseContainerStyles,
      borderTopRightRadius: borderRadiusStyles.borderTopRightRadius,
      borderBottomLeftRadius: borderRadiusStyles.borderBottomLeftRadius,
    }),
    [baseContainerStyles, borderRadiusStyles],
  )

  // Base image styles
  const baseImageStyles: ImageStyle = useMemo(
    () => ({
      maxWidth: "100%",
      maxHeight: "100%",
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
      ...imageStyle,
    }),
    [imageStyle],
  )

  // Dynamic border radius for images
  const dynamicBorderRadiusStyles: ImageStyle = useMemo(
    () => calculateLeafBorderRadius(size.width || 0, size.height || 0),
    [size],
  )

  // Merged image styles
  const mergedImageStyles: ImageStyle = useMemo(
    () => ({
      ...baseImageStyles,
      borderTopRightRadius: dynamicBorderRadiusStyles.borderTopRightRadius,
      borderBottomLeftRadius: dynamicBorderRadiusStyles.borderBottomLeftRadius,
    }),
    [baseImageStyles, dynamicBorderRadiusStyles],
  )

  return {
    mergedContainerStyles,
    mergedImageStyles,
    setSize,
  }
}
