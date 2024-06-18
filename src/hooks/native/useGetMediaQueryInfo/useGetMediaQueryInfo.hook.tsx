import { useEffect, useState } from "react"
import { Dimensions, Platform } from "react-native"

export interface MediaQueryBreakpointConfig {
  xSmall: boolean
  small: boolean
  medium: boolean
  large: boolean
  xLarge: boolean
  xxLarge: boolean
  platform: typeof Platform.OS
}

export const useGetMediaQueryInfo = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get("window"))

  useEffect(() => {
    const onChange = ({ window }: { window: any }) => {
      setDimensions(window)
    }

    Dimensions.addEventListener("change", onChange)
    return () =>
      window.removeEventListener("resize", onChange as unknown as EventListener)
  }, [])

  const { width } = dimensions
  const mediaQueryInfo: MediaQueryBreakpointConfig = {
    platform: Platform.OS,
    xSmall: width < 640,
    small: width >= 640 && width < 768,
    medium: width >= 768 && width < 1024,
    large: width >= 1024 && width < 1280,
    xLarge: width >= 1280 && width < 1536,
    xxLarge: width >= 1536,
  }

  return mediaQueryInfo
}
