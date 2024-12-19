import type { SectionListData, SectionListProps } from "react-native";
/**
 * Base section props extending React Native SectionListProps
 */
export interface SectionBase<ItemT> extends SectionListProps<ItemT> {
    /**
     * Rendered in between each section.
     */
    getItemLayout?: ((data: SectionListData<ItemT>[] | null, index: number) => {
        length: number;
        offset: number;
        index: number;
    }) | undefined;
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
        icon: () => JSX.Element;
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
export declare const useSectionListData: <ItemType extends {
    id: string;
    title: string;
    onPress: () => void;
}>(configs: SectionListConfig[], options?: {
    transformItem?: (item: ItemType) => unknown;
    transformHeader?: (title: string) => string;
    emptyStateFallback?: SectionItem<ItemType>[];
    debug?: boolean;
}) => UseSectionListDataReturn<ItemType>;
export {};
