import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    console.log(pathname); // Accessing pathname from location object
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

