import useScreenDimensionsForNative from '../useScreenDimensions/useScreenDimensions.native'
import useScreenDimensionsForWeb from '../useScreenDimensions/useScreenDimensions.web'

export const useScrollControl = useScreenDimensionsForNative || useScreenDimensionsForWeb

export default useScrollControl