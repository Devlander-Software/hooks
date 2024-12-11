import { useEffect, useReducer } from "react";
import type { ImageURISource } from "react-native";

export type VideoPlaybackSource = number | AVPlaybackSourceObject;

export type AVPlaybackSourceObject = {
  uri: string;
  overrideFileExtensionAndroid?: string;
  headers?: Record<string, string>;
};

export type SrcType =
  | null
  | string
  | VideoPlaybackSource
  | ImageURISource
  | (() => string)
  | (() => Promise<string>);

export interface SrcErrorType {
  key: string;
  error: Error;
}

export interface SrcResolverReturnType {
  loading: boolean;
  errors: SrcErrorType[];
  resolvedSrc?: string;
}

// Define the action types
type SrcResolverAction =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: string }
  | { type: "FETCH_FAILURE"; payload: SrcErrorType };

// Define the reducer state
interface SrcResolverState {
  loading: boolean;
  errors: SrcErrorType[];
  resolvedSrc?: string;
}

const initialState: SrcResolverState = {
  loading: false,
  errors: [],
  resolvedSrc: undefined,
};

// Reducer function to handle state transitions
const srcResolverReducer = (
  state: SrcResolverState,
  action: SrcResolverAction
): SrcResolverState => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, errors: [] };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, resolvedSrc: action.payload };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        errors: [...state.errors, action.payload],
      };
    default:
      return state;
  }
};

// Hook to resolve the source for media playback
export const useSrcResolver = (src: SrcType): SrcResolverReturnType => {
  const [state, dispatch] = useReducer(srcResolverReducer, initialState);

  useEffect(() => {
    const resolveSrc = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        if (typeof src === "string") {
          dispatch({ type: "FETCH_SUCCESS", payload: src });
        } else if (src && typeof src === "object" && "uri" in src && src.uri) {
          // Added `src.uri` check to ensure it's defined
          dispatch({ type: "FETCH_SUCCESS", payload: src.uri });
        } else if (typeof src === "function") {
          const result = await src();
          dispatch({ type: "FETCH_SUCCESS", payload: result });
        }
      } catch (error) {
        console.error("Error resolving source:", error);
        dispatch({
          type: "FETCH_FAILURE",
          payload: {
            key: "resolve",
            error: error instanceof Error ? error : new Error(String(error)),
          },
        });
      }
    };

    resolveSrc();
  }, [src]); // Track `src` directly

  return {
    loading: state.loading,
    errors: state.errors,
    resolvedSrc: state.resolvedSrc,
  };
};
