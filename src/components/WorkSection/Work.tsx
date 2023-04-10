"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";
import { appear, showProject } from "../../app/animations";

function Work() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div className="min-h-fit w-screen flex flex-col bg-white px-64 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-24 gap-8">
      <h1 className="text-5xl max:text-7xl lg:text-4xl lg:self-center py-2 font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-lightBlue via-lightPink to-darkPurple self-start">
        My Projects
      </h1>
      <div className=" justify-between min-h-[50vh] h-full lg:justify-around flex lg:flex-col-reverse mt-12">
        <motion.div
          ref={ref}
          variants={appear}
          initial="hidden"
          animate={controls}
          className="w-full flex h-full lg:justify-center flex-wrap gap-4"
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
