import { useMemo } from "react";

export interface ColorsAndLocationsOptions {
  colors: string[] | null | undefined;
  locations: number[] | null | undefined;
}

/**
 * Ensures that the `colors` and `locations` arrays have the same length. If one
 * array is shorter, it is padded with default values to match the length of the
 * longer array. The `locations` array is ensured to end with a `1` if it's
 * shorter.
 *
 * @param options - An object containing `colors` and `locations` arrays.
 * @returns An object with `colors` and `locations` arrays of equal length.
 */
export function useColorsAndLocations(options: ColorsAndLocationsOptions): {
  colors: string[];
  locations: number[];
} {
  return useMemo(() => {
    const colors = options.colors || [];
    let locations = options.locations || [];
    const maxLength = Math.max(colors.length, locations.length);

    if (locations.length < colors.length) {
      // Ensure that `locations` ends with a `1`
      locations = [...locations, 1];
    }

    const equalizedColors = Array.from({ length: maxLength }, (_, index) =>
      colors[index] || "#FFFFFF"
    );

    const equalizedLocations = Array.from({ length: maxLength }, (_, index) =>
      locations[index] || 0
    );

    return { colors: equalizedColors, locations: equalizedLocations };
  }, [options.colors, options.locations]);
}
