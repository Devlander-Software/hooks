export interface DefaultSectionItem {
    id: string | number;
    title: string;
    Icon: () => JSX.Element;
    onPress: () => void;
}
/**
 * Generic Section Item
 */
export interface SectionItem<DataType = DefaultSectionItem> {
    title: string;
    data: DataType[];
}
/**
 * Configuration for the SectionList
 */
export interface SectionListConfig<ItemT> {
    title: string;
    items: ItemT[];
}
/**
 * Hook return type
 */
interface UseSectionListDataReturn<DataType> {
    sections: SectionItem<DataType>[];
}
/**
 * Generic hook for creating SectionList data
 */
export declare const useSectionListData: <ItemType extends {
    id: string;
}>({ configs, options, }: {
    configs: SectionListConfig<ItemType>[];
    options?: {
        transformItem?: (item: ItemType) => unknown;
        transformHeader?: (title: string) => string;
        emptyStateFallback?: SectionItem<ItemType>[];
        debug?: boolean;
    };
}) => UseSectionListDataReturn<ItemType>;
export {};
