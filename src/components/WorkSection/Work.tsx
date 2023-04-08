"use client";
import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "./ProjectCard";

function Work() {
  const appear = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const showProject = {
    hidden: { opacity: 0, x: "100%" },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen w-screen bg-white px-64 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-24 gap-8">
      <h1 className="text-5xl py-2 font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-lightBlue via-lightPink to-darkPurple self-start">
        Projects
      </h1>
      <div className=" justify-between min-h-[75vh] h-full lg:justify-around flex lg:flex-col-reverse mt-12">
        <motion.div
          variants={appear}
          initial="hidden"
          animate="show"
          className="w-full flex h-full justify-center flex-wrap gap-4"
        >
          <ProjectCard variants={showProject} color="green" />
          <ProjectCard variants={showProject} color="red" />
          <ProjectCard variants={showProject} color="purple" />
          <ProjectCard variants={showProject} color="teal" />
          <ProjectCard variants={showProject} color="amber" />
          <ProjectCard variants={showProject} color="slate" />
        </motion.div>
      </div>
    </div>
  );
}

export default Work;
