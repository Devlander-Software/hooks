import { useReducer } from "react";

// Authentication State
export type AuthState = {
    isLoading: boolean;
    isLoggingIn: boolean;
    isLoggingOut: boolean;
    isRefreshing: boolean;
    isContinuingAsGuest: boolean;
    isRegistering: boolean;
    session: string | null;
    isGuest: boolean;
    isUser: boolean;
    status: 'initializing' | 'loggingIn' | 'loggedIn' | 'loggingOut' | 'loggedOut' | 'refreshing';
    error: string | null;
    loginError: string | null;
    logoutError: string | null;
    refreshError: string | null;
    guestError: string | null;
    registerError: string | null;
}

// Initial State
export const initialAuthState: AuthState = {
    isLoading: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isRefreshing: false,
    isContinuingAsGuest: false,
    isRegistering: false,
    session: null,
    isGuest: false,
    isUser: false,
    status: 'loggedOut',
    error: null,
    loginError: null,
    logoutError: null,
    refreshError: null,
    guestError: null,
    registerError: null,
};

// Authentication Actions
export type AuthAction =
    | { type: 'INITIALIZING' }
    | { type: 'INITIALIZE'; payload: { session: string | null; isGuest: boolean } }
    | { type: 'AUTH_SUCCESS'; payload: { session: string; actionType: 'login' | 'register' } }
    | { type: 'LOGOUT_SUCCESS' }
    | { type: 'REFRESH_SUCCESS' }
    | { type: 'CONTINUE_AS_GUEST_SUCCESS' }
    | { type: 'SET_LOADING'; payload: keyof AuthState }
    | { type: 'ERROR'; payload: { method: keyof AuthState; message: string } }
    | { type: 'RESET' };

// Authentication Reducer
export function authReducer(state: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case 'INITIALIZING':
            return { ...state, isLoading: true, status: 'initializing' };

        case 'INITIALIZE':
            return {
                ...state,
                isLoading: false,
                session: action.payload.session,
                isGuest: action.payload.isGuest,
                isUser: !!action.payload.session,
                status: action.payload.session ? 'loggedIn' : 'loggedOut',
                error: null,
            };

        case 'SET_LOADING':
            return { ...state, [action.payload]: true };

        case 'AUTH_SUCCESS':
            return {
                ...state,
                isLoggingIn: action.payload.actionType === 'login' ? false : state.isLoggingIn,
                isRegistering: action.payload.actionType === 'register' ? false : state.isRegistering,
                session: action.payload.session,
                isUser: true,
                loginError: null,
                registerError: null,
            };

        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isLoggingOut: false,
                session: null,
                isUser: false,
                logoutError: null,
            };

        case 'CONTINUE_AS_GUEST_SUCCESS':
            return {
                ...state,
                isContinuingAsGuest: false,
                session: null,
                isGuest: true,
                guestError: null,
            };

        case 'REFRESH_SUCCESS':
            return {
                ...state,
                isRefreshing: false,
                refreshError: null,
            };

        case 'ERROR':
            return {
                ...state,
                [action.payload.method]: false, // Reset specific loading state
                [`${action.payload.method}Error`]: action.payload.message, // Set specific error message
            };

        case 'RESET':
            return { ...initialAuthState };

        default:
            return state;
    }
}

// Custom Hook: useAuthReducer
export function useAuthReducer() {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    return [state, dispatch] as const;
}
