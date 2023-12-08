import { renderHook } from '@testing-library/react-hooks';
import { useColorsAndLocations } from './useColorsAndLocations';

describe('useColorsAndLocations', () => {
  it('should return the same colors and locations when their lengths match', () => {
    const colors = ['#F4F4F4', '#E7E7E7'];
    const locations = [0, 0.5, 1];

    const { result } = renderHook(() => useColorsAndLocations(colors, locations));

    expect(result.current.colors).toEqual(colors);
    expect(result.current.locations).toEqual(locations);
  });

  it('should generate locations when colors length is greater', () => {
    const colors = ['#F4F4F4', '#E7E7E7', '#D1D1D1'];
    const locations = [0, 0.5];

    const { result } = renderHook(() => useColorsAndLocations(colors, locations));

    expect(result.current.colors).toEqual(colors);
    expect(result.current.locations).toEqual([0, 0.5, 1]);
  });

  it('should generate colors when locations length is greater', () => {
    const colors = ['#F4F4F4', '#E7E7E7'];
    const locations = [0, 0.5, 1, 0.75];

    const { result } = renderHook(() => useColorsAndLocations(colors, locations));

    expect(result.current.colors).toEqual(['#F4F4F4', '#E7E7E7', '#F4F4F4']);
    expect(result.current.locations).toEqual(locations);
  });

  it('should handle empty colors and locations arrays', () => {
    const colors: string[] = [];
    const locations: number[] = [];

    const { result } = renderHook(() => useColorsAndLocations(colors, locations));

    expect(result.current.colors).toEqual([]);
    expect(result.current.locations).toEqual([]);
  });
});
