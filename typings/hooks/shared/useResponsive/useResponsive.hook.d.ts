export declare const defaultBreakpoints: {
    xs: {
        portrait: number;
        landscape: number;
    };
    sm: {
        portrait: number;
        landscape: number;
    };
    md: {
        portrait: number;
        landscape: number;
    };
    lg: {
        portrait: number;
        landscape: number;
    };
    xl: {
        portrait: number;
        landscape: number;
    };
};
/**
 * Custom hook to handle responsive design based on breakpoints.
 *
 * @param {object} customBreakpoints - Custom breakpoints to override the default breakpoints.
 * @returns {object} - An object containing the current orientation, size category, and a function to get responsive values.
 *
 * @typedef {object} Breakpoints
 * @property {number} xs - Extra small breakpoint.
 * @property {number} sm - Small breakpoint.
 * @property {number} md - Medium breakpoint.
 * @property {number} lg - Large breakpoint.
 * @property {number} xl - Extra large breakpoint.
 *
 * @typedef {object} State
 * @property {string} orientation - The current orientation (portrait or landscape).
 * @property {string} sizeCategory - The current size category (xs, sm, md, lg, xl).
 * @property {number} width - The current width of the window.
 *
 * @function getResponsiveValue
 * @param {object} range - The range of values to interpolate between.
 * @param {number} range.min - The minimum value of the range.
 * @param {number} range.max - The maximum value of the range.
 * @param {string} category - The category of the breakpoint (xs, sm, md, lg, xl).
 * @returns {number} - The interpolated value based on the current width and breakpoints.
 *
 * @function getNextCategory
 * @param {string} category - The current category of the breakpoint.
 * @returns {string} - The next category of the breakpoint.
 *
 * @function interpolate
 * @param {number} value - The current value to interpolate.
 * @param {number} minValue - The minimum value of the range.
 * @param {number} maxValue - The maximum value of the range.
 * @param {number} minRange - The minimum range value.
 * @param {number} maxRange - The maximum range value.
 * @returns {number} - The interpolated value.
 *
 * @function useEffect
 * @description - Effect hook to handle window resize events and update the state accordingly.
 *
 * @returns {object} - An object containing the current orientation, size category, and a function to get responsive values.
 */
export declare const useResponsive: (customBreakpoints?: {
    xs: {
        portrait: number;
        landscape: number;
    };
    sm: {
        portrait: number;
        landscape: number;
    };
    md: {
        portrait: number;
        landscape: number;
    };
    lg: {
        portrait: number;
        landscape: number;
    };
    xl: {
        portrait: number;
        landscape: number;
    };
}) => {
    orientation: any;
    sizeCategory: any;
    getResponsiveValue: (range: {
        min: number;
        max: number;
    }, category: keyof typeof defaultBreakpoints) => number;
};
