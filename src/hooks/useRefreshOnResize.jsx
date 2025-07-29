import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useRefreshOnResize() {
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}
