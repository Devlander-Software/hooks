import type { LoggingState } from "../../../types/logging-severity.type";
interface UseLoggingConfig {
    loggers: {
        log: (message?: any, ...optionalParams: any[]) => void;
        error?: (message?: any, ...optionalParams: any[]) => void;
        info?: (message?: any, ...optionalParams: any[]) => void;
        warn?: (message?: any, ...optionalParams: any[]) => void;
        debug?: (message?: any, ...optionalParams: any[]) => void;
        trace?: (message?: any, ...optionalParams: any[]) => void;
    }[];
}
/**
 * useLoggingReducer Hook
 * @param config - Configuration for logging, including multiple logger instances.
 * @returns Logging utilities and state.
 */
export declare const useLoggingReducer: (config: UseLoggingConfig) => {
    logState: LoggingState;
    dispatch: import("react").Dispatch<any>;
    logInfo: (logs: Record<string, unknown>) => void;
    logError: (logs: Record<string, unknown>) => void;
    logSuccess: (logs: Record<string, unknown>) => void;
    logWarning: (logs: Record<string, unknown>) => void;
    resetLogs: (severity?: "info" | "error" | "success" | "warning") => void;
};
export {};
