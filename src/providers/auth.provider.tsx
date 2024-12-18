import React, { createContext, useContext } from "react"
import type { PropsWithChildren } from "react"
import type { AuthState } from "../reducers/auth.reducer"
import { useAuthReducer } from "../reducers/auth.reducer"

// Define separate contexts
export const AuthStateContext = createContext<AuthState | null>(null)
export const AuthDispatchContext = createContext<React.Dispatch<any> | null>(
  null,
)

// AuthProvider: Provides state and dispatch separately
export function AuthProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useAuthReducer()

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

// Hook for accessing auth state
export function useAuthState() {
  const context = useContext(AuthStateContext)
  if (context === null) {
    throw new Error("useAuthState must be used within an AuthProvider")
  }
  return context
}

// Hook for accessing auth dispatch
export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext)
  if (context === null) {
    throw new Error("useAuthDispatch must be used within an AuthProvider")
  }
  return context
}
