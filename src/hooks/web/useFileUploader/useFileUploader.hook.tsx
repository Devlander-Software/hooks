import { useReducer, useCallback, useRef } from "react"
import { convertBlobToBase64WebAsync } from "@devlander/utils" // Web utility

// State management types
interface State {
  fileData: string
  alert: string
  loading: boolean
}

type Action =
  | { type: "SET_FILE_DATA"; payload: string }
  | { type: "SET_ALERT"; payload: string }
  | { type: "SET_LOADING" }

const initialState: State = {
  fileData: "",
  alert: "",
  loading: false,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_FILE_DATA":
      return { ...state, fileData: action.payload, loading: false }
    case "SET_ALERT":
      return { ...state, alert: action.payload, loading: false }
    case "SET_LOADING":
      return { ...state, loading: true }
    default:
      return state
  }
}

// BlobCompressor interface
interface BlobCompressor {
  new (file: File, options: CompressorOptions): void
}

interface CompressorOptions {
  convertSize: number
  quality: number
  success: (result: Blob) => void
  error: (error: Error) => void
}

// Props for the hook
interface UseFileUploaderProps {
  validFileTypes?: string[]
  fileSizeLimit?: number
  Compressor?: BlobCompressor
  compressionOptions?: Partial<CompressorOptions>
  onProcessStart?: () => void
  onProcessEnd?: () => void
}

export const useFileUploader = ({
  validFileTypes = ["image/jpeg", "image/png", "application/pdf"],
  fileSizeLimit = 1000000,
  Compressor,
  compressionOptions = {},
  onProcessStart,
  onProcessEnd,
}: UseFileUploaderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleFileChangeRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Centralized error handler
  const handleError = useCallback((message: string) => {
    dispatch({ type: "SET_ALERT", payload: message })
  }, [])

  // File validation
  const validateFile = useCallback(
    (file: File): boolean => {
      if (!validFileTypes.includes(file.type)) {
        handleError(
          `Please upload a valid file type (${validFileTypes.join(", ")})`,
        )
        return false
      }

      if (file.size >= fileSizeLimit) {
        handleError(
          `Please upload a file smaller than ${fileSizeLimit / 1000000}MB`,
        )
        return false
      }

      return true
    },
    [fileSizeLimit, validFileTypes, handleError],
  )

  // File processing
  const processFile = useCallback(
    async (file: File) => {
      dispatch({ type: "SET_LOADING" })
      onProcessStart?.()

      try {
        if (Compressor && file.type.startsWith("image/")) {
          // Compress the file if Compressor is available
          new Compressor(file, {
            convertSize: 50,
            quality: 0.5,
            ...compressionOptions,
            success: async (result: Blob) => {
              const base64 = await convertBlobToBase64WebAsync(result)
              dispatch({ type: "SET_FILE_DATA", payload: base64 })
              onProcessEnd?.()
            },
            error: (error: Error) => {
              handleError(`Error compressing image: ${error.message}`)
              onProcessEnd?.()
            },
          })
        } else {
          // Convert directly to Base64
          const base64 = await convertBlobToBase64WebAsync(file)
          dispatch({ type: "SET_FILE_DATA", payload: base64 })
          onProcessEnd?.()
        }
      } catch (error) {
        console.error(error)
        handleError("Error processing file")
        onProcessEnd?.()
      }
    },
    [Compressor, compressionOptions, handleError, onProcessStart, onProcessEnd],
  )

  // File change handler
  const handleFileChange = useCallback(
    (file: File) => {
      if (handleFileChangeRef.current) {
        clearTimeout(handleFileChangeRef.current)
      }

      handleFileChangeRef.current = setTimeout(() => {
        if (file && validateFile(file)) {
          processFile(file)
        }
      }, 300)
    },
    [validateFile, processFile],
  )

  return {
    fileData: state.fileData,
    alert: state.alert,
    loading: state.loading,
    handleFileChange,
  }
}
