import type { LayoutChangeEvent } from "react-native";
export declare const useOverflowAdjuster: (initialUnit: number, step?: number) => {
    unit: number;
    onLayout: (event: LayoutChangeEvent) => void;
    isOverflowing: boolean;
};
