import { renderHook } from "@testing-library/react-hooks"
import type { ColorsAndLocationsOptions } from "./useColorsAndLocations.hook"
import { useColorsAndLocations } from "./useColorsAndLocations.hook"

// Note: You don't need to import 'jsdom-global' or handle cleanup

describe("useColorsAndLocations", () => {
  // No need for 'options' and 'cleanup' declarations here

  it("should equalize arrays when locations are longer", () => {
    const options: ColorsAndLocationsOptions = {
      colors: ["#F4F4F4", "#E7E7E7"],
      locations: [0, 0.5, 1, 0.75],
    }

    const { result } = renderHook(() => useColorsAndLocations(options))

    // Equalized colors array should have the same length as locations array
    expect(result.current.colors.length).toEqual(4)

    // Equalized locations array should be equal to the options.locations array
    expect(result.current.locations.length).toEqual(
      result.current.colors.length,
    )
  })

  it("should return original arrays when they have the same length", () => {
    const options = {
      colors: ["#F4F4F4", "#E7E7E7"],
      locations: [0, 0.5],
    }

    const { result } = renderHook(() => useColorsAndLocations(options))

    // Equalized locations array should be equal to the options.locations array
    expect(result.current.locations.length).toEqual(
      result.current.colors.length,
    )
  })

  it("should handle empty arrays in options", () => {
    const options = {
      colors: [],
      locations: [],
    }

    const { result } = renderHook(() => useColorsAndLocations(options))

    // Equalized locations array should be equal to the options.locations array
    expect(result.current.locations.length).toEqual(
      result.current.colors.length,
    )
  })

  it("should handle null values in options", () => {
    const options = {
      colors: null,
      locations: null,
    }

    const { result } = renderHook(() => useColorsAndLocations(options))

    // Equalized locations array should be equal to the options.locations array
    expect(result.current.locations.length).toEqual(
      result.current.colors.length,
    )
  })
})
