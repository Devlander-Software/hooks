import type { MutableRefObject } from "react";
import type { LayoutType } from "../../types/screen-size.type";
type SizeType = LayoutType | DOMRect;
/**
 * Represents the type of size information.
 * @typedef {LayoutType | DOMRect} SizeType
 */
/**
 * Custom hook to track the size of an element.
 * @returns {[SizeType, MutableRefObject<HTMLElement | null>]} An array containing the current size and a ref to the element.
 */
export declare const useElementSize: () => [
    SizeType,
    MutableRefObject<HTMLElement | null>
];
export {};
