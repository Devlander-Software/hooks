/**
 * A custom hook that returns a value which is initially set to the server value
 * and then updated to the client value once the component is mounted.
 *
 * @template S - The type of the server value.
 * @template C - The type of the client value.
 * @param {S} server - The initial value from the server.
 * @param {C} client - The value to be used on the client side.
 * @returns {S | C} - The current value, which is initially the server value and then the client value.
 */
export declare function useClientOnlyValue<S, C>(server: S, client: C): S | C;
