import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollTrackMetrics(ref) {
  const [metrics, setMetrics] = useState({
    scrollWidth: 0,
    innerWidth: window.innerWidth,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      setMetrics({
        scrollWidth: element.scrollWidth,
        innerWidth: window.innerWidth,
      });
      ScrollTrigger.refresh();
    };

    // Inicial update
    update();

    // Observer para el contenido
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(element);

    // Listener para cambios en el tamaño de ventana
    window.addEventListener("resize", update);

    // Limpieza
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [ref]);

  return metrics;
}
