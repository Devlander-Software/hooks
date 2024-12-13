import type React from "react";
interface UseSubmitEditingOptions {
    onSubmitEditing?: () => void;
}
export declare const useSubmitEditing: ({ onSubmitEditing, }: UseSubmitEditingOptions) => {
    handleKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
    inputRef: React.RefObject<HTMLElement>;
};
export {};
