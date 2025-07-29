import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin, ScrollTrigger } from "gsap/all";
import ArrowDown from "../assets/arrow-down.svg?react";

gsap.registerPlugin(ScrambleTextPlugin);

const Hero = () => {
  useGSAP(() => {
    const timelineScramble = gsap.timeline({
      id: "text-scramble",
      repeat: -1,
      //yoyo: true,
      defaults: { ease: "none" },
      delay: 1,
    });

    timelineScramble
      .to("#scramble-text", {
        scrambleText: {
          text: "FRONTEND",
          chars: "UPPERCASE",
        },
        duration: 2,
        delay: 2,
      })
      .to("#scramble-text", {
        scrambleText: {
          text: "BACKEND",
          chars: "UPPERCASE",
        },
        duration: 2,
        delay: 2,
      })
      .to("#scramble-text", {
        scrambleText: {
          text: "WEB DEVELOPMENT",
          chars: "UPPERCASE",
        },
        duration: 2,
        delay: 2,
      });

    gsap.from("#desarrollos p", {
      scrollTrigger: "#desarrollos p",
      opacity: 0,
      yPercent: 100,
      stagger: 0.22,
    });
    gsap.from("#scramble-text", {
      opacity: 0,
      yPercent: 100,
      delay: 0.88,
    });
  });

  return (
    <section id="hero" className="relative z-10   h-screen w-full ">
      <img
        id="hero-image"
        src="/images/hero.jpg"
        className=" w-full md:h-[100%] brightness-[0.85] saturate-[1.2] absolute  md:object-cover object-center object-cover"
        alt=""
      />

      <div
        id="desarrollos"
        className="bg-amber-300 w-fit h-fit absolute div-center-absolute text-center"
      >
        <p className="desarollo-stroke neue_montrealbold text-9xl absolute -top-22 -translate-1/2  text-stroke">
          DESARROLLO
        </p>
        <p className="desarollo-stroke neue_montrealbold text-9xl absolute -top-15 -translate-1/2 text-stroke">
          DESARROLLO
        </p>
        <p className="desarollo-stroke neue_montrealbold text-9xl absolute -top-9 -translate-1/2 text-stroke">
          DESARROLLO
        </p>
      </div>

      <h2
        id="scramble-text"
        className="absolute text-5xl -translate-1/2 bottom-72 left-1/2 neue_montrealbold "
      >
        WEB DEVELOPMENT
      </h2>

      <ArrowDown
        id="arrow"
        width={100}
        className="absolute z-10 left-1/2 bottom-30 -translate-x-1/2 translate-y-1/2"
      />
    </section>
  );
};

export default Hero;
