import type { TextInput } from "react-native";
export declare const useNextTextInputFocus: (onSubmit?: () => void) => {
    registerInput: (ref: TextInput | null, index: number) => void;
    handleNextInput: (index: number) => void;
};
