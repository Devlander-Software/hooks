import * as react_native from 'react-native';

/**
 * Platform-specific hook to get the component's size and position.
 *
 * For web, it uses the `useComponentSize.web` implementation, and
 * for native platforms, it uses the `useComponentSize.native` implementation.
 *
 * @example
 *
 * // On web:
 * import React from 'react';
 * import {useComponentSize} from '@devlander/hooks';
 *
 * const MyComponent: React.FC = () => {
 *   const [ size, ref ] = useComponentSize();
 *
 *   useEffect(() => {
 *     console.log(size); // Logs the component's size and position
 *   }, [size]);
 *
 *   return <div ref={ref}>Your content here</div>;
 * };
 *
 *
 * @example
 *
 * // On native:
 * import React from 'react';
 * import {useComponentSize} from '@devlander/hooks';
 *
 * const MyComponent: React.FC = () => {
 *   const [ size, setSize ] = useComponentSize();
 *
 *   useEffect(() => {
 *     console.log(size); // Logs the component's size and position
 *   }, [size]);
 *
 *   return <View onLayout={ref}>Your content here</View>;
 * };
 */
declare const useComponentSize: () => any;

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

interface UseOnClickByStyleOptions {
    className?: string;
    styleName?: string;
    onClick?: () => void;
    onPress?: () => void;
}

declare const useOnClickByStyle: () => any;

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
declare const useScreenDimensions: () => any;

declare const useScrollControl: () => any;

declare const useVisibilitySensor: () => () => [react_native.LayoutRectangle, (event: react_native.LayoutChangeEvent) => void];

interface DimensionData {
    rectTop: number;
    rectBottom: number;
    rectWidth: number;
}

export { type DimensionData, type LayoutType, type ScreenSize, type UseOnClickByStyleOptions, useComponentSize, useOnClickByStyle, useScreenDimensions, useScrollControl, useVisibilitySensor };
