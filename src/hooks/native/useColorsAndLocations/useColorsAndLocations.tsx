import { useMemo } from 'react';

export function useColorsAndLocations(colors: string[], locations: number[]): { colors: Array<string | number>; locations: Array<string | number> } {
  const resultColors = useMemo(() => {
    if (colors.length > locations.length) {
      const interval = 1 / (colors.length - 1);
      return Array.from({ length: colors.length }, (_, i) => i * interval);
    } else if (locations.length > colors.length) {
      return Array.from({ length: locations.length }, (_, i) => colors[i] || colors[0]);
    } else {
      return locations;
    }
  }, [colors, locations]);

  return { colors: resultColors, locations: resultColors };
}
