import { renderHook, act } from '@testing-library/react-hooks'
import type { LayoutChangeEvent } from 'react-native'
import { useViewSize } from './useViewSize.hook'

describe('useViewSize hook', () => {
  it('should initialize with default size', () => {
    const { result } = renderHook(() => useViewSize())

    const [size] = result.current
    expect(size).toEqual({ width: 0, height: 0, x: 0, y: 0 })
  })

  it('should update size on layout change', () => {
    const { result } = renderHook(() => useViewSize())

    const [, onLayout] = result.current

    const mockEvent: LayoutChangeEvent = {
        nativeEvent: {
            layout: { width: 100, height: 200, x: 10, y: 20 },
        },
        currentTarget: 0,
        target: 0,
        bubbles: false,
        cancelable: false,
        defaultPrevented: false,
        eventPhase: 0,
        isTrusted: false,
        preventDefault: function (): void {
            throw new Error('Function not implemented.')
        },
        isDefaultPrevented: function (): boolean {
            throw new Error('Function not implemented.')
        },
        stopPropagation: function (): void {
            throw new Error('Function not implemented.')
        },
        isPropagationStopped: function (): boolean {
            throw new Error('Function not implemented.')
        },
        persist: function (): void {
            throw new Error('Function not implemented.')
        },
        timeStamp: 0,
        type: ''
    }

    act(() => {
      onLayout(mockEvent)
    })

    const [updatedSize] = result.current
    expect(updatedSize).toEqual({ width: 100, height: 200, x: 10, y: 20 })
  })
})