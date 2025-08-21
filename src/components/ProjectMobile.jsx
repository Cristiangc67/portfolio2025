import React from "react";
import Github from "../assets/github.svg?react";
import LinkSquare from "../assets/link.svg?react";

const ProjectMobile = ({
  projectId,
  projectTitle,
  projectDescription,
  projectLinks,
}) => {
  const smallerDescription = projectDescription.slice(0, 200).concat("...");

  return (
    <div className="bg-fuchsia-800/20 rounded-2xl flex flex-col border border-fuchsia-600/40 h-full w-full pb-5">
      <img
        id="hero-image"
        src={`/images/${projectId}.png`}
        className="w-full rounded-t-2xl"
        alt=""
      />
      <div className=" flex flex-col gap-5 mt-4 px-5">
        <p className="neue_montrealsemibold text-xl text-pink-600">
          {projectTitle}
        </p>
        <p className="text-sm neue_montreal text-white/50 text-balance ">
          {smallerDescription}
        </p>
        <div className="flex gap-3 w-full mt-2 justify-center">
          <a
            href={projectLinks.github}
            target="_blank"
            className=" bg-zinc-900 border  border-pink-500/90 hover:bg-pink-500 w-1/2 h-10 gap-2 items-center flex justify-center rounded-xl"
          >
            <Github className="w-5 h-5  " />
            <p className="neue_montrealsemibold text-base">GitHub</p>
          </a>
          <a
            href={projectLinks.web}
            target="_blank"
            className=" bg-gradient-to-br  from-pink-500 to-fuchsia-800 hover:shadow-[0px_0px_34px_2px_rgba(246,51,154,0.5)]  w-1/2 h-10 gap-2 items-center flex justify-center rounded-xl"
          >
            <LinkSquare className="w-5 h-5 " />
            <p className="neue_montrealsemibold text-base">Pagina web</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectMobile;
