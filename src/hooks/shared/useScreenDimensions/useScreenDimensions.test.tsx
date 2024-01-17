import { renderHook } from "@testing-library/react-hooks"
import {
  useScreenDimensions,
  UseScreenOptions,
} from "./useScreenDimensions.hook" // Import your hook

// Mock Dimensions module for React Native Web
jest.mock("react-native-web", () => ({
  Dimensions: {
    get: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  },
}))

describe("useScreenDimensions", () => {
  afterEach(() => {
    jest.restoreAllMocks() // Cleanup after each test
  })

  it("returns the screen dimensions with default options", () => {
    const screenDimensions = { width: 320, height: 480 }

    // Mock Dimensions.get to return the screen dimensions
    jest
      .spyOn(global as any, "Dimensions", "get")
      .mockReturnValue(screenDimensions)

    // Render the hook with default options
    const { result } = renderHook(() => useScreenDimensions())

    // Assert that the hook returns the correct screen dimensions
    expect(result.current).toEqual(screenDimensions)
  })

  it("returns the screen dimensions with 'window' scaleType", () => {
    const screenDimensions = { width: 480, height: 800 }
    const options: UseScreenOptions = { scaleType: "window" }

    // Mock Dimensions.get to return the screen dimensions
    jest
      .spyOn(global as any, "Dimensions", "get")
      .mockReturnValue(screenDimensions)

    // Render the hook with 'window' scaleType
    const { result } = renderHook(() => useScreenDimensions(options))

    // Assert that the hook returns the correct screen dimensions
    expect(result.current).toEqual(screenDimensions)
  })

  it("returns the screen dimensions with 'screen' scaleType", () => {
    const screenDimensions = { width: 1920, height: 1080 }
    const options: UseScreenOptions = { scaleType: "screen" }

    // Mock Dimensions.get to return the screen dimensions
    jest
      .spyOn(global as any, "Dimensions", "get")
      .mockReturnValue(screenDimensions)

    // Render the hook with 'screen' scaleType
    const { result } = renderHook(() => useScreenDimensions(options))

    // Assert that the hook returns the correct screen dimensions
    expect(result.current).toEqual(screenDimensions)
  })
})
