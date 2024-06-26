import { usePreventDefault } from "../usePreventDefault/usePreventDefault.hook"

// Hook for disabling and enabling scroll
export function useScrollControl(): {
  disableScroll: () => void
  enableScroll: () => void
} {
  const { preventDefault, preventDefaultForScrollKeys } = usePreventDefault()

  function disableScroll() {
    if (window.addEventListener) {
      window.addEventListener("DOMMouseScroll", preventDefault, false)
      document.addEventListener("wheel", preventDefault, { passive: false })
      window.onwheel = preventDefault

      window.ontouchmove = preventDefault
      document.onkeydown = preventDefaultForScrollKeys
    }
  }

  function enableScroll() {
    if (window.removeEventListener) {
      window.removeEventListener("DOMMouseScroll", preventDefault, false)
      document.removeEventListener("wheel", preventDefault)
      window.onwheel = null
      window.ontouchmove = null
      document.onkeydown = null
    }
  }

  return { disableScroll, enableScroll }
}
