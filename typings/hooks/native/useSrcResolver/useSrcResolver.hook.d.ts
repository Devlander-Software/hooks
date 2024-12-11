import type { ImageURISource } from "react-native";
export type VideoPlaybackSource = number | AVPlaybackSourceObject;
export type AVPlaybackSourceObject = {
    uri: string;
    overrideFileExtensionAndroid?: string;
    headers?: Record<string, string>;
};
export type SrcType = null | string | VideoPlaybackSource | ImageURISource | (() => string) | (() => Promise<string>);
export interface SrcErrorType {
    key: string;
    error: Error;
}
export interface SrcResolverReturnType {
    loading: boolean;
    errors: SrcErrorType[];
    resolvedSrc?: string;
}
export declare const useSrcResolver: (src: SrcType) => SrcResolverReturnType;
