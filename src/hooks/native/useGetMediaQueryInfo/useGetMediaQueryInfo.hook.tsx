import { Platform } from "react-native"
import { useDeviceResponsiveState } from "../useDeviceResponsiveState/useDeviceResponsiveState.hook"

export interface MediaQueryBreakpointConfig {
  xSmall: boolean
  small: boolean
  medium: boolean
  large: boolean
  xLarge: boolean
  xxLarge: boolean
  platform: typeof Platform.OS
}

export const useGetMediaQueryInfo = (): MediaQueryBreakpointConfig => {
  const { dimensions } = useDeviceResponsiveState() // Use the base hook
  const { width } = dimensions

  // Calculate granular breakpoints based on width
  return {
    platform: Platform.OS,
    xSmall: width < 640,
    small: width >= 640 && width < 768,
    medium: width >= 768 && width < 1024,
    large: width >= 1024 && width < 1280,
    xLarge: width >= 1280 && width < 1536,
    xxLarge: width >= 1536,
  }
}
