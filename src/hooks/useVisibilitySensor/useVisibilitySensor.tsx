import { Platform } from 'react-native'

const useVisibilitySensor = Platform.select({
    web: () => require('./useVisibilitySensor.web').default,
    default: () => require('./useVisibilitySensor.native').default
})

export default useVisibilitySensor