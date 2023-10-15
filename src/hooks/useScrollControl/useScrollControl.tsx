import { Platform } from 'react-native'

const useScrollControl = Platform.select({
    web: () => require('./useScrollControl.web').default,
    default: () => require('./useScrollControl.native').default
})

export default useScrollControl