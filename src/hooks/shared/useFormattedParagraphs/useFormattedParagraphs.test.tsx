import { renderHook } from "@testing-library/react-hooks"
import { useFormattedParagraphs } from "./useFormattedParagraphs.hook"

describe("useFormattedParagraphs", () => {
  it("should format paragraphs with proper spacing", () => {
    const description = `Line 1
      Line 2

      Line 3
    `

    const { result } = renderHook(() => useFormattedParagraphs(description))

    // Ensure that paragraphs are formatted with proper spacing
    expect(result.current).toMatchInlineSnapshot(`
      "Line 1
      Line 2

      Line 3"
    `)
  })

  it("should handle empty description", () => {
    const { result } = renderHook(() => useFormattedParagraphs())

    // Ensure that it handles empty description and returns an empty string
    expect(result.current).toBe("")
  })

  it("should handle description with no line breaks", () => {
    const description = "Single line description"

    const { result } = renderHook(() => useFormattedParagraphs(description))

    // Ensure that it handles a description with no line breaks
    expect(result.current).toBe("Single line description")
  })
})
