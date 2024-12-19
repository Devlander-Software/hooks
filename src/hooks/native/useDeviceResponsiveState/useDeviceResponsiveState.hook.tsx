import { useCallback, useEffect, useMemo, useState } from "react"
import type { ScaledSize } from "react-native"
import { Dimensions } from "react-native"
import type {
  MediaQueryConfig,
  ResponsiveQueryConfig,
  ResponsiveQueryResult,
} from "../../../types/responsive-queries.type"
import { ViewportCategory } from "../../../types/responsive-queries.type"

export const useDeviceResponsiveState = (
  triggerBy: ("screen" | "window")[] = ["window", "screen"],
  config: ResponsiveQueryConfig = {},
): ResponsiveQueryResult => {
  const { forcePortrait, forceLandscape, mediaQueryConfig } = config

  // Fix: Added missing colon after `extraSmall` to define the default media query config
  const defaultMediaQueryConfig: MediaQueryConfig = useMemo(
    () => ({
      extraSmall: { maxWidth: 360 },
      small: { minWidth: 360, maxWidth: 640 },
      medium: { minWidth: 640, maxWidth: 1024 },
      large: { minWidth: 1024, maxWidth: 1440 },
      extraLarge: { minWidth: 1440 },
    }),
    [],
  )

  // Apply custom media query configuration if provided
  const appliedMediaQueryConfig = useMemo(() => {
    return {
      ...defaultMediaQueryConfig,
      ...mediaQueryConfig,
    }
  }, [mediaQueryConfig, defaultMediaQueryConfig])

  // State to track the current screen or window dimensions
  const [dimensions, setDimensions] = useState<ScaledSize>(
    Dimensions.get(triggerBy.includes("window") ? "window" : "screen"),
  )

  // Callback to handle dimension changes
  const onChange = useCallback(
    ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => {
      setDimensions(triggerBy.includes("window") ? window : screen)
    },
    [triggerBy],
  )

  // Set up an effect to listen for dimension changes
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", onChange)
    return () => subscription.remove()
  }, [onChange])

  // Determine if the device is in portrait or landscape mode
  const isPortrait = useMemo(() => {
    if (forcePortrait) return true
    if (forceLandscape) return false
    return dimensions.height > dimensions.width
  }, [dimensions, forcePortrait, forceLandscape])

  // Determine the viewport category based on the current width
  const viewportCategory = useMemo(() => {
    const { width } = dimensions
    const { extraSmall, small, medium, large, extraLarge } =
      appliedMediaQueryConfig

    if (extraSmall && width <= (extraSmall.maxWidth || 0))
      return ViewportCategory.ExtraSmall
    if (
      small &&
      width >= (small.minWidth || 0) &&
      width <= (small.maxWidth || Infinity)
    )
      return ViewportCategory.Small
    if (
      medium &&
      width >= (medium.minWidth || 0) &&
      width <= (medium.maxWidth || Infinity)
    )
      return ViewportCategory.Medium
    if (
      large &&
      width >= (large.minWidth || 0) &&
      width <= (large.maxWidth || Infinity)
    )
      return ViewportCategory.Large
    if (extraLarge && width >= (extraLarge.minWidth || 0))
      return ViewportCategory.ExtraLarge
    return ViewportCategory.ExtraLarge
  }, [dimensions, appliedMediaQueryConfig])

  // Return the responsive state
  return useMemo(
    () => ({
      isExtraSmall: viewportCategory === ViewportCategory.ExtraSmall,
      isSmall: viewportCategory === ViewportCategory.Small,
      isMedium: viewportCategory === ViewportCategory.Medium,
      isLarge: viewportCategory === ViewportCategory.Large,
      isExtraLarge: viewportCategory === ViewportCategory.ExtraLarge,
      isPortrait,
      dimensions,
      orientation: isPortrait ? "portrait" : "landscape",
      viewportCategory,
    }),
    [viewportCategory, isPortrait, dimensions],
  )
}
