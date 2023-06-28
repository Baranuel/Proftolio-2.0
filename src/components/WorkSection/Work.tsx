"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { appear, appearWork, showProject } from "../../app/animations";

import ProjectsList from "./ProjectsList";
import { ProjectDto } from "../../types/ProjectDto";

function Work({ projects }: { projects: ProjectDto[] }) {


  return (
    <div
      id="work"
      className="min-h-fit w-screen flex  flex-col bg-white px-48 2xl:px-24 xl:px-12 lg:px-12 sm:px-4 py-24 "
    >
      <h1 className="text-5xl max:text-7xl lg:text-4xl lg:self-center py-2 font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-lightBlue via-lightPink to-darkPurple self-start">
        My Projects
      </h1>
      <motion.div
        variants={appear}
        className="w-full flex h-full xl:justify-center flex-wrap gap-4 mt-12"
      >
        <ProjectsList projects={projects} />
      </motion.div>
    </div>
  );
}

export default Work;
