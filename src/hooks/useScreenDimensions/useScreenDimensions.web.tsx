import { useEffect, useState } from "react";
import { ScreenSize } from "../../types/screen-size.type";


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

const useScreenDimensionsForWeb = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const onResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add the event listener
    window.addEventListener("resize", onResize);

    // Cleanup by removing the event listener
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return screenSize;
};

export default useScreenDimensionsForWeb;
