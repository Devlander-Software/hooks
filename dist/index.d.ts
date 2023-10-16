/// <reference types="react" />
import * as react_native from 'react-native';
import { View } from 'react-native';

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
declare const useComponentSize: () => [react_native.LayoutRectangle, (event: react_native.LayoutChangeEvent) => void];

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

declare const useScrollControl: () => react_native.ScaledSize;

interface UseVisibilitySensorOptions<T> {
    (onChange: (visible: boolean) => void): React.RefObject<T>;
}
type UseVisibilitySensorNative = UseVisibilitySensorOptions<View>;
type UseVisibilitySensorWeb = UseVisibilitySensorOptions<any>;
type UseVisibilitySensorDefinition = UseVisibilitySensorNative | UseVisibilitySensorWeb;
declare const useVisibilitySensor: UseVisibilitySensorDefinition;

interface DimensionData {
    rectTop: number;
    rectBottom: number;
    rectWidth: number;
}

export { type DimensionData, type LayoutType, type ScreenSize, type UseOnClickByStyleOptions, type UseVisibilitySensorNative, type UseVisibilitySensorOptions, type UseVisibilitySensorWeb, useComponentSize, useScrollControl, useVisibilitySensor };
