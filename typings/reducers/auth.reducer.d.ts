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
    status: "initializing" | "loggingIn" | "loggedIn" | "loggingOut" | "loggedOut" | "refreshing";
    error: string | null;
    loginError: string | null;
    logoutError: string | null;
    refreshError: string | null;
    guestError: string | null;
    registerError: string | null;
};
export declare const initialAuthState: AuthState;
export type AuthAction = {
    type: "INITIALIZING";
} | {
    type: "INITIALIZE";
    payload: {
        session: string | null;
        isGuest: boolean;
    };
} | {
    type: "AUTH_SUCCESS";
    payload: {
        session: string;
        actionType: "login" | "register";
    };
} | {
    type: "LOGOUT_SUCCESS";
} | {
    type: "REFRESH_SUCCESS";
} | {
    type: "CONTINUE_AS_GUEST_SUCCESS";
} | {
    type: "SET_LOADING";
    payload: keyof AuthState;
} | {
    type: "ERROR";
    payload: {
        method: keyof AuthState;
        message: string;
    };
} | {
    type: "RESET";
};
export declare function authReducer(state: AuthState, action: AuthAction): AuthState;
export declare function useAuthReducer(): readonly [AuthState, import("react").Dispatch<AuthAction>];
