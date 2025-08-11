import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextCarousel from "../components/TextCarousel";
import Project from "../components/Project";
import ProjectMobile from "../components/ProjectMobile";
import { projectsList } from "../../constants/constants";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({}) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const ismobile = useMediaQuery({ maxWidth: 768 });
  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    const createAnimation = () => {
      if (ismobile) {
        if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
        return;
      }
      const scrollWidth = track.scrollWidth;
      const scrollDistance = scrollWidth - window.innerWidth;

      if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${1000}`,
        pin: true,
        scrub: 0.5,
        animation: gsap.to(track, {
          x: -scrollDistance,
          ease: "none",
        }),
      });
      if (ismobile) scrollTriggerRef.current.kill();
    };

    createAnimation();

    // Resize
    const handleResize = () => {
      ScrollTrigger.refresh(); // actualiza layout y vuelve a llamar `end`
      //requestAnimationFrame(createAnimation); // recreate animación
      createAnimation();
    };

    window.addEventListener("resize", handleResize);
  }, [ismobile]);

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className=" min-h-dvh w-full py-15"
    >
      <TextCarousel textTitle={"PROYECTOS"} />
      <div className=" flex flex-col gap-5 lg:hidden px-4 pt-10 lg:pt-0">
        {projectsList.map((proj, j) => (
          <ProjectMobile
            key={j}
            projectId={proj.id}
            projectTitle={proj.title}
            projectDescription={proj.description}
            projectLinks={proj.links}
          />
        ))}
      </div>
      <div
        ref={trackRef}
        className="hidden  lg:flex w-fit items-center gap-8 p-20"
      >
        {projectsList.map((proj, i) => (
          <Project
            key={i}
            projectId={proj.id}
            projectTitle={proj.title}
            projectDescription={proj.description}
            projectLinks={proj.links}
          />
        ))}
      </div>
    </section>
  );
}
