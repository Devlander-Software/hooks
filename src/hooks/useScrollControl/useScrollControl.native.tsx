import { useRef } from 'react';
import { useKeyCodes } from '../useKeyCodes';
import usePreventDefault from '../usePreventDefault';





// Hook for disabling and enabling scroll
 function useScrollControl() {
  const { preventDefault, preventDefaultForScrollKeys } = usePreventDefault();
  const isScrollEnabled = useRef(true); // State to track if scrolling is enabled

  function disableScroll() {
    if (isScrollEnabled.current) {
      // Prevent scrolling if it's currently enabled
      preventDefaultForScrollKeys({ keyCode: useKeyCodes().down }); // Example: Prevent scrolling down
      isScrollEnabled.current = false; // Update the state to indicate scrolling is disabled
    }
  }

  function enableScroll() {
    if (!isScrollEnabled.current) {
      // Re-enable scrolling if it's currently disabled
      isScrollEnabled.current = true; // Update the state to indicate scrolling is now enabled
    }
  }

  return { disableScroll, enableScroll };
}


export default useScrollControl;