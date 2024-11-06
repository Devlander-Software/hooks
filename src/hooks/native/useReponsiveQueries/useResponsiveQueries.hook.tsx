import { useCallback, useEffect, useMemo, useState } from "react"
import type { ScaledSize } from "react-native"
import { Dimensions } from "react-native"

export enum ViewportCategory {
  smallMobile = "smallMobile",
  mobile = "mobile",
  tablet = "tablet",
  desktop = "desktop",
  largeDesktop = "largeDesktop",
  tv = "tv",
}

export type ScreenOrWindow = "screen" | "window"

export interface ResponsiveQueryResult {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isPortrait: boolean
  dimensions: ScaledSize
  orientation: "portrait" | "landscape"
  viewportCategory: ViewportCategory
}

interface ResponsiveQueryConfig {
  forcePortrait?: boolean
  forceLandscape?: boolean
}

export const useResponsiveQueries = (
  triggerBy: ScreenOrWindow = "window",
  config: ResponsiveQueryConfig = {},
): ResponsiveQueryResult => {
  const { forcePortrait, forceLandscape } = config
  const [dimensions, setDimensions] = useState<ScaledSize>(
    Dimensions.get(triggerBy),
  )

  // Use useCallback to memoize the onChange handler to avoid re-creating the function on each render.
  const onChange = useCallback(
    ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => {
      setDimensions(triggerBy === "window" ? window : screen)
    },
    [triggerBy],
  )

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", onChange)
    // Return a cleanup function to remove the event listener.
    return () => subscription.remove()
  }, [onChange])

  const isPortrait = useMemo(() => {
    // Apply forcePortrait/forceLandscape configuration with fallback to dimension-based check.
    if (forcePortrait) return true
    if (forceLandscape) return false
    return dimensions.height > dimensions.width
  }, [dimensions, forcePortrait, forceLandscape])

  const { width } = dimensions

  const viewportCategory = useMemo(() => {
    // Determine viewport category based on width.
    if (width < 640) return ViewportCategory.mobile
    if (width >= 640 && width < 1024) return ViewportCategory.tablet
    return ViewportCategory.desktop
  }, [width])

  // Calculate properties based on viewportCategory to avoid redundant conditions.
  return useMemo(
    () => ({
      isMobile: viewportCategory === ViewportCategory.mobile,
      isTablet: viewportCategory === ViewportCategory.tablet,
      isDesktop: viewportCategory === ViewportCategory.desktop,
      isPortrait,
      dimensions,
      orientation: isPortrait ? "portrait" : "landscape",
      viewportCategory,
    }),
    [viewportCategory, isPortrait, dimensions],
  )
}
