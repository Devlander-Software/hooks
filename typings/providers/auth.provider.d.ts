import React from "react";
import type { PropsWithChildren } from "react";
import type { AuthState } from "../reducers/auth.reducer";
export declare const AuthStateContext: React.Context<AuthState | null>;
export declare const AuthDispatchContext: React.Context<React.Dispatch<any> | null>;
export declare function AuthProvider({ children }: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
export declare function useAuthState(): AuthState;
export declare function useAuthDispatch(): React.Dispatch<any>;
