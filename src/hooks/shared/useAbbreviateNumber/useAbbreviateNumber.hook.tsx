import { useMemo } from "react"
import type { AbbreviateOptions } from "@devlander/utils"
import { abbreviateNumber } from "@devlander/utils"

/**
 * Options for formatting the abbreviated number's suffix.
 */

/**
 * Parameters for useAbbreviateNumber hook.
 */
export interface UseAbbreviateNumberParams extends AbbreviateOptions {
  /** The input number or a string representing a number. */
  input: number | string
  /**
   * The rounding method to be applied.
   * 'up' for rounding up, 'down' for rounding down, 'none' for no rounding.
   * Default is 'none'.
   */
  rounding?: "up" | "down" | "none"
  /**
   * The case for the suffix.
   * 'lower' for lowercase, 'upper' for uppercase.
   * Default is 'upper'.
   */
  case?: "lower" | "upper"
}

/**
 * A hook that abbreviates large numbers and optionally applies rounding.
 *
 * @param {UseAbbreviateNumberParams} params - Parameters for the hook.
 * @returns {string} - The abbreviated number as a string.
 */
export function useAbbreviateNumber(params: UseAbbreviateNumberParams): string {
  const { input, rounding = "none", case: caseOption = "upper" } = params || {};

  const abbreviated = useMemo(() => {
    let result = abbreviateNumber(input, { rounding, case: caseOption });
    return result.replace(/\.0(?=[A-Za-z])/, ""); // Remove `.0` if present
  }, [input, rounding, caseOption]);

  return abbreviated;
}
