import { renderHook } from '@testing-library/react-hooks';
import { useColorsAndLocations } from './useColorsAndLocations';

describe('useColorsAndLocations', () => {
  it('should equalize arrays when colors are longer', () => {
    const colors = ['#F4F4F4', '#E7E7E7', '#D1D1D1'];
    const locations = [0, 0.5];

    const { result } = renderHook(() =>
      useColorsAndLocations(colors, locations)
    );

    expect(result.current.colors).toEqual(colors);
    expect(result.current.locations).toEqual([0, 0.5, 0]);
  });

  it('should equalize arrays when locations are longer', () => {
    const colors = ['#F4F4F4', '#E7E7E7'];
    const locations = [0, 0.5, 1, 0.75];

    const { result } = renderHook(() =>
      useColorsAndLocations(colors, locations)
    );

    expect(result.current.colors).toEqual(['#F4F4F4', '#E7E7E7', '#FFFFFF']);
    expect(result.current.locations).toEqual(locations);
  });

  it('should return original arrays when they have the same length', () => {
    const colors = ['#F4F4F4', '#E7E7E7'];
    const locations = [0, 0.5];

    const { result } = renderHook(() =>
      useColorsAndLocations(colors, locations)
    );

    expect(result.current.colors).toEqual(colors);
    expect(result.current.locations).toEqual(locations);
  });

  it('should handle empty arrays', () => {
    const colors: string[] = [];
    const locations: number[] = [];

    const { result } = renderHook(() =>
      useColorsAndLocations(colors, locations)
    );

    expect(result.current.colors).toEqual([]);
    expect(result.current.locations).toEqual([]);
  });
});
