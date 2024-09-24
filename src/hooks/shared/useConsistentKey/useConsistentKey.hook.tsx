import { useMemo } from "react"

/**
 * A generic hook that generates a consistent key based on input arguments.
 *
 * Originally created for the purpose of generating consistent cache keys, this hook can be used
 * in any scenario where you need a normalized key. It takes two arguments: `arg1` and `arg2`,
 * and returns a consistent key regardless of the order in which the arguments are passed.
 *
 * The hook identifies one argument as an "identifier" and the other as a "prefix".
 * The identifier is normalized by removing spaces, converting it to lowercase, and stripping
 * non-alphanumeric characters. The key is then returned in the format: `prefix-identifier-key`.
 *
 * If either argument is `undefined` or cannot be determined, the hook returns `undefined`.
 *
 * ### Example Usage:
 *
 * ```ts
 * const cacheKey = useConsistentKey("UserName", "UserProfile");
 * console.log(cacheKey); // "UserProfile-username-key"
 *
 * const anotherKey = useConsistentKey("Project42", "Cache");
 * console.log(anotherKey); // "Cache-project42-key"
 * ```
 *
 * @param arg1 - The first argument, which can be either an identifier or a prefix.
 * @param arg2 - The second argument, which can be either a prefix or an identifier.
 * @returns A consistent key formatted as `prefix-identifier-key`, or `undefined` if either argument is invalid.
 */
export const useConsistentKey = (
  arg1: string,
  arg2: string | undefined,
): string | undefined => {
  return useMemo(() => {
    // Determine which argument is the identifier and which is the prefix
    const isIdentifierFirst = /^[a-zA-Z\s]+$/.test(arg1) // Assume identifier contains letters and spaces
    const identifier = isIdentifierFirst ? arg1 : arg2
    const prefix = isIdentifierFirst ? arg2 : arg1

    if (!identifier || !prefix) return undefined

    // Remove all spaces from the identifier
    const cleanedIdentifier = identifier.replace(/\s+/g, "")

    // Normalize the identifier to lowercase and remove non-alphanumeric characters
    const formattedIdentifier = cleanedIdentifier
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "")

    // Return the key in a consistent format
    return `${prefix}-${formattedIdentifier}-key`
  }, [arg1, arg2])
}
