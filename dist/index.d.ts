/// <reference types="react" />
import { View } from 'react-native';

interface UseOnClickByStyleOptions {
    className?: string;
    styleName?: string;
    onClick?: () => void;
    onPress?: () => void;
}

interface UseOnClickByStyleOptionsForWeb extends UseOnClickByStyleOptions {
    className?: string;
    onClick?: () => void;
}
/**
 * `useOnClickByStyleForWeb` hook is designed to handle click actions on specific elements within a clickable area on the web.
 * It ensures the action is only triggered when the user interacts with an element containing a designated className.
 *
 * @param {UseOnClickByStyleOptionsForWeb} options - The options for the hook.
 * @param {string} options.className - The className to look for. Defaults to 'onclick-class'.
 * @param {() => void} options.onClick - The callback function to execute when the desired class is clicked.
 *
 * @returns {Function} A handler function to be used in a clickable component.
 */
declare function useOnClickByClassName({ className, onClick }: UseOnClickByStyleOptionsForWeb): (event: any) => void;

interface ScreenSize {
    width: number;
    height: number;
}
interface LayoutType extends ScreenSize {
    x: number;
    y: number;
    height: number;
    width: number;
}

/**
 * A hook that monitors the visibility of a native React component within the viewport.
 * It tracks the dimensions of the target component and determines if it's entirely visible.
 *
 * @param onChange - Callback that fires when the visibility status of the component changes.
 * @returns A ref that should be attached to the component being observed.
 *
 * @example
 * const viewRef = useVisibilitySensor(isVisible => console.log(isVisible));
 * <View ref={viewRef} />
 */
interface UseVisibilitySensorOptions<T> {
    (onChange: (visible: boolean) => void): React.RefObject<T>;
}
type UseVisibilitySensorNative = UseVisibilitySensorOptions<View>;
type UseVisibilitySensorWeb = UseVisibilitySensorOptions<any>;

interface DimensionData {
    rectTop: number;
    rectBottom: number;
    rectWidth: number;
}

export { type DimensionData, type LayoutType, type ScreenSize, type UseOnClickByStyleOptions, type UseVisibilitySensorNative, type UseVisibilitySensorOptions, type UseVisibilitySensorWeb, useOnClickByClassName as useClickByClassName, useOnClickByClassName };
