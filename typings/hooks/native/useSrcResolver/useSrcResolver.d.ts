import type { ImageURISource } from "react-native";
type SrcType = null | string | ImageURISource | (() => string) | (() => Promise<string>);
interface ErrorType {
    key: string;
    error: Error;
}
interface SrcResolverReturnType {
    loading: boolean;
    errors: ErrorType[];
    resolvedSrc: string | null | undefined;
}
export declare const useSrcResolver: (src: SrcType) => SrcResolverReturnType;
export {};
