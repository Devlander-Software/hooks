import { Platform } from 'react-native';


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

export const useScreenDimensions = Platform.select({
    web: () => require('./useScreenDimensions.web').default,
    default: () => require('./useScreenDimensions.native').default
})

export default useScreenDimensions