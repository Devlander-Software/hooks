import type { ViewStyle } from "react-native";
/**
 * Custom hook that returns the container style based on the provided props.
 * @param containerStyleProps - The style props for the container.
 * @returns The container style.
 */
type ContainerStyleProps = ViewStyle | ViewStyle[];
export declare const useContainerStyle: (containerStyleProps?: ContainerStyleProps) => ViewStyle | undefined;
export {};
