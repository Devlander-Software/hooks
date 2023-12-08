import type { ImageURISource } from "react-native";
type SrcType = null | string | ImageURISource | (() => string);
export declare const useSrcResolver: (src: SrcType) => string | null | undefined;
export {};
