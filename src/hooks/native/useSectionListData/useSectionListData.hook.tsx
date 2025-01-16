import { useMemo, useEffect } from "react"

export interface DefaultSectionItem {
  id: string | number
  title: string
  Icon: () => JSX.Element
  onPress: () => void
}

/**
 * Generic Section Item
 */
export interface SectionItem<DataType = DefaultSectionItem> {
  title: string
  data: DataType[]
}

/**
 * Configuration for the SectionList
 */
export interface SectionListConfig<ItemT> {
  title: string
  items: ItemT[]
}

/**
 * Hook return type
 */
interface UseSectionListDataReturn<DataType> {
  sections: SectionItem<DataType>[]
}

/**
 * Generic hook for creating SectionList data
 */
export const useSectionListData = <ItemType extends { id: string }>({
  configs,
  options,
}: {
  configs: SectionListConfig<ItemType>[]
  options?: {
    transformItem?: (item: ItemType) => unknown
    transformHeader?: (title: string) => string
    emptyStateFallback?: SectionItem<ItemType>[]
    debug?: boolean
  }
}): UseSectionListDataReturn<ItemType> => {
  const { transformItem, transformHeader, emptyStateFallback, debug } =
    options || {}

  const memoizedConfigs = useMemo(() => [...configs], [configs])

  useEffect(() => {
    if (debug) {
      memoizedConfigs.forEach((config, index) => {
        if (!config.title || !Array.isArray(config.items)) {
          console.error(
            `Invalid config at index ${index}: Expected a title and items array.`,
          )
        } else {
          config.items.forEach((item, itemIndex) => {
            if (!item.id) {
              console.error(
                `Invalid item at index ${itemIndex} in section "${config.title}": Expected an id.`,
              )
            }
          })
        }
      })
    }
  }, [memoizedConfigs, debug])

  const sections = useMemo(() => {
    if (!memoizedConfigs.length && emptyStateFallback) {
      return emptyStateFallback as SectionItem<ItemType>[]
    }

    return memoizedConfigs.map((config) => ({
      title: transformHeader ? transformHeader(config.title) : config.title,
      data: config.items.map((item) =>
        transformItem
          ? (transformItem(item as ItemType) as ItemType)
          : (item as ItemType),
      ),
    }))
  }, [memoizedConfigs, transformItem, transformHeader, emptyStateFallback])

  return { sections }
}


