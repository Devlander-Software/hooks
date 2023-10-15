import { useEffect, useState } from "react"
import { Dimensions, ScaledSize } from "react-native"

const useScreenDimensionsForNative = (): ScaledSize => {
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

export default useScreenDimensionsForNative
