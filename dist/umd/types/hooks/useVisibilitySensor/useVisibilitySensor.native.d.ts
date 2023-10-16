/// <reference types="react" />
import { View } from 'react-native';
/**
 * A hook that monitors the visibility of a native React component within the viewport.
 * It tracks the dimensions of the target component and determines if it's entirely visible.
 *
 * @param onChange - Callback that fires when the visibility status of the component changes.
 * @returns A ref that should be attached to the component being observed.
 *
 * @example
 * const viewRef = useVisibilitySensorForNative(isVisible => console.log(isVisible));
 * <View ref={viewRef} />
 */
declare const useVisibilitySensorForNative: (onChange: (visible: boolean) => void) => import("react").RefObject<View>;
export default useVisibilitySensorForNative;
