import { useCallback } from 'react';
import { UseOnClickByStyleOptions } from '../../types/on-click-by-style-options.type';

interface UseOnClickNativeOptions extends UseOnClickByStyleOptions {
    styleName: string;
    onPress: () => void;
}

/**
 * `useOnClickByStyleNative` hook is designed to handle press actions on specific elements within a pressable area in React Native.
 * It ensures the action is only triggered when the user interacts with an element associated with a specific stylesheet name.
 * 
 * @param {UseOnClickNativeOptions} options - The options for the hook.
 * @param {string} options.styleName - The stylesheet name to look for. Defaults to 'onClickStyle'.
 * @param {() => void} options.onPress - The callback function to execute when the desired style is pressed.
 * 
 * @returns {Function} A handler function to be used in a pressable component.
 */


function useClickOnByStyle({ styleName = 'onClickStyle', onPress }: UseOnClickNativeOptions) {
    const handleOnClick = useCallback((event: any) => {
        if (event.currentTarget && event.currentTarget.style) {
            // This is a conceptual approach. In reality, React Native doesn't have this attribute.
            if (event.currentTarget.style.name === styleName && typeof onPress === "function") {
                onPress();
            }
        }
    }, [styleName, onPress]);

    return handleOnClick;
}

export default useClickOnByStyle;
