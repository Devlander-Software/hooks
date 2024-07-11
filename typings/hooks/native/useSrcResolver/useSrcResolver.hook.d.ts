import type { ImageURISource } from "react-native";
/**
 * Type definition for a video playback source which could be a number or an object with a URI.
 */
export type VideoPlaybackSource = number | AVPlaybackSourceObject;
/**
 * Represents a source object for AV playback with an optional override for the file extension on Android and headers.
 */
export type AVPlaybackSourceObject = {
    uri: string;
    overrideFileExtensionAndroid?: string;
    headers?: Record<string, string>;
};
/**
 * SrcType can be one of the following:
 * - A string URL
 * - A function returning a string or a promise that resolves to a string
 * - A VideoPlaybackSource object
 * - An ImageURISource object from react-native
 * - null
 */
export type SrcType = null | string | VideoPlaybackSource | ImageURISource | (() => string) | (() => Promise<string>);
/**
 * Defines the structure for an error object related to source resolution.
 */
export interface SrcErrorType {
    key: string;
    error: Error;
}
/**
 * Defines the return type for the useSrcResolver hook.
 */
export interface SrcResolverReturnType {
    loading: boolean;
    errors: SrcErrorType[];
    resolvedSrc?: string;
}
/**
 * Hook to resolve the source for media playback, handling various source types including remote URLs and local assets.
 * @param src - The source which can be a string, object, function, or null.
 * @returns An object containing the resolved source, loading state, and any errors encountered.
 */
export declare const useSrcResolver: (src: SrcType) => SrcResolverReturnType;
