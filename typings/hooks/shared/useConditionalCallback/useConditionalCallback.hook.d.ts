type ConditionalCallback<T extends (...args: any[]) => any> = T | undefined;
/**
 * Custom hook to create a conditional callback.
 *
 * @param callback - The function to invoke if conditions are met.
 * @param conditions - A single boolean or array of booleans; the callback is invoked only if all are true.
 * @returns A memoized callback that only calls `callback` if all conditions are true.
 */
export declare const useConditionalCallback: <T extends (...args: any[]) => any>(callback: ConditionalCallback<T>, conditions: boolean | boolean[]) => (...args: Parameters<T>) => void;
export {};
