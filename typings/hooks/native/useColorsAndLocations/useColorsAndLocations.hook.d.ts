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
export declare function useColorsAndLocations(options: ColorsAndLocationsOptions): {
    colors: string[];
    locations: number[];
};
