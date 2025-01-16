import { useCallback } from "react"

type ConditionalCallback<T extends (...args: any[]) => any> = T | undefined

/**
 * Custom hook to create a conditional callback.
 *
 * @param callback - The function to invoke if conditions are met.
 * @param conditions - A single boolean or array of booleans; the callback is invoked only if all are true.
 * @returns A memoized callback that only calls `callback` if all conditions are true.
 */
export const useConditionalCallback = <T extends (...args: any[]) => any>(
  callback: ConditionalCallback<T>,
  conditions: boolean | boolean[],
) => {
  const allConditionsMet = Array.isArray(conditions)
    ? conditions.every(Boolean)
    : conditions

  return useCallback(
    (...args: Parameters<T>) => {
      if (callback && typeof callback === "function" && allConditionsMet) {
        callback(...args)
      }
    },
    [callback, allConditionsMet], // Rerun if the callback or conditions change
  )
}
