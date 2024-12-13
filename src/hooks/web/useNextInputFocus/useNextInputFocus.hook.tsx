import { useRef, useCallback } from "react"
import type { NavigationKeyType } from "../../../types/navigation-key.enum"

type UseNextInputFocusOptions = {
  navigationKey?: NavigationKeyType // Defaults to NavigationKey.Enter
  scrollIntoViewOptions?: ScrollIntoViewOptions // Options for scroll behavior
}

export const useNextInputFocus = ({
  navigationKey = "Enter",
  scrollIntoViewOptions = { behavior: "smooth", block: "center" },
}: UseNextInputFocusOptions = {}) => {
  const inputRefs = useRef<(HTMLElement | null)[]>([])

  const setInputRef = useCallback((ref: HTMLElement | null, index: number) => {
    if (ref) {
      inputRefs.current[index] = ref
    }
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number, totalFields: number) => {
      if (e.key === navigationKey) {
        e.preventDefault()
        if (index < totalFields - 1) {
          const nextElement = inputRefs.current[index + 1]
          if (nextElement) {
            nextElement.focus()

            // Scroll into view if not visible
            const rect = nextElement.getBoundingClientRect()
            if (
              rect.top < 0 ||
              rect.bottom >
                (window.innerHeight || document.documentElement.clientHeight)
            ) {
              nextElement.scrollIntoView(scrollIntoViewOptions)
            }
          }
        } else {
          // Submit the form
          const form = (e.target as HTMLElement).closest("form")
          if (form) form.requestSubmit()
        }
      }
    },
    [navigationKey, scrollIntoViewOptions],
  )

  return { setInputRef, handleKeyDown }
}
