import { useEffect, useRef, useReducer, useCallback } from "react"
import { Dimensions } from "react-native"

type ResponsiveColumnsConfig = {
  portrait: {
    xs: number
    sm: number
    md: number
    lg: number
  }
  landscape: {
    xs: number
    sm: number
    md: number
    lg: number
  }
  minColumns?: number
  maxColumns?: number
}

type Breakpoints = {
  xs: number
  sm: number
  md: number
  lg: number
  [key: string]: number
}

type State = {
  tileCount: number
  loadingTileCount: boolean
}

type Action =
  | { type: "SET_TILE_COUNT"; payload: number }
  | { type: "SET_LOADING"; payload: boolean }

const initialState: State = {
  tileCount: 1, // Default initial tile count
  loadingTileCount: true, // Initially loading
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_TILE_COUNT":
      return { ...state, tileCount: action.payload }
    case "SET_LOADING":
      return { ...state, loadingTileCount: action.payload }
    default:
      return state
  }
}

/**
 * Custom hook for determining the column count of a FlatList based on screen orientation and device size,
 * using useReducer for state management.
 *
 * @param {ResponsiveColumnsConfig} config - Specifies the column counts for each orientation and device size.
 * @param {Breakpoints} breakpoints - Custom size breakpoints for screen categories (xs, sm, md, lg).
 * @returns {object} - An object containing the current column count and a loading state.
 */
export function useResponsiveColumns(
  config: ResponsiveColumnsConfig,
  breakpoints: Breakpoints = { xs: 320, sm: 576, md: 768, lg: 992 },
): { tileCount: number; loadingTileCount: boolean } {
  const [state, dispatch] = useReducer(reducer, initialState)
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const calculateTileCount = useCallback(() => {
    const { width, height } = Dimensions.get("window")
    const isLandscape = width > height
    const orientation = isLandscape ? "landscape" : "portrait"

    // Determine size category based on breakpoints
    let sizeCategory: keyof ResponsiveColumnsConfig["portrait"] = "xs"
    if (width <= breakpoints.xs) {
      sizeCategory = "xs"
    } else if (width <= breakpoints.sm) {
      sizeCategory = "sm"
    } else if (width <= breakpoints.md) {
      sizeCategory = "md"
    } else if (width <= breakpoints.lg) {
      sizeCategory = "lg"
    }

    // Calculate tile count with min and max boundaries
    let calculatedCount = config[orientation][sizeCategory]
    if (config.minColumns !== undefined) {
      calculatedCount = Math.max(config.minColumns, calculatedCount)
    }
    if (config.maxColumns !== undefined) {
      calculatedCount = Math.min(config.maxColumns, calculatedCount)
    }

    return calculatedCount
  }, [config, breakpoints])

  useEffect(() => {
    const updateTileCount = () => {
      dispatch({ type: "SET_LOADING", payload: true })

      if (debounceTimeout.current) clearTimeout(debounceTimeout.current)

      debounceTimeout.current = setTimeout(() => {
        const newTileCount = calculateTileCount()

        dispatch({ type: "SET_TILE_COUNT", payload: newTileCount })
        dispatch({ type: "SET_LOADING", payload: false })
      }, 200) // Debounce delay to handle rapid changes
    }

    // Initial setting of tile count
    updateTileCount()

    // Listen for dimension changes
    const subscription = Dimensions.addEventListener("change", updateTileCount)
    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current)
      subscription.remove()
    }
  }, [config, breakpoints, calculateTileCount])

  return {
    tileCount: state.tileCount,
    loadingTileCount: state.loadingTileCount,
  }
}
