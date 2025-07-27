import { SkillsCarousel } from "./components/SkillsCarousel";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main className="w-full   overflow-x-hidden scroll-smooth ">
      <Navbar />
      <Hero />
      <Projects />

      <div className="min-h-dvh"></div>
      <SkillsCarousel />
    </main>
  );
}

export default App;
