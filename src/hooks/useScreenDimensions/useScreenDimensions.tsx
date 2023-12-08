import { useEffect, useState } from "react"
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
 * @returns {Object} An object containing the `width` and `height` of the screen.
 */

export const useScreenDimensions = (): ScaledSize => {
  const [screenSize, setScreenSize] = useState<ScaledSize>(
    Dimensions.get("window"),
  )

  useEffect(() => {
    const onResize = (event: { window: ScaledSize; screen: ScaledSize }) => {
      setScreenSize((prevSize) => ({
        ...prevSize,
        width: event.window.width,
        height: event.window.height,
      }))
    }

    // Subscribe to the event and store the unsubscribe function
    const unsubscribe = Dimensions.addEventListener("change", onResize)

    // Use the unsubscribe function in the cleanup
    return () => unsubscribe.remove()
  }, [])

  return screenSize
}
