import React from "react";
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
  useGSAP(() => {
    const project = document.querySelector(`#project-${projectId}`);
    const hover = gsap.fromTo(
      `#project-${projectId} .imageP`,
      { yPercent: 0, opacity: 0 },
      {
        yPercent: -100,
        opacity: 1,
      }
    );
    hover.pause();
    project.addEventListener("mouseenter", () => hover.play());
    project.addEventListener("mouseleave", () => hover.reverse());
  });

  return (
    <div
      id={`project-${projectId}`}
      className="min-w-[70vw] border-2 border-slate-800/75  shadow-xl overflow-hidden relative  rounded-2xl h-[70vh] shrink-0"
    >
      <img
        id="hero-image"
        src="/images/personifAI-home.png"
        className="w-full h-full "
        alt=""
      />
      <div className="imageP absolute w-full h-full bg-pink-900/90 text-center flex justify-center  items-center translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 ">
        <div className=" w-full flex flex-col gap-10 px-20">
          <h3 className="text-4xl neue_montrealbold">{projectTitle}</h3>
          <p className="text-start">{projectDescription}</p>
          <div className="flex gap-48 justify-center">
            <a
              href={projectLinks.github}
              target="_blank"
              className="bg-[#D6559F] hover:bg-pink-800 w-16 h-16 items-center flex justify-center rounded-xl"
            >
              <Github className="w-10 h-10 " />
            </a>
            <a
              href={projectLinks.web}
              target="_blank"
              className=" bg-[#D6559F] hover:bg-pink-800 w-16 h-16 items-center flex justify-center rounded-xl"
            >
              <LinkSquare className="w-10 h-10 text-amber-800" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
