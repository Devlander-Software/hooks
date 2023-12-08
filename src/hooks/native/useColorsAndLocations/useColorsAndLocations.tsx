import { useMemo } from 'react';

export function useColorsAndLocations(
  colors: string[],
  locations: number[]
): { colors: string[]; locations: number[] } {
  return useMemo(() => {
    const equalizedColors: string[] = [...colors]; // Create a copy of the colors array
    const equalizedLocations: number[] = [...locations]; // Create a copy of the locations array

    // If the length of colors is greater than the length of locations
    if (colors.length > locations.length) {
      const additionalLocations: number[] = Array.from(
        { length: colors.length - locations.length },
        () => 0 // You can set the default value for additional locations here
      );
      equalizedLocations.push(...additionalLocations);
    }
    // If the length of locations is greater than the length of colors
    else if (locations.length > colors.length) {
      const additionalColors: string[] = Array.from(
        { length: locations.length - colors.length },
        () => '#FFFFFF' // You can set the default color for additional colors here
      );
      equalizedColors.push(...additionalColors);
    }

    return { colors: equalizedColors, locations: equalizedLocations };
  }, [colors, locations]);
}

