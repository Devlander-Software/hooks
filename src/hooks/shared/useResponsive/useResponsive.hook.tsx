import { useReducer, useEffect, useMemo } from "react"
import { Dimensions } from "react-native"

// Include an xs breakpoint in the default breakpoints
export const defaultBreakpoints = {
  xs: { portrait: 320, landscape: 480 },
  sm: { portrait: 360, landscape: 600 },
  md: { portrait: 768, landscape: 1024 },
  lg: { portrait: 1024, landscape: 1366 },
  xl: { portrait: 1440, landscape: 1920 },
}

const initialState = (breakpoints: typeof defaultBreakpoints) => ({
  orientation: getOrientation(),
  sizeCategory: getSizeCategory(breakpoints),
  width: Dimensions.get("window").width,
})

function getOrientation() {
  const { width, height } = Dimensions.get("window")
  return height >= width ? "portrait" : "landscape"
}

function getSizeCategory(breakpoints: typeof defaultBreakpoints) {
  const { width } = Dimensions.get("window")
  const currentOrientation = getOrientation()

  if (width >= breakpoints.xl[currentOrientation]) return "xl"
  if (width >= breakpoints.lg[currentOrientation]) return "lg"
  if (width >= breakpoints.md[currentOrientation]) return "md"
  if (width >= breakpoints.sm[currentOrientation]) return "sm"
  return "xs"
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "SET_DIMENSIONS":
      return {
        ...state,
        width: action.payload.width,
        orientation: getOrientation(),
        sizeCategory: getSizeCategory(action.payload.breakpoints),
      }
    default:
      return state
  }
}

/**
 * Custom hook to handle responsive design based on breakpoints.
 *
 * @param {object} customBreakpoints - Custom breakpoints to override the default breakpoints.
 * @returns {object} - An object containing the current orientation, size category, and a function to get responsive values.
 *
 * @typedef {object} Breakpoints
 * @property {number} xs - Extra small breakpoint.
 * @property {number} sm - Small breakpoint.
 * @property {number} md - Medium breakpoint.
 * @property {number} lg - Large breakpoint.
 * @property {number} xl - Extra large breakpoint.
 *
 * @typedef {object} State
 * @property {string} orientation - The current orientation (portrait or landscape).
 * @property {string} sizeCategory - The current size category (xs, sm, md, lg, xl).
 * @property {number} width - The current width of the window.
 *
 * @function getResponsiveValue
 * @param {object} range - The range of values to interpolate between.
 * @param {number} range.min - The minimum value of the range.
 * @param {number} range.max - The maximum value of the range.
 * @param {string} category - The category of the breakpoint (xs, sm, md, lg, xl).
 * @returns {number} - The interpolated value based on the current width and breakpoints.
 *
 * @function getNextCategory
 * @param {string} category - The current category of the breakpoint.
 * @returns {string} - The next category of the breakpoint.
 *
 * @function interpolate
 * @param {number} value - The current value to interpolate.
 * @param {number} minValue - The minimum value of the range.
 * @param {number} maxValue - The maximum value of the range.
 * @param {number} minRange - The minimum range value.
 * @param {number} maxRange - The maximum range value.
 * @returns {number} - The interpolated value.
 *
 * @function useEffect
 * @description - Effect hook to handle window resize events and update the state accordingly.
 *
 * @returns {object} - An object containing the current orientation, size category, and a function to get responsive values.
 */
export const useResponsive = (customBreakpoints = defaultBreakpoints) => {
  const breakpoints = useMemo(
    () => ({ ...defaultBreakpoints, ...customBreakpoints }),
    [customBreakpoints],
  )
  const [state, dispatch] = useReducer(reducer, initialState(breakpoints))

  function getResponsiveValue(
    range: { min: number; max: number },
    category: keyof typeof defaultBreakpoints,
  ) {
    const currentOrientation = state.orientation
    const minSize =
      breakpoints[category as keyof typeof breakpoints][
        currentOrientation as "portrait" | "landscape"
      ]
    const nextCategory = getNextCategory(
      category,
    ) as keyof typeof defaultBreakpoints
    const maxSize = breakpoints[nextCategory]
      ? breakpoints[nextCategory][
          currentOrientation as keyof (typeof breakpoints)[keyof typeof breakpoints]
        ]
      : minSize

    const { min, max } = range
    const interpolatedValue = interpolate(
      state.width,
      minSize,
      maxSize,
      min,
      max,
    )

    return interpolatedValue
  }

  function getNextCategory(category: keyof typeof defaultBreakpoints) {
    const categories = ["xs", "sm", "md", "lg", "xl"]
    const currentIndex = categories.indexOf(category)
    return categories[currentIndex + 1] || category
  }

  function interpolate(
    value: number,
    minValue: number,
    maxValue: number,
    minRange: number,
    maxRange: number,
  ) {
    return (
      ((value - minValue) * (maxRange - minRange)) / (maxValue - minValue) +
      minRange
    )
  }

  useEffect(() => {
    const handleChange = ({ window }: { window: { width: number } }) => {
      dispatch({
        type: "SET_DIMENSIONS",
        payload: { width: window.width, breakpoints },
      })
    }

    const subscription = Dimensions.addEventListener("change", handleChange)
    return () => subscription.remove()
  }, [breakpoints])

  return {
    orientation: state.orientation,
    sizeCategory: state.sizeCategory,
    getResponsiveValue,
  }
}
