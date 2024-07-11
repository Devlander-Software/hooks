/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react"
import { merge } from "@devlander/utils"
import type {
  MergeableInput,
  MergeableValue,
} from "@devlander/utils/typings/types/value.types"

/**
 * Custom hook that merges multiple objects into one.
 *
 * This hook takes multiple objects as input and returns a single object that is the result of merging all the input objects. It uses the `merge` function from `@devlander/utils` to perform the merge operation.
 *
 * @param objs - An array of objects to be merged. The objects can be of any type that is compatible with the `MergeableInput` type.
 * @returns A single merged object containing properties from all input objects. If no valid objects are provided, an empty object is returned.
 *
 * @example
 * ```typescript
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { b: 3, c: 4 };
 * const merged = useMergedObjects(obj1, obj2);
 * // merged will be { a: 1, b: 3, c: 4 }
 * ```
 */
export const useMergedObjects = (
  ...objs: MergeableInput[]
): Record<string, MergeableValue> => {
  // Memoize the stringified version of objs for the dependency array
  const objsStringified = useMemo(() => JSON.stringify(objs), [objs])

  // Use useMemo to memoize the merged object
  const mergedObject = useMemo(() => {
    // Parse the stringified objects back into an array of objects
    const parsedObjs = JSON.parse(objsStringified) as MergeableInput[]

    // If parsedObjs is undefined, null, or an empty array, return an empty object
    if (!parsedObjs || parsedObjs.length === 0) {
      return {}
    }

    // Filter out undefined or null objects before merging
    const validObjs = parsedObjs.filter(
      (obj) => obj !== null && obj !== undefined,
    )

    // Use the merge function from @devlander/utils to merge objects
    return merge({}, ...validObjs)
  }, [objsStringified])

  return mergedObject
}
