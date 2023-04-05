import Image from "next/image";
import React from "react";

import nameTag from "../../../public/samuel-baran.svg";

function Hero() {
  return (
    <div
      className={`h-screen w-screen flex flex-col items-center p-8 justify-center bg-gradient-to-tr from-white via-slate-100 to-slate-200`}
    >
      <div className="relative w-2/3 md:w-full h-[75px] lg:h-[10vw]">
        <Image src={nameTag} alt="Samuel Baran" fill priority />
      </div>
      <p className="mt-6 sm:mt-6 text-left  text-2xl lg:text-lg sm:text-md sm:text-center font-quicksand text-zinc-500">
        Creative developer with passion for eye-catching products
      </p>
      <button className=" mt-8  px-6 py-4 sm:py-3 shadow-button active:shadow-button-pressed active:bg-gradient-to-br from-[#DEDDF7] to-white transition-shadow duration-200 rounded-lg min-w-[220px] w-[250px] sm:w-[200px] border border-slate-100 bg-slate-100 font-quicksand">
        <p className="text-inner text-2xl sm:text-lg text-lightPink font-medium">
          See projects
        </p>
      </button>
    </div>
  );
}

export default Hero;
