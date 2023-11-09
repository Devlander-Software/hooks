import { useKeyCodes } from "../useKeyCodes"

// Hook for preventing default behavior
export function usePreventDefault() {
  function preventDefault(e: any) {
    e.preventDefault()
  }

  function preventDefaultForScrollKeys(e: any) {
    const keys = useKeyCodes()
    if (keys[e.keyCode as keyof typeof keys]) {
      preventDefault(e)
      return false
    }
  }

  return { preventDefault, preventDefaultForScrollKeys }
}

export default usePreventDefault
