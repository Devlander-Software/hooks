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

declare const useScreenDimensions: () => any;

interface DimensionData {
    rectTop: number;
    rectBottom: number;
    rectWidth: number;
}

export { type DimensionData, type LayoutType, type ScreenSize, useComponentSize, useScreenDimensions };
