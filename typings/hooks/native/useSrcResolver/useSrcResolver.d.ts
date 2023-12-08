import type { ImageURISource } from "react-native";
type SrcType = null | string | ImageURISource | (() => string) | (() => Promise<string>);
export declare const useSrcResolver: (src: SrcType) => {
    loading: boolean;
    errors: {
        key: string;
        error: Error;
    }[];
    resolvedSrc: string | null | undefined;
};
export {};
