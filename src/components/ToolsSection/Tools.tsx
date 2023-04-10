import Image from "next/image";
import React from "react";
import ToolsGrid from "./ToolsGrid";

function Tools() {
  return (
    <div className="min-h-screen w-screen justify-between lg:justify-around items-center flex lg:flex-col-reverse px-64 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-24 gap-8">
      <div className="w-1/3 lg:w-3/4 sm:w-full h-fit max-h-fit flex flex-col justify-between">
        <div>
          <h1 className="text-5xl max:text-7xl py-2 font-bold text-transparent lg:hidden bg-clip-text bg-gradient-to-r from-lightBlue via-lightPink to-darkPurple self-start">
            My Toolbelt
          </h1>
          <p className="text-xl max:text-2xl lg:text-lg mt-6 text-zinc-500 font-quicksand text-justify">
            These are tools that{" "}
            <span className="font-semibold text-lightPink">
              {" "}
              I use on a daily basis
            </span>{" "}
            as a web developer. From writing code and designing interfaces to
            testing functionality and tracking changes, each tool plays a
            crucial role in the development process.
          </p>
          <p className="text-xl lg:text-lg max:text-2xl mt-6 text-zinc-500 font-quicksand text-justify">
            As a{" "}
            <span className="font-semibold text-lightPink">
              {" "}
              Front-end developer
            </span>{" "}
            I am glad tools like this exist since they make building fullstack
            applications a breeze.
          </p>
        </div>
        <div className="mt-6 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center border-t pt-6 sm:pt-2">
          <h3 className="text-2xl font-bold text-zinc-700 self-start sm:self-center">
            Find out more
          </h3>
          <div className="flex gap-2">
            <a className="relative flex justify-center items-center cursor-pointer sm:mt-0 mt-2 px-4 py-3 sm:py-3 shadow-icon active:bg-gradient-to-br from-[#DEDDF7] to-white transition-shadow duration-200 rounded-lg border border-slate-100 bg-white font-quicksand">
              <Image
                src="/linkedin-in.svg"
                alt="linkedin"
                width={25}
                height={25}
              />
            </a>
            <a className="relative flex justify-center items-center cursor-pointer sm:mt-0 mt-2 px-4 py-3 sm:py-3 shadow-icon active:bg-gradient-to-br from-[#DEDDF7] to-white transition-shadow duration-200 rounded-lg border border-slate-100 bg-white font-quicksand">
              <Image src="/github.svg" alt="github" width={25} height={25} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 max:w-2/4 2xl:w-3/5 lg:w-3/4 md:w-full h-fit max:h-full flex justify-center items-center rounded-full relative z-50">
        <ToolsGrid />
        <div className="absolute w-full h-full blur-2xl bg-hazyPink z-1"></div>
      </div>
    </div>
  );
}

export default Tools;
