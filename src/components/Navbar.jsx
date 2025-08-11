import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { navLinks, projectsList } from "../../constants/constants.js";
import { useMediaQuery } from "react-responsive";

import XClose from "../assets/close.svg?react";
import Menu from "../assets/menu.svg?react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ smoother }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const scrollTriggerRef = useRef(null);

  useGSAP(() => {
    const createAnimation = () => {
      if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: "#proyectos",
        start: "top top-=-80",
        end: `bottom-=-${projectsList.length * 1400} top-=-80`,
        toggleClass: {
          targets: "#logo",
          className: "text-pink-500",
        },
      });
    };

    createAnimation();

    const handleResize = () => {
      ScrollTrigger.refresh();
      createAnimation();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    const target = document.querySelector(id);
    if (target && smoother?.current) {
      smoother.current.scrollTo(target, true, "top");
    }
  };

  return (
    <nav id="navbar" className="fixed z-50 w-full">
      <div className="flex flex-row justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">
        <a href="#">
          <p id="logo" className="">
            <span className="urbanist-semibold text-3xl">CGC</span>{" "}
            <span className="zilla-slab-highlight-bold text-3xl">Dev</span>
          </p>
        </a>
        <button
          onClick={() => setOpenMenu(true)}
          className="border block lg:hidden  p-0.5 hover:bg-white/20 border-white/40 bg-pink-800/50 rounded-lg cursor-pointer"
        >
          <Menu className="w-10 h-10 stroke-pink-600 " />
        </button>

        {isMobile && openMenu ? (
          <div className="w-screen h-screen absolute z-50 left-0 top-0 bg-black/50 block md:hidden">
            <div
              onClick={() => setOpenMenu(false)}
              className="w-full h-full bg-transparent"
            ></div>

            <div className="backdrop-blur-3xl w-1/2 transition-all duration-500 bg-gradient-to-b from-black to-pink-900/90 border-s border-white/20 h-full absolute inset-y-0 right-0 flex flex-col">
              <button
                onClick={() => setOpenMenu(false)}
                className="border w-fit ms-2 mt-2 p-0.5 hover:bg-white/20 border-white/40 bg-pink-800/50 rounded-lg cursor-pointer"
              >
                <XClose className="w-10 h-10   " />
              </button>

              <div className="h-full flex flex-col justify-start items-start px-9 lg:px-0 gap-10 lg:items-center mt-5 w-full roboto-400">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      scrollToSection(`#${link.id}`);
                      setOpenMenu(false);
                    }}
                    className=" px-3 py-2 text-start rounded-2xl cursor-pointer text-nowrap md:text-base text-xl"
                  >
                    {link.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className=" hidden lg:flex lg:gap-12 gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(`#${link.id}`)}
                className="bg-pink-500 px-3 py-2 rounded-2xl cursor-pointer text-nowrap md:text-base text-sm"
              >
                {link.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
