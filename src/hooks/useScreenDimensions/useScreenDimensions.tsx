import { Platform } from 'react-native';

export const useScreenDimensions = Platform.select({
    web: () => require('./useScreenDimensions.web').default,
    default: () => require('./useScreenDimensions.native').default
})

export default useScreenDimensions