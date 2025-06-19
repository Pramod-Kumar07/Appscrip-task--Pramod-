import { useState, useEffect } from "react";

export const useIsMobileView = (width = 767) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= width);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= width);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return isMobileView;
};
