import type { NavigationKeyType } from "../../../types/navigation-key.enum";
type UseNextInputFocusOptions = {
    navigationKey?: NavigationKeyType;
    scrollIntoViewOptions?: ScrollIntoViewOptions;
};
export declare const useNextInputFocus: ({ navigationKey, scrollIntoViewOptions, }?: UseNextInputFocusOptions) => {
    setInputRef: (ref: HTMLElement | null, index: number) => void;
    handleKeyDown: (e: React.KeyboardEvent, index: number, totalFields: number) => void;
};
export {};
