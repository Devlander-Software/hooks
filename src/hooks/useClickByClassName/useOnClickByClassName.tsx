import { useCallback } from 'react';
import { UseOnClickByStyleOptions } from '../../types/on-click-by-style-options.type';

interface UseOnClickByStyleOptionsForWeb extends UseOnClickByStyleOptions {
    className?: string;
    onClick?: () => void;
}

/**
 * `useOnClickByStyleForWeb` hook is designed to handle click actions on specific elements within a clickable area on the web.
 * It ensures the action is only triggered when the user interacts with an element containing a designated className.
 * 
 * @param {UseOnClickByStyleOptionsForWeb} options - The options for the hook.
 * @param {string} options.className - The className to look for. Defaults to 'onclick-class'.
 * @param {() => void} options.onClick - The callback function to execute when the desired class is clicked.
 * 
 * @returns {Function} A handler function to be used in a clickable component.
 */


export function useOnClickByClassName({ className = 'onclick-class', onClick }: UseOnClickByStyleOptionsForWeb) {
    const handleOnClick = useCallback((event: any) => {
        if (event.target && event.target.className && typeof event.target.className.includes === 'function') {
            if (event.target.className.includes(className) && typeof onClick === "function") {
                onClick();
            }
        }
    }, [className, onClick]);

    return handleOnClick;
}

export default useOnClickByClassName;
