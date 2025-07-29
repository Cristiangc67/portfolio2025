import { SkillsCarousel } from "./components/SkillsCarousel";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const navbarPRef = useRef(null);
  const smootherRef = useRef(null);
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
    });

    smootherRef.current = smoother;
    ScrollTrigger.refresh();
  }, []);

  return (
    <main id="smooth-wrapper" className="w-full  overflow-x-hidden">
      <Navbar smoother={smootherRef} />
      <div id="smooth-content">
        <Hero />
        <Projects />

        <About />

        <div className="min-h-dvh bg-blue-500"></div>
      </div>

      <SkillsCarousel />
    </main>
  );
}

export default App;
