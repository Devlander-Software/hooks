import { useEffect, useState } from "react"
import type { ScaledSize } from "react-native"
import { Dimensions } from "react-native"

/**
 * `useViewportInfo` hook provides the dimensions of both the window and the screen.
 * Useful for responsive layouts and dynamically adapting UI components
 * based on available space.
 *
 * @returns {{windowDimensions: ScaledSize, screenDimensions: ScaledSize}}
 * An object containing both the `window` and `screen` dimensions.
 */
export const useViewportInfo = (): {
  windowDimensions: ScaledSize
  screenDimensions: ScaledSize
} => {
  // State for window and screen dimensions
  const [windowDimensions, setWindowDimensions] = useState<ScaledSize>(
    Dimensions.get("window"),
  )
  const [screenDimensions, setScreenDimensions] = useState<ScaledSize>(
    Dimensions.get("screen"),
  )

  useEffect(() => {
    const onResize = (event: { window: ScaledSize; screen: ScaledSize }) => {
      setWindowDimensions(event.window)
      setScreenDimensions(event.screen)
    }

    // Subscribe to dimension changes
    const subscription = Dimensions.addEventListener("change", onResize)

    // Cleanup subscription on unmount
    return () => subscription.remove()
  }, [])

  return { windowDimensions, screenDimensions }
}
