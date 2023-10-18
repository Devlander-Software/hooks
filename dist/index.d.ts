/// <reference types="react" />
import * as react from 'react';
import { ScaledSize, LayoutRectangle, LayoutChangeEvent, View } from 'react-native';

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

declare const useElementSize: () => (LayoutType | react.MutableRefObject<HTMLElement | null>)[];

declare function useKeyCodes(): {
    left: number;
    up: number;
    right: number;
    down: number;
    spacebar: number;
    pageup: number;
    pagedown: number;
    end: number;
    home: number;
};

interface UseOnClickNativeOptions extends UseOnClickByStyleOptions {
    styleName: string;
    onPress: () => void;
}
/**
 * `useOnClickByStyleNative` hook is designed to handle press actions on specific elements within a pressable area in React Native.
 * It ensures the action is only triggered when the user interacts with an element associated with a specific stylesheet name.
 *
 * @param {UseOnClickNativeOptions} options - The options for the hook.
 * @param {string} options.styleName - The stylesheet name to look for. Defaults to 'onClickStyle'.
 * @param {() => void} options.onPress - The callback function to execute when the desired style is pressed.
 *
 * @returns {Function} A handler function to be used in a pressable component.
 */
declare function useOnPressByStyle({ styleName, onPress }: UseOnClickNativeOptions): (event: any) => void;

declare function usePreventDefault(): {
    preventDefault: (e: any) => void;
    preventDefaultForScrollKeys: (e: any) => false | undefined;
};

/**
 * `useScreenDimensions` hook provides the dimensions of the screen for React Native development.
 * It's instrumental in monitoring the current screen size, aiding in real-time screen manipulations.
 *
 * In many scenarios, it's pivotal to have an understanding of the screen's dimensions for layout,
 * design responsiveness, and dynamically rendering or positioning components based on the available space.
 *
 * @example
 * ```typescript
 * const { width, height } = useScreenDimensions();
 * ```
 *
 * @returns {Object} An object containing the `width` and `height` of the screen.
 */
declare const useScreenDimensions: () => ScaledSize;

declare function useScrollControl(): {
    disableScroll: () => void;
    enableScroll: () => void;
};

declare const useViewSize: () => [LayoutRectangle, (event: LayoutChangeEvent) => void];

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
declare const useVisibilitySensor: UseVisibilitySensorNative;

interface DimensionData {
    rectTop: number;
    rectBottom: number;
    rectWidth: number;
}

export { type DimensionData, type LayoutType, type ScreenSize, type UseOnClickByStyleOptions, type UseVisibilitySensorNative, type UseVisibilitySensorOptions, type UseVisibilitySensorWeb, useElementSize, useKeyCodes, useOnClickByClassName, useOnPressByStyle, usePreventDefault, useScreenDimensions, useScrollControl, useViewSize, useVisibilitySensor };
