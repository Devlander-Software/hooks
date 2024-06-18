import { renderHook } from "@testing-library/react-hooks"
import { useIsMounted } from "./useIsMounted.hook"

describe("useIsMounted", () => {
  it("shallow validate if useIsMounted is defined", () => {
    expect(useIsMounted).toBeDefined()
  })

  it("should return current reference object with true value if component is mounted", () => {
    const { result } = renderHook(() => useIsMounted())
    expect(result.current).toEqual({ current: true })
  })

  it("should return current reference object with false value if component is unmounted", () => {
    const { result, unmount } = renderHook(() => useIsMounted())
    unmount()
    expect(result.current).toEqual({ current: false })
  })
})
