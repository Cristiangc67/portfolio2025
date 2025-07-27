import React from "react";
import { navLinks } from "../../constants/constants";

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">
        <a href="#">
          <p>
            <span className="urbanist-semibold text-3xl ">CGC</span>{" "}
            <span className="zilla-slab-highlight-bold text-3xl">Dev</span>
          </p>
        </a>
        <div className="flex lg:gap-12 gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className=" bg-[#D6559F] px-3 py-2 rounded-2xl cursor-pointer text-nowrap md:text-base text-sm"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
