import { useState, useEffect } from "react";

export const useIsMobileView = (width = 767) => {
  const [isMobileView, setIsMobileView] = useState(
    typeof window !== "undefined" ? window.innerWidth <= width : false
  );

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
