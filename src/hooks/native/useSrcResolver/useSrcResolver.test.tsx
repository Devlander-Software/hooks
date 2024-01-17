/* eslint-disable promise/param-names */
import { renderHook } from "@testing-library/react-hooks"
import { useSrcResolver } from "./useSrcResolver.hook"

describe("useSrcResolver hook", () => {
  it("returns the string when src is a string", () => {
    const { result } = renderHook(() =>
      useSrcResolver("https://example.com/image.jpg"),
    )
    expect(result.current).toEqual({
      loading: false,
      errors: [],
      resolvedSrc: "https://example.com/image.jpg",
    })
  })

  it("returns the uri when src is an ImageURISource object", () => {
    const imageSource = { uri: "https://example.com/image.jpg" }
    const { result } = renderHook(() => useSrcResolver(imageSource))
    expect(result.current).toEqual({
      loading: false,
      errors: [],
      resolvedSrc: "https://example.com/image.jpg",
    })
  })

  it("returns the result of the function when src is a function", async () => {
    const srcFunction = () => "https://example.com/image.jpg"
    const { result, waitForNextUpdate } = renderHook(() =>
      useSrcResolver(srcFunction),
    )
    await waitForNextUpdate()
    expect(result.current).toEqual({
      loading: false,
      errors: [],
      resolvedSrc: "https://example.com/image.jpg",
    })
  })

  it("returns null for invalid src types", () => {
    const { result } = renderHook(() => useSrcResolver(null))
    expect(result.current).toEqual({
      loading: false,
      errors: [],
      resolvedSrc: null,
    })
  })

  it("handles promise resolution correctly", async () => {
    const promiseFunction = () => {
      return new Promise<string>((resolve) => {
        resolve("https://example.com/image.jpg")
      })
    }

    const { result, waitForNextUpdate } = renderHook(() =>
      useSrcResolver(promiseFunction),
    )

    await waitForNextUpdate()

    expect(result.current.loading).toBe(false)
    expect(result.current.errors).toHaveLength(0)
    expect(result.current.resolvedSrc).toEqual("https://example.com/image.jpg")
  })

  it("handles promise rejection correctly", async () => {
    const promiseFunction = () => {
      return new Promise<string>((_, reject) => {
        reject(new Error("Failed to load image"))
      })
    }

    const { result, waitForNextUpdate } = renderHook(() =>
      useSrcResolver(promiseFunction),
    )

    await waitForNextUpdate()

    expect(result.current.loading).toBe(false)
    expect(result.current.resolvedSrc).toBeUndefined()
    expect(result.current.errors).toHaveLength(1)
    expect(result.current.errors[0]).toHaveProperty("key", "resolve")
    expect(result.current.errors[0].error).toBeInstanceOf(Error)
  })
})
