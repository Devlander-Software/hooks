import type { MutableRefObject } from "react"
import { useEffect, useRef, useState } from "react"
import type { LayoutType } from "../../types/screen-size.type"

type SizeType = LayoutType | DOMRect

/**
 * Represents the type of size information.
 * @typedef {LayoutType | DOMRect} SizeType
 */

/**
 * Custom hook to track the size of an element.
 * @returns {[SizeType, MutableRefObject<HTMLElement | null>]} An array containing the current size and a ref to the element.
 */

export const useElementSize = (): [
  SizeType,
  MutableRefObject<HTMLElement | null>,
] => {
  const ref = useRef<HTMLElement | null>(null)
  const [size, setSize] = useState<SizeType>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const boundingRect = ref.current.getBoundingClientRect()
        setSize({
          width: boundingRect.width || 0,
          height: boundingRect.height || 0,
          x: boundingRect.x || 0,
          y: boundingRect.y || 0,
        })
      }
    }

    // Initialize size
    handleResize()

    // Add the event listener
    window.addEventListener("resize", handleResize)

    // Cleanup by removing the event listener
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return [size, ref]
}
