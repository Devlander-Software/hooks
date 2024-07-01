import { useMemo } from "react"

/**
 * Parameters for useAbbreviateNumber hook.
 */
interface UseAbbreviateNumberParams {
  /** The input number or a string representing a number. */
  input: number | string
  /**
   * The rounding method to be applied.
   * 'up' for rounding up, 'down' for rounding down, 'none' for no rounding.
   * Default is 'none'.
   */
  rounding?: "up" | "down" | "none"
}

/**
 * A hook that abbreviates large numbers and optionally applies rounding.
 *
 * @param {UseAbbreviateNumberParams} params - Parameters for the hook.
 * @returns {string} - The abbreviated number as a string.
 */
export function useAbbreviateNumber({
  input,
  rounding = "none",
}: UseAbbreviateNumberParams): string {
  const abbreviated = useMemo(() => {
    let number = typeof input === "string" ? parseFloat(input) : input

    if (isNaN(number)) {
      return input.toString()
    }

    // Apply rounding if needed
    switch (rounding) {
      case "up":
        number = Math.ceil(number)
        break
      case "down":
        number = Math.floor(number)
        break
      default:
        // No rounding
        break
    }

    // Abbreviation logic
    if (number >= 1000000000000000) {
      return Math.round(number / 1000000000000000) + "q"
    } else if (number >= 1000000000000) {
      return Math.round(number / 1000000000000) + "T"
    } else if (number >= 1000000000) {
      return Math.round(number / 1000000000) + "B"
    } else if (number >= 1000000) {
      return Math.round(number / 1000000) + "M"
    } else if (number >= 1000) {
      return Math.round(number / 1000) + "K"
    } else {
      return number.toString()
    }
  }, [input, rounding])

  return abbreviated
}
