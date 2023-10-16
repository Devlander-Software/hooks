/// <reference types="react" />
import { View } from 'react-native';
export interface UseVisibilitySensorOptions<T> {
    (onChange: (visible: boolean) => void): React.RefObject<T>;
}
export type UseVisibilitySensorNative = UseVisibilitySensorOptions<View>;
export type UseVisibilitySensorWeb = UseVisibilitySensorOptions<any>;
export declare const useVisibilitySensor: (() => UseVisibilitySensorWeb) | undefined;
export default useVisibilitySensor;
