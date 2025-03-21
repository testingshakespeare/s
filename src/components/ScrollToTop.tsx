import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant scrolling for better UX when navigating between pages
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}; 