/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { merge } from "@devlander/utils";
import type {
  MergeableInput,
  MergeableValue,
} from "@devlander/utils/typings/types/value.types";

export const useMergedObjects = (
  ...objs: MergeableInput[]
): Record<string, MergeableValue> => {
  // Use useMemo to memoize the merged object
  const mergedObject = useMemo(() => {
    // If objs is undefined, null, or an empty array, return an empty object
    if (!objs || objs.length === 0) {
      return {};
    }

    // Filter out undefined or null objects before merging
    const validObjs = objs.filter((obj) => obj != null);
    // Use the merge function from @devlander/utils to merge objects
    return merge({}, ...validObjs);
  }, [JSON.stringify(objs)]);

  return mergedObject;
};
