import { useCallback, useReducer } from "react"
import { Dimensions } from "react-native"
import type { LayoutChangeEvent } from "react-native"

interface Layout {
  width: number
  x: number
}

type Action = { type: "SET_LAYOUT"; payload: Layout }

const layoutReducer = (state: Layout, action: Action): Layout => {
  switch (action.type) {
    case "SET_LAYOUT":
      return action.payload
    default:
      return state
  }
}

/**
 * Custom hook to detect if a layout is overflowing the screen width.
 *
 * @returns {Object} - The hook returns an object containing:
 * - `onLayout`: A callback function to be used in the `onLayout` prop of a component.
 * - `isOverflowing`: A boolean indicating whether the layout is overflowing the screen width.
 */
export const useOverflowDetection = () => {
  const [layout, dispatch] = useReducer(layoutReducer, { width: 0, x: 0 })
  const screenWidth = Dimensions.get("window").width

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, x } = event.nativeEvent.layout
    dispatch({ type: "SET_LAYOUT", payload: { width, x } })
  }, [])

  const isOverflowing = layout.x + layout.width > screenWidth

  return { onLayout, isOverflowing }
}
