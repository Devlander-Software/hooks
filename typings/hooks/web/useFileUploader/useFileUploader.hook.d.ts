interface BlobCompressor {
    new (file: File, options: CompressorOptions): void;
}
interface CompressorOptions {
    convertSize: number;
    quality: number;
    success: (result: Blob) => void;
    error: (error: Error) => void;
}
interface UseFileUploaderProps {
    validFileTypes?: string[];
    fileSizeLimit?: number;
    Compressor?: BlobCompressor;
    compressionOptions?: Partial<CompressorOptions>;
    onProcessStart?: () => void;
    onProcessEnd?: () => void;
}
export declare const useFileUploader: ({ validFileTypes, fileSizeLimit, Compressor, compressionOptions, onProcessStart, onProcessEnd, }: UseFileUploaderProps) => {
    fileData: string;
    alert: string;
    loading: boolean;
    handleFileChange: (file: File) => void;
};
export {};
