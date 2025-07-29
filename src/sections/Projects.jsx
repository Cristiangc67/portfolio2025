import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextCarousel from "../components/TextCarousel";
import Project from "../components/Project";
import { projectsList } from "../../constants/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({}) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    const createAnimation = () => {
      const scrollWidth = track.scrollWidth;
      const scrollDistance = scrollWidth - window.innerWidth;

      if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${1000}`,
        pin: true,
        scrub: 0.5,

        //scroller: "#smooth-content",
        animation: gsap.to(track, {
          x: -scrollDistance,
          ease: "none",
        }),
      });
    };

    // Inicial
    //requestAnimationFrame(createAnimation);
    createAnimation();

    // Resize
    const handleResize = () => {
      ScrollTrigger.refresh(); // actualiza layout y vuelve a llamar `end`
      //requestAnimationFrame(createAnimation); // recreate animación
      createAnimation();
    };

    window.addEventListener("resize", handleResize);

    /* return () => {
      window.removeEventListener("resize", handleResize);
      scrollTriggerRef.current?.kill();
    }; */
  }, []);

  return (
    <section id="proyectos" ref={sectionRef} className=" min-h-dvh w-full ">
      <TextCarousel textTitle={"PROYECTOS"} />
      <div ref={trackRef} className="flex w-fit items-center gap-8 p-20">
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
