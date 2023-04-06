"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

function Work() {
  return (
    <div className="min-h-screen w-screen bg-white px-64 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-24 gap-8">
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
        <div className="w-1/2 bg-white h-auto rounded-xl border border-2-gray-200 ">
            projects
        </div>
      </div>
    </div>
  );
}

export default Work;
