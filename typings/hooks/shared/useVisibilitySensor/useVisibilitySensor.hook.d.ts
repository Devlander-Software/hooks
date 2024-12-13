import type { View } from "react-native";
/**
 * A hook that monitors the visibility of a native React component within the viewport.
 * It tracks the dimensions of the target component and determines if it's visible
 * based on a given offset. If no offset is provided, full visibility is required.
 *
 * @param onChange - Callback that fires when the visibility status of the component changes.
 * @param config - Configuration options to determine when visibility is triggered.
 * @param stopWatching - Boolean to control whether visibility checks should continue.
 * @returns A ref that should be attached to the component being observed.
 *
 * @example
 * const viewRef = useVisibilitySensor(isVisible => console.log(isVisible), { visibilityOffset: VisibilityOffset.PARTIAL });
 * <View ref={viewRef} />
 */
export declare enum VisibilityOffset {
    FULL = 1,// Full visibility required
    PARTIAL = 0.5,// 50% of the component needs to be visible
    MINIMAL = 0.25
}
export interface UseVisibilitySensorOptions<T> {
    (onChange: (visible: boolean) => void, config?: UseVisibilityOptionsConfig, stopWatching?: boolean): React.RefObject<T>;
}
export type UseVisibilitySensorNative = UseVisibilitySensorOptions<View>;
export interface UseVisibilityOptionsConfig {
    visibilityOffset?: VisibilityOffset;
    checkInterval?: number;
}
export declare const useVisibilitySensor: UseVisibilitySensorNative;
