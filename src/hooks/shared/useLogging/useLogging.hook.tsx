// src/hooks/useLoggingReducer.ts

import { useReducer } from "react"
import type { LoggingState } from "../../../types/logging-severity.type"

// Initial state for the logging reducer
const initialState: LoggingState = {
  logs: {
    error: {},
    info: {},
    success: {},
    warning: {},
  },
  logsEmpty: {
    error: true,
    info: true,
    success: true,
    warning: true,
  },
  toasts: {
    severity: "info",
    open: false,
    message: "",
    autoHideDuration: 10000,
  },
  loading: {},
}

// Define the configuration interface for useLoggingReducer
interface UseLoggingConfig {
  loggers: {
    log: (message?: any, ...optionalParams: any[]) => void
    error?: (message?: any, ...optionalParams: any[]) => void
    info?: (message?: any, ...optionalParams: any[]) => void
    warn?: (message?: any, ...optionalParams: any[]) => void
    debug?: (message?: any, ...optionalParams: any[]) => void
    trace?: (message?: any, ...optionalParams: any[]) => void
  }[]
}

// Logging reducer function (placeholder for actual implementation)
const loggingReducer = (state: LoggingState, action: any): LoggingState => {
  switch (action.type) {
    case "SET_LOGS":
      // Update logs based on severity
      return {
        ...state,
        logs: {
          ...state.logs,
          [action.payload.severity]: action.payload.logs,
        },
        logsEmpty: {
          ...state.logsEmpty,
          [action.payload.severity]: false,
        },
      }
    case "CLEAR_LOGS":
      // Clear logs for a specific severity or all severities
      return {
        ...state,
        logs: {
          ...state.logs,
          [action.payload]: {},
        },
        logsEmpty: {
          ...state.logsEmpty,
          [action.payload]: true,
        },
      }
    default:
      return state
  }
}

/**
 * useLoggingReducer Hook
 * @param config - Configuration for logging, including multiple logger instances.
 * @returns Logging utilities and state.
 */
export const useLoggingReducer = (config: UseLoggingConfig) => {
  const [logState, dispatch] = useReducer(loggingReducer, initialState)

  const logToAll = (
    method: keyof UseLoggingConfig["loggers"][number],
    message: any,
    ...optionalParams: any[]
  ) => {
    config.loggers.forEach((logger) => {
      const logFn = logger[method]
      if (logFn) {
        logFn(message, ...optionalParams)
      }
    })
  }

  const logInfo = (logs: Record<string, unknown>) => {
    logToAll("info", logs)
    dispatch({
      type: "SET_LOGS",
      payload: { logs, severity: "info" },
    })
  }

  const logError = (logs: Record<string, unknown>) => {
    logToAll("error", logs)
    dispatch({
      type: "SET_LOGS",
      payload: { logs, severity: "error" },
    })
  }

  const logSuccess = (logs: Record<string, unknown>) => {
    logToAll("log", logs) // Default to 'log' if 'success' isn't explicitly defined
    dispatch({
      type: "SET_LOGS",
      payload: { logs, severity: "success" },
    })
  }

  const logWarning = (logs: Record<string, unknown>) => {
    logToAll("warn", logs)
    dispatch({
      type: "SET_LOGS",
      payload: { logs, severity: "warning" },
    })
  }

  const resetLogs = (severity?: "info" | "error" | "success" | "warning") => {
    if (severity) {
      dispatch({ type: "CLEAR_LOGS", payload: severity })
    } else {
      ;["info", "error", "success", "warning"].forEach((sev) => {
        dispatch({
          type: "CLEAR_LOGS",
          payload: sev as "info" | "error" | "success" | "warning",
        })
      })
    }
  }

  return {
    logState,
    dispatch,
    logInfo,
    logError,
    logSuccess,
    logWarning,
    resetLogs,
  }
}
