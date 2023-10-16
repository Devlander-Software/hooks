import { UseVisibilitySensorWeb } from './useVisibilitySensor';
/**
 * A hook that monitors the visibility of a web React component within the viewport.
 * It tracks the dimensions of the target component and determines if it's entirely visible.
 *
 * @param onChange - Callback that fires when the visibility status of the component changes.
 * @returns A ref that should be attached to the component being observed.
 *
 * @example
 * const divRef = useVisibilitySensorForWeb(isVisible => console.log(isVisible));
 * <div ref={divRef} />
 */
declare const useVisibilitySensorForWeb: UseVisibilitySensorWeb;
export default useVisibilitySensorForWeb;
