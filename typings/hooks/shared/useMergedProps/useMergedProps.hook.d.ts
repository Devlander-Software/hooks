type NestedObject = {
    [key: string]: any;
};
type MergeParam = NestedObject[] | NestedObject;
/**
 * A custom hook to deeply merge two or more objects into one.
 *
 * @param {NestedObject} defaultObject - The base object providing default values.
 * @param {NestedObject} customObject - The object(s) with values that will override defaults.
 * @returns {NestedObject} - The merged result.
 *
 * @example
 * const defaultConfig = {
 *   settings: {
 *     theme: 'light',
 *     layout: {
 *       width: '100%',
 *       height: '100%',
 *     },
 *   },
 *   user: {
 *     name: 'Guest',
 *     preferences: {
 *       notifications: true,
 *     },
 *   },
 * };
 *
 * const customConfig = {
 *   settings: {
 *     theme: 'dark', // Override default theme
 *     layout: {
 *       height: '90%', // Override default height
 *     },
 *   },
 *   user: {
 *     preferences: {
 *       notifications: false, // Override default notifications
 *     },
 *   },
 * };
 *
 * const mergedConfig = useMergedProps(defaultConfig, customConfig);
 * // mergedConfig will be:
 * // {
 * //   settings: {
 * //     theme: 'dark', // customConfig override
 * //     layout: {
 * //       width: '100%', // defaultConfig
 * //       height: '90%', // customConfig override
 * //     },
 * //   },
 * //   user: {
 * //     name: 'Guest', // defaultConfig
 * //     preferences: {
 * //       notifications: false, // customConfig override
 * //     },
 * //   },
 * // }
 *
 * @importance
 * This hook simplifies the process of managing deeply nested objects, ensuring consistent merging of configurations,
 * styles, or any other nested data structures. It reduces boilerplate and promotes maintainable code.
 */
declare function useMergedProps(defaultObject: MergeParam, customObject: MergeParam): NestedObject;
export { useMergedProps };
