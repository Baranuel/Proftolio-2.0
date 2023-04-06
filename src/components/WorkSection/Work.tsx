"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

function Work() {
  return (
    <div className="min-h-screen w-screen bg-pink-100/10 px-64 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-24 gap-8">
      <h1 className="text-5xl py-2 font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-lightBlue via-lightPink to-darkPurple self-start">
        Projects
      </h1>
      <div className=" justify-between min-h-[75vh] h-full lg:justify-around flex lg:flex-col-reverse mt-12">
        <div className="w-1/2 flex h-full flex-wrap gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="w-1/2 flex flex-col bg-white h-auto rounded-xl border border-2-gray-200 p-10 ">
            <div className="flex items-center justify-between w-full">
            <h1 className="my-6 text-2xl">Title of the project</h1>
            <h3 className="p-1 font-semibold text-lightPink px-4 ">Type</h3>
            </div>
            <div className="flex gap-3">
                <span>1dsa</span>
                <span>dad</span>
                <span>dasd</span>
                <span>dad</span>
                <span>dasds</span>
                <span>dada</span>
                <span>dasd</span>
            </div>
            <hr className="my-3" />
            <div>
                <span className="font-bold text-md" >Description: </span>
                <p className="text-justify">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed euismod, nisl vel tincidunt lacinia,
                        nunc nisl aliquam mauris,
                </p>
            </div>
            <div className="my-3">
                <span className="font-bold text-md" >Goal: </span>
                <p className="text-justify">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed euismod, nisl vel tincidunt lacinia,
                        nunc nisl aliquam mauris,
                </p>
            </div>
            <div className="w-full h-1/3 rounded-md bg-black">img</div>

        </div>
      </div>
    </div>
  );
}

export default Work;
