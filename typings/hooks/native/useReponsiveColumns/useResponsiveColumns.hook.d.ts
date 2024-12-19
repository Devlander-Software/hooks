type ResponsiveColumnsConfig = {
    portrait: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
    };
    landscape: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
    };
    minColumns?: number;
    maxColumns?: number;
};
type Breakpoints = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    [key: string]: number;
};
/**
 * Custom hook for determining the column count of a FlatList based on screen orientation and device size,
 * using useReducer for state management.
 *
 * @param {ResponsiveColumnsConfig} config - Specifies the column counts for each orientation and device size.
 * @param {Breakpoints} breakpoints - Custom size breakpoints for screen categories (xs, sm, md, lg).
 * @returns {object} - An object containing the current column count and a loading state.
 */
export declare function useResponsiveColumns(config: ResponsiveColumnsConfig, breakpoints?: Breakpoints): {
    tileCount: number;
    loadingTileCount: boolean;
};
export {};
