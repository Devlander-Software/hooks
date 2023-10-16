import useComponentSizeForNative from '../useComponentSize/useComponentSize.native'
import useComponentSizeForWeb from '../useComponentSize/useComponentSize.web'

export const useOnClickByStyle = useComponentSizeForNative || useComponentSizeForWeb

export default useOnClickByStyle