import { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { DimensionData } from '../../types/dimension-data.type';
import { UseVisibilitySensorNative } from './useVisibilitySensor';

/**
 * A hook that monitors the visibility of a native React component within the viewport.
 * It tracks the dimensions of the target component and determines if it's entirely visible.
 *
 * @param onChange - Callback that fires when the visibility status of the component changes.
 * @returns A ref that should be attached to the component being observed.
 *
 * @example
 * const viewRef = useVisibilitySensorForNative(isVisible => console.log(isVisible));
 * <View ref={viewRef} />
 */



 export const useVisibilitySensorForNative: UseVisibilitySensorNative = (onChange: (visible: boolean) => void) => {
  const myView = useRef<View>(null)
  const [lastValue, setLastValue] = useState<boolean>(false)
  const [dimensions, setDimensions] = useState<DimensionData>({
    rectTop: 0,
    rectBottom: 0,
    rectWidth: 0
  })

  const startWatching = useCallback(() => {
    const intervalId = setInterval(() => {
      if (!myView.current) return

      myView.current.measure((_x, _y, width, height, pageX, pageY) => {
        const newDimensions = {
          rectTop: pageY,
          rectBottom: pageY + height,
          rectWidth: pageX + width
        }

        setDimensions(prevDimensions => {
          // Check if dimensions actually changed
          if (
            prevDimensions.rectTop !== newDimensions.rectTop ||
            prevDimensions.rectBottom !== newDimensions.rectBottom ||
            prevDimensions.rectWidth !== newDimensions.rectWidth
          ) {
            return newDimensions
          }
          return prevDimensions
        })
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const stopWatching = startWatching()
    return () => stopWatching()
  }, [startWatching])

  useEffect(() => {
    const window = Dimensions.get('window')
    const isVisible =
      dimensions.rectBottom !== 0 &&
      dimensions.rectTop >= 0 &&
      dimensions.rectBottom <= window.height &&
      dimensions.rectWidth > 0 &&
      dimensions.rectWidth <= window.width

    if (lastValue !== isVisible) {
      setLastValue(isVisible)
      onChange(isVisible)
    }
  }, [dimensions, lastValue, onChange])

  return myView as React.MutableRefObject<View>;
}

export default useVisibilitySensorForNative;
