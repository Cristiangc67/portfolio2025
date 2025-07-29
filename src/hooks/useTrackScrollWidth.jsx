import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useTrackScrollWidth(ref) {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      setScrollWidth(element.scrollWidth);
      ScrollTrigger.refresh(); // actualiza los triggers
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return scrollWidth;
}
