/**
 * Parameters for useAbbreviateNumber hook.
 */
interface UseAbbreviateNumberParams {
    /** The input number or a string representing a number. */
    input: number | string;
    /**
     * The rounding method to be applied.
     * 'up' for rounding up, 'down' for rounding down, 'none' for no rounding.
     * Default is 'none'.
     */
    rounding?: "up" | "down" | "none";
}
/**
 * A hook that abbreviates large numbers and optionally applies rounding.
 *
 * @param {UseAbbreviateNumberParams} params - Parameters for the hook.
 * @returns {string} - The abbreviated number as a string.
 */
export declare function useAbbreviateNumber({ input, rounding, }: UseAbbreviateNumberParams): string;
export {};
