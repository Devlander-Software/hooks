import { renderHook } from "@testing-library/react-hooks"
import { useScreenDimensions } from "./useScreenDimensions" // Import your hook

// Mock Dimensions module
const mockDimensions = {
  get: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}

jest.mock("react-native", () => ({
  Dimensions: mockDimensions,
  // Add any other mock implementations you need here
}))

describe("useScreenDimensions", () => {
  it("returns the screen dimensions", () => {
    const screenDimensions = { width: 320, height: 480 }

    // Mock Dimensions.get to return the screen dimensions
    mockDimensions.get.mockReturnValue(screenDimensions)

    // Render the hook
    const { result } = renderHook(() => useScreenDimensions())

    // Assert that the hook returns the correct screen dimensions
    expect(result.current).toEqual(screenDimensions)

    // Cleanup
    expect(mockDimensions.removeEventListener).toHaveBeenCalled()
  })
})
