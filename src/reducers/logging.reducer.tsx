import type{ LoggingAction, LoggingState } from "../types/logging-severity.type";

export const loggingReducer = (state: LoggingState, action: LoggingAction): LoggingState => {
  switch (action.type) {
    case 'SET_LOGS': {
      const { logs, severity } = action.payload;
      return {
        ...state,
        logs: {
          ...state.logs,
          [severity]: { ...state.logs[severity], ...logs },
        },
        logsEmpty: {
          ...state.logsEmpty,
          [severity]: Object.keys(logs).length === 0,
        },
      };
    }
    case 'CLEAR_LOGS': {
      const { payload: severity } = action;
      return {
        ...state,
        logs: { ...state.logs, [severity]: {} },
        logsEmpty: { ...state.logsEmpty, [severity]: true },
      };
    }
    case 'TOGGLE_TOAST': {
      const { severity, open, message = '', autoHideDuration = 10000 } = action.payload;
      return {
        ...state,
        toasts: {
          severity,
          open,
          message,
          autoHideDuration,
        },
      };
    }
    case 'SET_LOADING': {
      const { id, loading } = action.payload;
      return {
        ...state,
        loading: {
          ...state.loading,
          [id]: loading,
        },
      };
    }
    default:
      return state;
  }
};


