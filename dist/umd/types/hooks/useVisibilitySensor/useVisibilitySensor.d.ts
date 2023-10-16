/// <reference types="react" />
import { View } from 'react-native';
export interface UseVisibilitySensorOptions<T> {
    (onChange: (visible: boolean) => void): React.RefObject<T>;
}
export type UseVisibilitySensorNative = UseVisibilitySensorOptions<View>;
export type UseVisibilitySensorWeb = UseVisibilitySensorOptions<any>;
type UseVisibilitySensorDefinition = UseVisibilitySensorNative | UseVisibilitySensorWeb;
export declare const useVisibilitySensor: UseVisibilitySensorDefinition;
export default useVisibilitySensor;
