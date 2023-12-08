import { useMemo } from "react";

export interface ColorsAndLocationsOptions {
  colors?: string[] | null;
  locations?: number[] | null;
}

export function useColorsAndLocations(options: ColorsAndLocationsOptions = {
  colors: [],
  locations: [],
}): { colors: string[]; locations: number[] } {

  return useMemo(() => {
    const colors = options.colors || [];
    const locations = options.locations || [];

    const equalizedColors: string[] =
      colors.length > locations.length
        ? [
            ...colors,
            ...Array.from({ length: colors.length - locations.length }, () => "#FFFFFF"),
          ]
        : colors;

    const equalizedLocations: number[] =
      locations.length > colors.length
        ? [
            ...locations,
            ...Array.from({ length: locations.length - colors.length }, () => 0),
          ]
        : locations;

    return { colors: equalizedColors, locations: equalizedLocations };
  }, [options.colors, options.locations]);
}
