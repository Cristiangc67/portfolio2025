import React from "react";
import IconReact from "../assets/skills/react.svg?react";
import IconMongo from "../assets/skills/MongoDB.svg?react";

const Skill = ({ Icon }) => {
  return (
    <div className="skill relative w-26 h-26 group ">
      <div className="w-full h-full p-3 z-20 bg-neutral-900   rounded-2xl border shadow-transparent  group-hover:scale-105  shadow-xl border-gray-400/10 duration-300  transition-all relative ">
        <Icon className="w-20 h-20" />
      </div>
      <div className="z-0 top-1/2 left-1/2 blur-sm -translate-1/2 bg-gradient-to-bl from-fuchsia-600 absolute group-hover:scale-120 to-rose-700 w-24 h-24 rounded-2xl duration-300  transition-all"></div>
    </div>
  );
};

export default Skill;
