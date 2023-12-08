import { useEffect, useState } from "react"
import type { ImageURISource } from "react-native"

type SrcType = null | string | ImageURISource | (() => string) | (() => Promise<string>)

export const useSrcResolver = (src: SrcType): {
    loading: boolean
    errors: { key: string; error: Error }[]
    resolvedSrc: string | null | undefined
} => {
    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<{ key: string; error: Error }[]>([])
    const [resolvedSrc, setResolvedSrc] = useState<string | null | undefined>(
        null,
    )

    useEffect(() => {
        const resolveSrc = async () => {
            setLoading(true)
            try {
                if (typeof src === "string") {
                    setResolvedSrc(src)
                } else if (typeof src === "object" && src !== null && "uri" in src) {
                    if (src && src.uri && src.uri !== undefined) {
                        setResolvedSrc((src as ImageURISource).uri)
                    }
                } else if (typeof src === "function") {
                    const result = await (src as () => Promise<string>)()
                    setResolvedSrc(result)
                } else if (src instanceof Promise) {
                    const result = await src
                    setResolvedSrc(result)
                }
            } catch (error) {
                // Handle promise rejection or other errors
                console.error("Error resolving source:", error)
                setErrors((prevErrors) => [...prevErrors, { key: "resolve", error: error as Error }])
            } finally {
                setLoading(false)
            }
        }

        resolveSrc()
    }, [src])

    return {
        loading,
        errors,
        resolvedSrc,
    }
}
