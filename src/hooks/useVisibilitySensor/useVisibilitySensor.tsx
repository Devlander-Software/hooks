import { Platform } from 'react-native'
import useComponentSizeForNative from '../useComponentSize/useComponentSize.native'
import useComponentSizeForWeb from '../useComponentSize/useComponentSize.web'

export const useVisibilitySensor = () => {
    const hook = Platform.select({
        web: () => require('./useVisibilitySensor.web').default,
        default: () => require('./useVisibilitySensor.native').default
    }) as  typeof useComponentSizeForNative || typeof useComponentSizeForWeb

    return hook
}

export default useVisibilitySensor