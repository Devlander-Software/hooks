import { useEffect, useRef, useState } from 'react';
import { LayoutType } from '../../types/screen-size.type';


export const useComponentSizeForWeb = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [size, setSize] = useState<LayoutType>({
    width: 0,
    height: 0,
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (ref.current) {
      const { width, height, x, y } = ref.current.getBoundingClientRect();
      setSize({ width, height, x, y });
    }

    const handleResize = () => {
      if (ref.current) {
        const { width, height, x, y } = ref.current.getBoundingClientRect();
        setSize({ width, height, x, y });
      }
    };

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup by removing the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return [ size, ref ];
};

export default useComponentSizeForWeb;
