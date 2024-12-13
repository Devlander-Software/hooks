import type React from "react"
import { useCallback, useRef } from "react"
interface UseSubmitEditingOptions {
  onSubmitEditing?: () => void
}

export const useSubmitEditing = ({
  onSubmitEditing,
}: UseSubmitEditingOptions) => {
  // Create a ref to attach to the input field
  const inputRef = useRef<HTMLElement>(null)

  // Handle key down events
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if ((e.key === "Enter" || e.key === "Return") && onSubmitEditing) {
        e.preventDefault()
        onSubmitEditing()
      }
    },
    [onSubmitEditing],
  )

  return { handleKeyDown, inputRef }
}
