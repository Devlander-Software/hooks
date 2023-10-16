import { Platform, View } from 'react-native';

export interface UseVisibilitySensorOptions<T> {
    (onChange: (visible: boolean) => void): React.RefObject<T>
}


export type UseVisibilitySensorNative = UseVisibilitySensorOptions<View>

export type UseVisibilitySensorWeb = UseVisibilitySensorOptions<any>

type UseVisibilitySensorDefinition = UseVisibilitySensorNative | UseVisibilitySensorWeb


export const useVisibilitySensor: UseVisibilitySensorDefinition = Platform.select({
    web: () => require('./useVisibilitySensor.web').default,
    default: () => require('./useVisibilitySensor.native').default
})

export default useVisibilitySensor