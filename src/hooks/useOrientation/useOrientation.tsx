import React from "react"
import { Dimensions } from "react-native"

export function getOrientation(): "portrait" | "landscape" {
  const { height, width } = Dimensions.get("window")
  return height >= width ? "portrait" : "landscape"
}

export function useOrientation(): "portrait" | "landscape" {
  const [orientation, setOrientation] = React.useState<
    "portrait" | "landscape"
  >(getOrientation())

  const updateOrientation = () => {
    const { height, width } = Dimensions.get("window")
    setOrientation(height >= width ? "portrait" : "landscape")
  }

  React.useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      updateOrientation,
    )
    // For older versions of React Native, you may need to use:
    // const subscription = Dimensions.addEventListener('change', updateOrientation);

    // Cleanup subscription on unmount
    return () => {
      if (subscription?.remove) {
        subscription.remove()
      } else {
        // For older versions of React Native that do not return a subscription object,
        // you would use the below line:
        // Dimensions.removeEventListener('change', updateOrientation);
      }
    }
  }, [])

  return orientation
}
