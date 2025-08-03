import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import TextCarousel from "../components/TextCarousel";

import Skill from "../components/Skill";

import IconMongo from "../assets/skills/MongoDB.svg?react";
import IconExpress from "../assets/skills/express.svg?react";
import IconReact from "../assets/skills/React.svg?react";
import IconNode from "../assets/skills/NodeJs.svg?react";
import IconTailwind from "../assets/skills/tailwind.svg?react";
import IconMySQL from "../assets/skills/mysql.svg?react";
import IconJs from "../assets/skills/javascript.svg?react";
import IconBootstrap from "../assets/skills/bootstrap.svg?react";
import IconHtml from "../assets/skills/html5.svg?react";
import IconCss from "../assets/skills/css3.svg?react";
import IconDocker from "../assets/skills/docker.svg?react";
import IconPython from "../assets/skills/python.svg?react";
import IconGit from "../assets/skills/git.svg?react";
import IconGithub from "../assets/skills/github.svg?react";

const About = () => {
  const skillsList = [
    { id: 1, name: "MongoDB", icon: IconMongo },
    { id: 2, name: "Express", icon: IconExpress },
    { id: 3, name: "React", icon: IconReact },
    { id: 4, name: "NodeJS", icon: IconNode },
    { id: 5, name: "Tailwind", icon: IconTailwind },
    { id: 6, name: "MySQL", icon: IconMySQL },
    { id: 7, name: "Javascript", icon: IconJs },
    { id: 8, name: "Bootstrap", icon: IconBootstrap },
    { id: 9, name: "HTML", icon: IconHtml },
    { id: 10, name: "CSS", icon: IconCss },
    { id: 11, name: "Docker", icon: IconDocker },
    { id: 12, name: "Python", icon: IconPython },
    { id: 13, name: "Git", icon: IconGit },
    { id: 14, name: "Github", icon: IconGithub },
  ];

  useGSAP(() => {
    const timelineAbout = gsap.timeline({
      scrollTrigger: {
        trigger: "#sobre-mi",
        start: "top top",
        end: "+=400", // duración de 1px de scroll (no de tiempo)
        pin: true,
        scrub: false,
        markers: true,
      },
    });
    /* const timelineContainer = gsap.timeline({
      scrollTrigger: {
        trigger: "#image-container",
        start: "80% 40%",
        markers: true,
        pin: true,
        scrub: true,
      },
    });
    timelineContainer
      .to("#profile-picture", {
        xPercent: 100,
        ease: "power1.inOut",
      })
      .to("#image-container", {
        translateX: "-50%",
        ease: "power1.inOut",
      })
      .to("#image-container", {
        onStart: () => {
          // Establece fixed para que se expanda sobre toda la pantalla
          const el = document.getElementById("image-container");
          el.style.position = "fixed";
          el.style.top = "0";
          el.style.left = "0";
          el.style.zIndex = "50"; // Asegurate que esté por encima
        },
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        scale: 1, // Reinicia escala para evitar deformación
        ease: "power2.inOut",
        duration: 1,
      })
      .to("#profile-picture", {
        opacity: 0,
        duration: 0.5,
      })
      .to("#contact", {
        display: "block",
        opacity: 1,
        duration: 0.5,
        onStart: () => {
          const el = document.getElementById("contact");
          el.classList.remove("hidden");
        },
      }); */

    timelineAbout
      .from("#about-paragraph", { yPercent: 100, opacity: 0 })
      .from("#profile-picture", { xPercent: 100, opacity: 0 })
      .from(".skill", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.08,
      });
  });

  return (
    <section id="sobre-mi" className="h-screen w-full  relative py-15 ">
      <TextCarousel textTitle={"SOBRE MI"} />
      <div className="w-full h-screen grid grid-cols-8  container mx-auto gap-20">
        <div className="mt-10 col-span-5 col-start-1 ">
          <p
            id="about-paragraph"
            className="text-2xl neue_montreal text-balance"
          >
            Soy Técnico Superior en Desarrollo de Software y me especializo en
            el desarrollo web full stack. Disfruto creando aplicaciones
            dinámicas y bien diseñadas, combinando lógica, diseño y buenas
            prácticas. Trabajo con tecnologías modernas tanto del lado del
            frontend como del backend, y siempre estoy explorando nuevas
            herramientas para mejorar mis proyectos.
          </p>
          <div className="mt-10 ">
            <h3 className="text-4xl neue_montrealsemibold ">Skills</h3>
            <div className="mt-10 grid grid-cols-3 lg:grid-cols-7 gap-5 bg-fuchsia-800/20 p-10 rounded-2xl border border-fuchsia-600/40">
              {skillsList.map((skill) => (
                <Skill key={skill.id} Icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>
        <div
          id="image-container"
          className="min-w-fit z-20 col-span-3 col-start-6  h-3/4 bg-gradient-to-bl from-fuchsia-600 to-rose-700 rounded-2xl overflow-hidden mt-10 brightness-90"
        >
          <img
            id="profile-picture"
            src="/images/profile.png"
            className=" float-right h-full backdrop-blur-lg drop-shadow-2xl drop-shadow-black/60"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
