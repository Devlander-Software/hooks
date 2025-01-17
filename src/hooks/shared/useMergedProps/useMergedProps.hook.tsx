import { useCallback, useMemo } from "react"

// Define types for general objects
type NestedObject = {
  [key: string]: any
}

type MergeParam = NestedObject[] | NestedObject

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
function useMergedProps(
  defaultObject: MergeParam,
  customObject: MergeParam,
): NestedObject {
  // Helper function to deeply merge two objects
  const deepMerge = useCallback(
    (
      target: NestedObject,
      source: NestedObject,
    ): NestedObject => {
      for (const key in source) {
        if (
          source[key] &&
          typeof source[key] === "object" &&
          !Array.isArray(source[key])
        ) {
          if (!target[key] || typeof target[key] !== "object") {
            target[key] = {}
          }
          deepMerge(target[key], source[key])
        } else {
          target[key] = source[key]
        }
      }
      return target
    },
    [],
  )

  // Memoize the merged object to avoid unnecessary recalculations on re-renders
  const mergedObject = useMemo(
    () => deepMerge({ ...defaultObject }, customObject),
    [deepMerge, defaultObject, customObject],
  )

  return mergedObject;
}

export { useMergedProps };
