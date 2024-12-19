import type { ImageStyle, ViewStyle } from "react-native";
export declare const useLeafStyle: ({ containerStyle, additionalContainerStyleFromTheme, imageStyle, }: {
    containerStyle?: ViewStyle;
    additionalContainerStyleFromTheme?: ViewStyle;
    imageStyle?: ImageStyle;
}) => {
    mergedContainerStyles: {
        borderTopRightRadius: number;
        borderBottomLeftRadius: number;
    };
    mergedImageStyles: ImageStyle;
    setSize: (event: import("react-native").LayoutChangeEvent) => void;
};
