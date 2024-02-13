// useMediaSize.js
import { useState, useEffect } from "react";

function useMediaSize() {
  const [mediaSize, setMediaSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setMediaSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return mediaSize;
}

export default useMediaSize;
