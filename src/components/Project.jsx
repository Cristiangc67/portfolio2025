import React, { useRef } from "react";
import Github from "../assets/github.svg?react";
import LinkSquare from "../assets/link.svg?react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Project = ({
  projectId,
  projectTitle,
  projectDescription,
  projectLinks,
}) => {
  const projectRef = useRef(null);
  const imageOverlayRef = useRef(null);
  useGSAP(() => {
    if (!projectRef.current || !imageOverlayRef.current) return;
    const createAnimation = () => {
      const hover = gsap.fromTo(
        imageOverlayRef.current,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
        }
      );
      hover.pause();
      const project = projectRef.current;
      project.addEventListener("mouseenter", () => hover.play());
      project.addEventListener("mouseleave", () => hover.reverse());
    };
    createAnimation();
    const handleResize = () => {
      createAnimation();
    };
    window.addEventListener("resize", handleResize);
  });

  return (
    <div
      ref={projectRef}
      id={`project-${projectId}`}
      className="project lg:w-[50em] xl:w-[60em] 2xl:w-[70em]  border-2 border-slate-800/70  shadow-xl overflow-hidden relative  rounded-2xl h-[60vh] xl:h-[70vh] shrink-0  "
    >
      <img
        id="hero-image"
        src={`/images/${projectId}.png`}
        className="h-full w-full"
        alt=""
      />
      <div
        ref={imageOverlayRef}
        className="imageP absolute inset-0 bg-gradient-to-br from-purple-800/70 to-fuchsia-950/90 text-center flex justify-center items-center backdrop-blur-sm"
      >
        <div className=" w-full flex flex-col gap-10 px-20">
          <h3 className="text-4xl neue_montrealbold">{projectTitle}</h3>
          <p className=" neue_montreal text-xl text-balance">
            {projectDescription}
          </p>
          <div className="flex gap-20 w-full justify-center">
            <a
              href={projectLinks.github}
              target="_blank"
              className=" bg-zinc-900 border border-pink-500/90 hover:bg-pink-500 w-2/5 h-12 gap-2 items-center flex justify-center rounded-xl"
            >
              <Github className="w-5 h-5  " />{" "}
              <p className="neue_montrealsemibold">GitHub</p>
            </a>
            <a
              href={projectLinks.web}
              target="_blank"
              className=" bg-gradient-to-br from-pink-500 to-fuchsia-800 hover:shadow-[0px_0px_34px_2px_rgba(246,51,154,0.5)]  w-2/5 h-12 gap-2 items-center flex justify-center rounded-xl"
            >
              <LinkSquare className="w-5 h-5 " />
              <p className="neue_montrealsemibold">Pagina web</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
