import { renderHook } from '@testing-library/react-hooks';
import { ColorsAndLocationsOptions, useColorsAndLocations } from './useColorsAndLocations';

describe('useColorsAndLocations', () => {
  it('should equalize arrays when colors are longer', () => {
    const options: ColorsAndLocationsOptions = {
      colors: ['#F4F4F4', '#E7E7E7', '#D1D1D1'],
      locations: [0, 0.5],
    };

    const { result } = renderHook(() => useColorsAndLocations(options));

    expect(result.current.colors).toEqual(options.colors);
    expect(result.current.locations).toEqual([0, 0.5, 0]);
  });

  it('should equalize arrays when locations are longer', () => {
    const options: ColorsAndLocationsOptions = {
      colors: ['#F4F4F4', '#E7E7E7'],
      locations: [0, 0.5, 1, 0.75],
    };

    const { result } = renderHook(() => useColorsAndLocations(options));

    expect(result.current.colors).toEqual(['#F4F4F4', '#E7E7E7', '#FFFFFF']);
    expect(result.current.locations).toEqual(options.locations);
  });

  it('should return original arrays when they have the same length', () => {
    const options: ColorsAndLocationsOptions = {
      colors: ['#F4F4F4', '#E7E7E7'],
      locations: [0, 0.5],
    };

    const { result } = renderHook(() => useColorsAndLocations(options));

    expect(result.current.colors).toEqual(options.colors);
    expect(result.current.locations).toEqual(options.locations);
  });

  it('should handle empty arrays in options', () => {
    const options: ColorsAndLocationsOptions = {};

    const { result } = renderHook(() => useColorsAndLocations(options));

    expect(result.current.colors).toEqual([]);
    expect(result.current.locations).toEqual([]);
  });

  it('should handle null values in options', () => {
    const options: ColorsAndLocationsOptions = {
      colors: null,
      locations: null,
    };

    const { result } = renderHook(() => useColorsAndLocations(options));

    expect(result.current.colors).toEqual([]);
    expect(result.current.locations).toEqual([]);
  });
});
