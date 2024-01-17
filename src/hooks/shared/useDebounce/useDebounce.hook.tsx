import { useEffect, useState } from "react"

/**
 * Custom hook to debounce a value.
 *
 * @param value - The value to debounce.
 * @param delay - The delay in milliseconds to wait before updating the debounced value.
 * @returns The debounced value.
 */

export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<any>(value)

  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cleanup function
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay]) // Only re-call effect if value or delay changes

  return debouncedValue
}
