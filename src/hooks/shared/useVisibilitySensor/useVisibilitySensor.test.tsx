// useVisibilitySensor.test.tsx
import React from "react"
import { render } from "@testing-library/react-native"
import { Dimensions, View } from "react-native"
import { useVisibilitySensor } from "./useVisibilitySensor.hook" // Adjust import path

jest.mock("react-native", () => {
  const actualReactNative = jest.requireActual("react-native")
  return {
    ...actualReactNative,
    Dimensions: {
      get: jest.fn(),
    },
  }
})

const MockComponent = () => {
  const onChange = jest.fn()
  const viewRef = useVisibilitySensor(onChange)

  return <View ref={viewRef} />
}

describe("useVisibilitySensor Hook", () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it("should call onChange with true when the component is visible", () => {
    jest.spyOn(Dimensions, "get").mockReturnValue({
      width: 100,
      height: 100,
      scale: 0,
      fontScale: 0,
    })
    View.prototype.measure = jest.fn((callback) =>
      callback(0, 0, 50, 50, 10, 10),
    )

    const { getByTestId } = render(<MockComponent />)
    const component = getByTestId("mock-component")

    jest.advanceTimersByTime(1000)

    expect(component.props.onChange).toHaveBeenCalledWith(true)
  })

  // Add more tests as needed
})
