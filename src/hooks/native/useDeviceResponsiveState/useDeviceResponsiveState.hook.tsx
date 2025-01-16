import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type { ScaledSize } from "react-native"
import { Dimensions } from "react-native"
import type {
  ResponsiveQueryConfig,
  ResponsiveQueryResult,
} from "../../../types/responsive-queries.type"
import { ViewportCategory } from "../../../types/responsive-queries.type"

export const useDeviceResponsiveState = (
  triggerBy: ("screen" | "window")[] = ["window", "screen"],
  config: ResponsiveQueryConfig = {},
): ResponsiveQueryResult => {
  const { forcePortrait, forceLandscape, mediaQueryConfig } = config

  // Static default media query config
  const defaultMediaQueryConfig = useMemo(
    () => ({
      extraSmall: { maxWidth: 360 },
      small: { minWidth: 360, maxWidth: 640 },
      medium: { minWidth: 640, maxWidth: 1024 },
      large: { minWidth: 1024, maxWidth: 1440 },
      extraLarge: { minWidth: 1440 },
    }),
    [],
  )

  // Merge default and custom media query configurations
  const appliedMediaQueryConfig = useMemo(
    () => ({
      ...defaultMediaQueryConfig,
      ...mediaQueryConfig,
    }),
    [defaultMediaQueryConfig, mediaQueryConfig],
  )

  // Initialize dimensions lazily
  const [dimensions, setDimensions] = useState<ScaledSize>(() =>
    Dimensions.get(triggerBy.includes("window") ? "window" : "screen"),
  )

  // Debounced handler for dimension changes
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const onChange = useCallback(
    ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setDimensions(triggerBy.includes("window") ? window : screen)
      }, 100)
    },
    [triggerBy],
  )

  // Subscribe to dimension changes
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", onChange)
    return () => subscription.remove()
  }, [onChange])

  // Calculate orientation
  const isPortrait = useMemo(() => {
    if (forcePortrait) return true
    if (forceLandscape) return false
    return dimensions.height > dimensions.width
  }, [dimensions, forcePortrait, forceLandscape])

  // Determine viewport category
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

  // Return responsive state
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
