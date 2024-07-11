import { isEmpty } from "@devlander/utils";
import { useMemo } from "react";
import type { ViewStyle } from "react-native";

/**
 * Custom hook that returns the container style based on the provided props.
 * @param containerStyleProps - The style props for the container.
 * @returns The container style.
 */

type ContainerStyleProps = ViewStyle | ViewStyle[];

export const useContainerStyle = (
  containerStyleProps?: ContainerStyleProps,
) => {
  const getContainerStyle = useMemo(() => {
    if (containerStyleProps === undefined || isEmpty(containerStyleProps)) {
      return {};
    }

    if (Array.isArray(containerStyleProps)) {
      return containerStyleProps[0];
    }

    return containerStyleProps;
  }, [JSON.stringify(containerStyleProps)]);

  return getContainerStyle;
};
