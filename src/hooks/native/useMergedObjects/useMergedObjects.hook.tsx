/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { merge } from "lodash";
import { MergeableInput, MergeableValue } from "@devlander/utils/typings/types/value.types";


const useMergedObjects = (...objs: MergeableInput[]): Record<string, MergeableValue> => {
  // Use useMemo to memoize the merged object
  const mergedObject = useMemo(() => {
    // If objs is undefined or null, return an empty object
    if (!objs || objs.length === 0) {
      return {};
    }

    // Filter out undefined or null objects before merging
    const validObjs = objs.filter(obj => obj != null);
    // Use lodash merge function to merge objects
    return merge({}, ...validObjs);
  }, [objs]);

  return mergedObject;
}

export default useMergedObjects;
