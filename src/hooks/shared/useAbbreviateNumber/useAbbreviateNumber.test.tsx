import { renderHook } from "@testing-library/react-hooks"
import { useAbbreviateNumber } from "./useAbbreviateNumber.hook"

describe("useAbbreviateNumber", () => {
  it("should abbreviate 1000 to 1K", () => {
    const { result } = renderHook(() => useAbbreviateNumber({ input: 1000 }))
    expect(result.current).toBe("1K")
  })

  it("should abbreviate 1000000 to 1M", () => {
    const { result } = renderHook(() => useAbbreviateNumber({ input: 1000000 }))
    expect(result.current).toBe("1M")
  })

  it('should round 1500 down to 1K when rounding is "down"', () => {
    const { result } = renderHook(() =>
      useAbbreviateNumber({ input: 1500, rounding: "down" }),
    )
    expect(result.current).toBe("1K")
  })

  it('should round 1500 up to 2K when rounding is "up"', () => {
    const { result } = renderHook(() =>
      useAbbreviateNumber({ input: 1500, rounding: "up" }),
    )
    expect(result.current).toBe("2K")
  })

  it("should handle non-numeric strings", () => {
    const { result } = renderHook(() => useAbbreviateNumber({ input: "abc" }))
    expect(result.current).toBe("abc")
  })

  it("should parse numeric strings correctly", () => {
    const { result } = renderHook(() => useAbbreviateNumber({ input: "1000" }))
    expect(result.current).toBe("1K")
  })

  // Add more tests as necessary for each scenario your hook should handle
})
