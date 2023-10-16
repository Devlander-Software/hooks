import { View } from 'react-native';
import useVisibilitySensorForNative from './useVisibilitySensor.native';
import useVisibilitySensorForWeb from './useVisibilitySensor.web';

export interface UseVisibilitySensorOptions<T> {
    (onChange: (visible: boolean) => void): React.RefObject<T>
}


export type UseVisibilitySensorNative = UseVisibilitySensorOptions<View>

export type UseVisibilitySensorWeb = UseVisibilitySensorOptions<any>

type UseVisibilitySensorDefinition = UseVisibilitySensorNative | UseVisibilitySensorWeb


export const useVisibilitySensor: UseVisibilitySensorDefinition = useVisibilitySensorForNative || useVisibilitySensorForWeb

export default useVisibilitySensor