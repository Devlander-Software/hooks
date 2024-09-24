import { useCallback, useEffect, useMemo, useRef, useReducer } from "react"
import type { View } from "react-native"
import { Dimensions } from "react-native"
import type { DimensionData } from "../../../types/dimension-data.type"

/**
 * A hook that monitors the visibility of a native React component within the viewport.
 * It tracks the dimensions of the target component and determines if it's visible
 * based on a given offset. If no offset is provided, full visibility is required.
 *
 * @param onChange - Callback that fires when the visibility status of the component changes.
 * @param config - Configuration options to determine when visibility is triggered.
 * @param stopWatching - Boolean to control whether visibility checks should continue.
 * @returns A ref that should be attached to the component being observed.
 *
 * @example
 * const viewRef = useVisibilitySensor(isVisible => console.log(isVisible), { visibilityOffset: VisibilityOffset.PARTIAL });
 * <View ref={viewRef} />
 */

// Enum to represent different visibility levels
export enum VisibilityOffset {
  FULL = 1, // Full visibility required
  PARTIAL = 0.5, // 50% of the component needs to be visible
  MINIMAL = 0.25, // 25% of the component needs to be visible
}

export interface UseVisibilitySensorOptions<T> {
  (
    onChange: (visible: boolean) => void,
    config?: UseVisibilityOptionsConfig,
    stopWatching?: boolean,
  ): React.RefObject<T>
}

export type UseVisibilitySensorNative = UseVisibilitySensorOptions<View>

export interface UseVisibilityOptionsConfig {
  visibilityOffset?: VisibilityOffset // An enum representing visibility thresholds
  checkInterval?: number // How often (in ms) to check the visibility, defaults to 1000ms
}

// Reducer function to handle the state transitions
interface State {
  dimensions: DimensionData
  lastValue: boolean
}

type Action =
  | { type: "SET_DIMENSIONS"; payload: DimensionData }
  | { type: "SET_LAST_VALUE"; payload: boolean }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_DIMENSIONS":
      return { ...state, dimensions: action.payload }
    case "SET_LAST_VALUE":
      return { ...state, lastValue: action.payload }
    default:
      return state
  }
}

export const useVisibilitySensor: UseVisibilitySensorNative = (
  onChange: (visible: boolean) => void,
  config: UseVisibilityOptionsConfig = {},
  stopWatching: boolean = false,
) => {
  const myView = useRef<View>(null)

  // Initial state with dimensions and lastValue
  const initialState: State = {
    dimensions: { rectTop: 0, rectBottom: 0, rectWidth: 0 },
    lastValue: false,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  // Memoize the finalConfig object so it doesn't change on every render
  const finalConfig = useMemo(
    () => ({
      visibilityOffset: VisibilityOffset.FULL,
      checkInterval: 1000,
      ...config,
    }),
    [config],
  )

  const startWatching = useCallback(() => {
    if (stopWatching) return

    const intervalId = setInterval(() => {
      if (!myView.current) return

      myView.current.measure(
        (
          _x: number,
          _y: number,
          width: number,
          height: number,
          pageX: number,
          pageY: number,
        ) => {
          const newDimensions = {
            rectTop: pageY,
            rectBottom: pageY + height,
            rectWidth: pageX + width,
          }

          // Dispatch new dimensions if they change
          dispatch({ type: "SET_DIMENSIONS", payload: newDimensions })
        },
      )
    }, finalConfig.checkInterval)

    return () => clearInterval(intervalId)
  }, [finalConfig.checkInterval, stopWatching])

  useEffect(() => {
    const stopInterval = startWatching()
    return () => {
      if (stopInterval) stopInterval()
    }
  }, [startWatching])

  useEffect(() => {
    const window = Dimensions.get("window")

    // Use the enum value to determine how much of the component needs to be visible
    const offset = finalConfig.visibilityOffset
    const visibleHeight = window.height * offset

    const isVisible =
      state.dimensions.rectBottom > visibleHeight &&
      state.dimensions.rectTop >= 0 &&
      state.dimensions.rectWidth > 0 &&
      state.dimensions.rectWidth <= window.width

    // Dispatch new visibility state if it changes
    if (state.lastValue !== isVisible) {
      dispatch({ type: "SET_LAST_VALUE", payload: isVisible })
      onChange(isVisible)
    }
  }, [state.dimensions, state.lastValue, onChange, finalConfig])

  return myView as React.MutableRefObject<View>
}
