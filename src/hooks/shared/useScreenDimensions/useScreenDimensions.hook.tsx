import { useEffect, useMemo, useState } from "react"
import type { ScaledSize } from "react-native"
import { Dimensions } from "react-native"

/**
 * `useScreenDimensions` hook provides the dimensions of the screen for React Native development.
 * It's instrumental in monitoring the current screen size, aiding in real-time screen manipulations.
 *
 * In many scenarios, it's pivotal to have an understanding of the screen's dimensions for layout,
 * design responsiveness, and dynamically rendering or positioning components based on the available space.
 *
 * @example
 * ```typescript
 * const { width, height } = useScreenDimensions();
 * ```
 *
 * @param {Object} options - Configuration options for the hook.
 * @param {string} options.scaleType - Specifies whether to track the "window" or "screen" dimensions.
 * @returns {ScaledSize} An object containing the `width` and `height` of the screen.
 */
export interface UseScreenDimensionsOptions {
  scaleType?: "window" | "screen"
}

export const useScreenDimensions = (
  options?: UseScreenDimensionsOptions,
): ScaledSize => {
  // Check if options exist and are not empty
  const optionsExistAndNotEmpty = useMemo(
    () => options && Object.keys(options).length > 0,
    [options],
  )

  // Determine the scaleType, default to "window" if not provided or invalid
  const scaleType = useMemo(() => {
    const { scaleType } = options || {}
    if (scaleType && (scaleType === "window" || scaleType === "screen")) {
      return scaleType
    }

    return "window"
  }, [optionsExistAndNotEmpty])

  // State to store the screen dimensions
  const [screenSize, setScreenSize] = useState<ScaledSize>(
    Dimensions.get("window"),
  )

  // Subscribe to screen size changes and update the state
  useEffect(() => {
    const onResize = (event: { window: ScaledSize; screen: ScaledSize }) => {
      const dimensionsToGet =
        scaleType === "window" ? event.window : event.screen
      setScreenSize((prevSize) => ({
        ...prevSize,
        width: dimensionsToGet.width,
        height: dimensionsToGet.height,
      }))
    }

    // Subscribe to the event and store the unsubscribe function
    const unsubscribe = Dimensions.addEventListener("change", onResize)

    // Use the unsubscribe function in the cleanup
    return () => unsubscribe.remove()
  }, [scaleType])

  return screenSize
}
