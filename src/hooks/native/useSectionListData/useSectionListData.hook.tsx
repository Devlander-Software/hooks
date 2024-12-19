import { useMemo, useEffect } from "react";
import type { SectionListData, SectionListProps } from "react-native";
import React from "react";

/**
 * Base section props extending React Native SectionListProps
 */
export interface SectionBase<ItemT>
  extends SectionListProps<ItemT> {
  /**
   * Rendered in between each section.
   */
  getItemLayout?:
    | ( (
        data: SectionListData<ItemT>[] | null,
        index: number,
      ) => { length: number; offset: number; index: number })
    | undefined;
}

/**
 * Section item with generic DataType
 */
export interface SectionItem<DataType> {
  title: string;
  data: DataType[];
}

/**
 * Configuration for SectionList
 */
export interface SectionListConfig {
  title: string;
  items: {
    id: string;
    title: string;
    icon: () => JSX.Element; // Function returning a React Element for rendering icons
    onPress: () => void;
  }[];
}

/**
 * Return type for useSectionListData hook
 */
interface UseSectionListDataReturn<DataType> {
  sections: SectionItem<DataType>[];
}

/**
 * Hook to generate section list data for React Native SectionList.
 *
 * @template ItemType - The type of each item in the section.
 * @param {SectionListConfig[]} configs - Configuration for the sections.
 * @param {Object} [options] - Optional transformation and fallback settings.
 * @param {(item: ItemType) => unknown} [options.transformItem] - Function to transform each item.
 * @param {(title: string) => string} [options.transformHeader] - Function to transform section headers.
 * @param {SectionItem<unknown>[]} [options.emptyStateFallback] - Fallback sections for empty configs.
 * @param {boolean} [options.debug] - Flag to enable or disable debugging.
 * @returns {UseSectionListDataReturn<ItemType>} The transformed section list data.
 */
export const useSectionListData = <
  ItemType extends { id: string; title: string; onPress: () => void }
>(
  configs: SectionListConfig[],
  options?: {
    transformItem?: (item: ItemType) => unknown;
    transformHeader?: (title: string) => string;
    emptyStateFallback?: SectionItem<ItemType>[];
    debug?: boolean; // Debugging flag
  },
): UseSectionListDataReturn<ItemType> => {
  const { transformItem, transformHeader, emptyStateFallback, debug } = options || {};

  // Ensure configs is stable for memoization
  const memoizedConfigs = useMemo(() => [...configs], [configs]);

  // Development-time validation for configs
  useEffect(() => {
    if (debug) {
      memoizedConfigs.forEach((config, index) => {
        if (!config.title || !Array.isArray(config.items)) {
          console.error(
            `Invalid config at index ${index}: Expected a title and items array.`,
          );
        } else {
          config.items.forEach((item, itemIndex) => {
            if (!item.id || !item.title || typeof item.onPress !== "function") {
              console.error(
                `Invalid item at index ${itemIndex} in section "${config.title}": 
                 Expected an id, title, and onPress function.`,
              );
            }
          });
        }
      });
    }
  }, [memoizedConfigs, debug]);

  // Transform configs into sections
  const sections = useMemo(() => {
    if (!memoizedConfigs.length && emptyStateFallback) {
      return emptyStateFallback as SectionItem<ItemType>[];
    }

    return memoizedConfigs.map((config) => ({
      title: transformHeader ? transformHeader(config.title) : config.title,
      data: config.items.map((item) =>
        transformItem ? (transformItem(item as unknown as ItemType) as ItemType) : (item as unknown as ItemType),
      ),
    }));
  }, [memoizedConfigs, transformItem, transformHeader, emptyStateFallback]);

  return { sections };
};
