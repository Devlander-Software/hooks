/**
 * A React Hook to easily manage focus transitions between multiple TextInputs in React Native forms.
 *
 * This hook helps navigate between TextInputs using the `onSubmitEditing` prop, automatically focusing
 * the next input or dismissing the keyboard when the last input is submitted.
 * Additionally, it can trigger a custom submit callback when the last input is submitted.
 *
 * @param {Function} [onSubmit] - Optional callback to execute when the last input is submitted.
 * @returns {Object} An object containing `registerInput` and `handleNextInput`.
 * @property {Function} registerInput - Registers a TextInput reference with its index.
 * @property {Function} handleNextInput - Moves focus to the next input, dismisses the keyboard, or triggers `onSubmit`.
 */
import { useRef, useCallback } from "react"
import { Keyboard } from "react-native"
import type { TextInput } from "react-native"

export const useNextTextInputFocus = (onSubmit?: () => void) => {
  const inputRefs = useRef<(TextInput | null)[]>([])

  /**
   * Registers a TextInput reference with its corresponding index.
   * This allows the hook to manage focus transitions between inputs.
   *
   * @param {TextInput | null} ref - The TextInput reference.
   * @param {number} index - The index of the TextInput in the form.
   */
  const registerInput = useCallback((ref: TextInput | null, index: number) => {
    if (ref) {
      inputRefs.current[index] = ref
    }
  }, [])

  /**
   * Moves focus to the next input or dismisses the keyboard when the last input is submitted.
   * If `onSubmit` is provided, it will be called when the last input is submitted.
   *
   * @param {number} index - The index of the current TextInput.
   */
  const handleNextInput = useCallback(
    (index: number) => {
      const nextInput = inputRefs.current[index + 1]
      if (nextInput) {
        nextInput.focus()
      } else {
        if (onSubmit) {
          onSubmit() // Trigger the submit callback
        }
        Keyboard.dismiss() // Close the keyboard if there’s no next input
      }
    },
    [onSubmit],
  )

  return { registerInput, handleNextInput }
}
