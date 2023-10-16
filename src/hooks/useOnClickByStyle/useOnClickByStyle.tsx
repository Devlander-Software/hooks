import { Platform } from 'react-native'

export const useOnClickByStyle = Platform.select({
    web: () => require('./useOnClickByStyle.web').default,
    default: () => require('./useOnClickByStyle.native').default
})

export default useOnClickByStyle