import { renderHook } from "@testing-library/react-hooks"
import { useScreenDimensions } from "./useScreenDimensions.hook"; // Import your hook

// Mock Dimensions module for React Native Web
jest.mock("react-native-web", () => ({
  Dimensions: {
    get: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  },
}))

describe("useScreenDimensions", () => {
  it("returns the screen dimensions", () => {
    const screenDimensions = { width: 320, height: 480 }

    // Mock Dimensions.get to return the screen dimensions
    jest
      .spyOn(global as any, "Dimensions", "get")
      .mockReturnValue(screenDimensions)

    // Render the hook
    const { result } = renderHook(() => useScreenDimensions())

    // Assert that the hook returns the correct screen dimensions
    expect(result.current).toEqual(screenDimensions)

    // Cleanup
    jest.restoreAllMocks()
  })
})
