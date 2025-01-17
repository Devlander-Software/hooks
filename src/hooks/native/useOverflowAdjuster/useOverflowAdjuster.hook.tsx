import { useReducer, useCallback } from "react"
import type { LayoutChangeEvent } from "react-native"
import { Dimensions } from "react-native"

interface OverflowAdjusterLayout {
  width: number
  x: number
}

interface OverflowAdjusterState {
  unit: number
  tempUnit: number // Temporary unit for calculations
  isOverflowing: boolean
  layout: OverflowAdjusterLayout
}

type Action =
  | { type: "SET_LAYOUT"; payload: OverflowAdjusterLayout }
  | { type: "SET_TEMP_UNIT"; payload: number }
  | { type: "CONFIRM_UNIT" }

const reducer = (
  state: OverflowAdjusterState,
  action: Action
): OverflowAdjusterState => {
  switch (action.type) {
    case "SET_LAYOUT":
      const isOverflowing =
        action.payload.x + action.payload.width >
        Dimensions.get("window").width
      return { ...state, layout: action.payload, isOverflowing }
    case "SET_TEMP_UNIT":
      return { ...state, tempUnit: action.payload }
    case "CONFIRM_UNIT":
      return { ...state, unit: state.tempUnit }
    default:
      throw new Error("Unhandled action type")
  }
}

export const useOverflowAdjuster = (initialUnit: number, step = 1) => {
  const [state, dispatch] = useReducer(reducer, {
    unit: initialUnit,
    tempUnit: initialUnit,
    isOverflowing: false,
    layout: { width: 0, x: 0 },
  })

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      let { width } = event.nativeEvent.layout
      const { x } = event.nativeEvent.layout
      dispatch({ type: "SET_LAYOUT", payload: { width, x } })

      let adjustedUnit = state.tempUnit
      const screenWidth = Dimensions.get("window").width

      // Decrease tempUnit until it fits
      while (adjustedUnit > 0 && x + width > screenWidth) {
        adjustedUnit -= step
        width -= step // Assume the width decreases with the unit
      }

      // Update tempUnit but don't confirm until it fits
      dispatch({ type: "SET_TEMP_UNIT", payload: adjustedUnit })
      if (x + width <= screenWidth) {
        dispatch({ type: "CONFIRM_UNIT" })
      }
    },
    [state.tempUnit, step]
  )

  return { unit: state.unit, onLayout, isOverflowing: state.isOverflowing }
}
