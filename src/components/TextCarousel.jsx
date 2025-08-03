import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TextCarousel = ({ textTitle }) => {
  const carouselId = textTitle.replace(/ /g, "");
  useGSAP(() => {
    gsap.to(`#${carouselId}-carousel`, {
      xPercent: -50,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }, []);
  return (
    <div
      id={`${carouselId}-carousel`}
      className="neue_montrealbold text-7xl flex items-center  w-fit gap-4"
    >
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          {[...Array(8)].map((_, j) => (
            <React.Fragment key={j}>
              <p className="text-nowrap">{textTitle}</p>
              <div className="h-8 w-8 rounded-full bg-[#D6559F]"></div>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TextCarousel;
