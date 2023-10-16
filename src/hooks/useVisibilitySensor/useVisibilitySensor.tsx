import { Platform, View } from 'react-native';

export interface UseVisibilitySensorOptions<T> {
    (onChange: (visible: boolean) => void): React.RefObject<T>
}


export type UseVisibilitySensorNative = UseVisibilitySensorOptions<View>

export type UseVisibilitySensorWeb = UseVisibilitySensorOptions<any>

type UseVisibilitySensorDefinition = UseVisibilitySensorNative | UseVisibilitySensorWeb


export const useVisibilitySensor = Platform.select({
    web: () => require('./useVisibilitySensor.web').default as UseVisibilitySensorWeb ,
    native: () => require('./useVisibilitySensor.native').default as UseVisibilitySensorNative

})

export default useVisibilitySensor