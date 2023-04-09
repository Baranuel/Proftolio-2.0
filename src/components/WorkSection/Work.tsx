"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";

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
    hidden: { opacity: 1, x: -100, scale: 0.7 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        ease: "easeIn",
      },
    },
  };
  const isMobile = window.innerWidth ?? 0 < 768;

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: isMobile ? 0.25 : 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div className="min-h-screen w-screen flex flex-col bg-white px-64 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-24 gap-8">
      <h1 className="text-5xl lg:text-4xl lg:self-center py-2 font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-lightBlue via-lightPink to-darkPurple self-start">
        My Projects
      </h1>
      <div className=" justify-between min-h-[75vh] h-full lg:justify-around flex lg:flex-col-reverse mt-12">
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
