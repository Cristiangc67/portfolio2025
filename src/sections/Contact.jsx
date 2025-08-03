import React from "react";
import Linkedin from "../assets/linkedin.svg?react";
import Github from "../assets/github.svg?react";
import Email from "../assets/mail.svg?react";
import TextCarousel from "../components/TextCarousel";

const Contact = () => {
  return (
    <section id="contacto" className="w-full h-screen  py-16  overflow-hidden">
      {/* bg-gradient-to-b from-black via-fuchsia-600/20 to-rose-700/20 */}
      <TextCarousel textTitle={"CONTACTO"} />
      <div className="w-1/2 h-5/6 grid grid-cols-2 mt-10 gap-10 justify-center mx-auto ">
        <div className=" col-span-1 bg-[url(/images/contact-vertical.png)] bg-cover border border-fuchsia-600/40 rounded-2xl "></div>
        <div className=" col-span-1  grid grid-rows-4 gap-6">
          <div className="row-span-3 bg-fuchsia-800/20  grid grid-rows-4 gap-5 py-10 px-5 rounded-2xl border border-fuchsia-600/40">
            <p className="row-span-1 neue_montrealsemibold text-3xl">
              Conecta Conmigo
            </p>
            <a
              href="https://www.linkedin.com/in/cgc-dev/"
              target="_blank"
              className="hover:scale-105 transition-all duration-300 hover:shadow-[0px_0px_53px_12px_rgba(147,_51,_234,_0.5)] bg-pink-900/20  row-span-1 flex px-4 gap-4 items-center rounded-xl"
            >
              <div className="h-15 w-15 bg-blue-950/80 p-3 rounded-lg">
                <Linkedin className="h-full w-full" />
              </div>
              <div className="flex flex-col">
                <p className="neue_montrealsemibold">LinkedIn</p>
                <p className="">Conectemos Profesionalmente</p>
              </div>
            </a>
            <a
              href="https://github.com/Cristiangc67"
              target="_blank"
              className="hover:scale-105 transition-all duration-300 hover:shadow-[0px_0px_53px_12px_rgba(147,_51,_234,_0.5)] bg-pink-900/20 row-span-1 flex px-4 gap-4 items-center  rounded-xl"
            >
              <div className="h-15 w-15 bg-gray-700/80 p-3 rounded-lg">
                <Github className="h-full w-full" />
              </div>
              <div className="flex flex-col">
                <p className="neue_montrealsemibold">Github</p>
                <p className="">Explora mi codigo</p>
              </div>
            </a>
            <div className="row-span-1 flex px-4 gap-4 items-center bg-pink-900/20 rounded-xl">
              <div className="h-15 w-15 bg-pink-950/80 p-3 rounded-lg">
                <Email className="h-full w-full" />
              </div>
              <div className="flex flex-col">
                <p className="neue_montrealsemibold">Email</p>
                <p className="">cristiangutierrezcruz67@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="row-span-1 bg-gradient-to-bl from-fuchsia-600 to-rose-700 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
{
  /* <div className="w-1/2  h-[50%] grid grid-cols-4 gap-10 ">
          <div className="col-span-2 bg-pink-600/10 backdrop-blur-lg rounded-2xl border border-rose-700/40"></div>
          <div className="col-span-2 grid grid-rows-3 gap-10">
            <div className="row-span-2 grid grid-rows-10 py-10 gap-5 bg-pink-600/10 backdrop-blur-lg rounded-2xl px-10 border border-rose-700/40">
              <p className="text-2xl row-span-1">Conecta conmigo</p>
              <div className="row-span-3 bg-pink-700/30 rounded-xl">asd</div>
              <div className="row-span-3 bg-pink-700/30 rounded-xl">dsaa</div>
              <div className="row-span-3 bg-pink-700/30 rounded-xl">asd</div>
            </div>
            <div className="row-span-1 bg-pink-600/10 backdrop-blur-lg rounded-2xl border border-rose-700/40"></div>
          </div>
        </div> */
}
