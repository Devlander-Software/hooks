import { useEffect, useState } from "react";
import { ScreenSize } from "../../types/screen-size.type";



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
