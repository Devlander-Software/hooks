import { useEffect, useState, useCallback } from "react"
import type { ImageURISource } from "react-native"

/**
 * Type definition for a video playback source which could be a number or an object with a URI.
 */
export type VideoPlaybackSource = number | AVPlaybackSourceObject

/**
 * Represents a source object for AV playback with an optional override for the file extension on Android and headers.
 */
export type AVPlaybackSourceObject = {
  uri: string
  overrideFileExtensionAndroid?: string
  headers?: Record<string, string>
}

/**
 * SrcType can be one of the following:
 * - A string URL
 * - A function returning a string or a promise that resolves to a string
 * - A VideoPlaybackSource object
 * - An ImageURISource object from react-native
 * - null
 */
export type SrcType =
  | null
  | string
  | VideoPlaybackSource
  | ImageURISource
  | (() => string)
  | (() => Promise<string>)

/**
 * Defines the structure for an error object related to source resolution.
 */
export interface SrcErrorType {
  key: string
  error: Error
}

/**
 * Defines the return type for the useSrcResolver hook.
 */
export interface SrcResolverReturnType {
  loading: boolean
  errors: SrcErrorType[]
  resolvedSrc?: string
}

/**
 * Hook to resolve the source for media playback, handling various source types including remote URLs and local assets.
 * @param src - The source which can be a string, object, function, or null.
 * @returns An object containing the resolved source, loading state, and any errors encountered.
 */
export const useSrcResolver = (src: SrcType): SrcResolverReturnType => {
  const [loading, setLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<SrcErrorType[]>([])
  const [resolvedSrc, setResolvedSrc] = useState<string | undefined>()

  const srcStringified = useCallback(
    () => (src && typeof src === "object" ? JSON.stringify(src) : src),
    [src],
  )
  const srcFunction = useCallback(
    () => (src && typeof src === "function" ? src.toString() : src),
    [src],
  )

  useEffect(() => {
    const resolveSrc = async () => {
      setLoading(true)
      setErrors([])

      try {
        if (typeof src === "string") {
          setResolvedSrc(src)
        } else if (src && typeof src === "object" && "uri" in src) {
          setResolvedSrc(src.uri)
        } else if (typeof src === "function") {
          const result = await src()
          setResolvedSrc(result)
        }
      } catch (error) {
        console.error("Error resolving source:", error)
        setErrors((prevErrors) => [
          ...prevErrors,
          {
            key: "resolve",
            error: error instanceof Error ? error : new Error(String(error)),
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    resolveSrc()
  }, [src, srcStringified, srcFunction])

  return {
    loading,
    errors,
    resolvedSrc,
  }
}
