import { useCallback, useState } from "react"
import type { LayoutChangeEvent, LayoutRectangle } from "react-native"
import type { LayoutType } from "../../../types/screen-size.type"

export const useViewSize = (): [
  LayoutRectangle,
  (event: LayoutChangeEvent) => void,
] => {
  const [size, setSize] = useState<LayoutType>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  })

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const layout = event.nativeEvent.layout as LayoutType
    setSize(layout)
  }, [])

  return [size, onLayout]
}
