export interface ColorsAndLocationsOptions {
    colors?: string[] | null;
    locations?: number[] | null;
}
export declare function useColorsAndLocations(options?: ColorsAndLocationsOptions): {
    colors: string[];
    locations: number[];
};
