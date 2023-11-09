// Hook for detecting key codes
export function useKeyCodes() {
  const keys = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
  }

  return keys
}

export default useKeyCodes
