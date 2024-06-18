import { renderHook } from "@testing-library/react-hooks"
import { useContainerStyle } from "./useContainerStyle.hook"

describe("useContainerStyle", () => {
  it("should return the container style when passed a single style object", () => {
    const containerStyle = { backgroundColor: "red", padding: 10 }
    const { result } = renderHook(() => useContainerStyle(containerStyle))
    expect(result.current).toEqual(containerStyle)
  })

  it("should return the first container style when passed an array of styles", () => {
    const containerStyles = [{ backgroundColor: "red" }, { padding: 10 }]
    const { result } = renderHook(() => useContainerStyle(containerStyles))
    expect(result.current).toEqual(containerStyles[0])
  })

  it("should return an empty object when passed an empty style object", () => {
    const containerStyle = {}
    const { result } = renderHook(() => useContainerStyle(containerStyle))
    expect(result.current).toEqual({})
  })
})
