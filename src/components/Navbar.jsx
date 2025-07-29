import React, { useRef } from "react";
import { navLinks } from "../../constants/constants";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projectsList } from "../../constants/constants";

const Navbar = ({ smoother }) => {
  const proyectosRef = useRef(null);
  useGSAP(() => {
    const createAnimation = () => {
      if (proyectosRef.current) proyectosRef.current.kill();
      proyectosRef.current = ScrollTrigger.create({
        trigger: "#proyectos",
        duration: 0.5,
        start: "top top-=-80",
        end: `bottom-=-${projectsList.length * 1400} top-=-80`,

        toggleClass: {
          targets: "#logo",
          className: "text-pink-500",
        },
        markers: true,
      });
    };

    createAnimation();

    const handleResize = () => {
      ScrollTrigger.refresh(); // actualiza layout y vuelve a llamar `end`
      //requestAnimationFrame(createAnimation); // recreate animación
      createAnimation();
    };
    window.addEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    const target = document.querySelector(id);
    if (target && smoother?.current) {
      smoother.current.scrollTo(target, true, "top");
    }
  };

  return (
    <nav id="navbar" className="fixed  z-50 w-full  ">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">
        <a href="#">
          <p id="logo" className="">
            <span className="urbanist-semibold text-3xl ">CGC</span>{" "}
            <span className="zilla-slab-highlight-bold text-3xl">Dev</span>
          </p>
        </a>
        <div className="flex lg:gap-12 gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(`#${link.id}`)}
              className=" bg-[#D6559F] px-3 py-2 rounded-2xl cursor-pointer text-nowrap md:text-base text-sm"
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
