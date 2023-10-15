import { Platform } from 'react-native'

export const useVisibilitySensor = Platform.select({
    web: () => require('./useVisibilitySensor.web').default,
    default: () => require('./useVisibilitySensor.native').default
})

export default useVisibilitySensor