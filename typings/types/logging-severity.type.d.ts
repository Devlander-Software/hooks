export type Severity = 'error' | 'info' | 'success' | 'warning';
/**
 * The structure for logs categorized by severity.
 */
export interface LogsBySeverity {
    error: Record<string, any>;
    info: Record<string, any>;
    success: Record<string, any>;
    warning: Record<string, any>;
}
/**
 * The structure for determining if logs are empty by severity.
 */
export interface LogsEmptyBySeverity {
    error: boolean;
    info: boolean;
    success: boolean;
    warning: boolean;
}
/**
 * The structure for toast notifications.
 */
export interface ToastState {
    severity: Severity;
    open: boolean;
    message: string;
    autoHideDuration: number;
}
/**
 * The overall logging state structure.
 */
export interface LoggingState {
    logs: LogsBySeverity;
    logsEmpty: LogsEmptyBySeverity;
    toasts: ToastState;
    loading: Record<string, boolean>;
}
/**
 * The structure for actions that modify logging state.
 */
export type LoggingAction = {
    type: 'SET_LOGS';
    payload: {
        logs: Record<string, any>;
        severity: Severity;
        methodName?: string;
    };
} | {
    type: 'CLEAR_LOGS';
    payload: Severity;
} | {
    type: 'TOGGLE_TOAST';
    payload: {
        severity: Severity;
        open: boolean;
        message?: string;
        autoHideDuration?: number;
    };
} | {
    type: 'SET_LOADING';
    payload: {
        id: string;
        loading: boolean;
    };
};
