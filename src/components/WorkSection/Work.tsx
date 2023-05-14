"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";
import { appear, appearWork, showProject } from "../../app/animations";
import colors from "../../app/colors";
import { ProjectDto } from "../../types/ProjectDto";
import useSWR from "swr";

const getProjects = async (url: string) => {
  const res = await fetch("/api/projects", { next: { revalidate: 10 } });
  const projects = await res.json();
  return projects;
};

function Work() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const { data: projects } = useSWR<ProjectDto[]>("/api/projects", getProjects);

  const renderProjects = () => {
    if (!projects) return "...loading";

    return projects.map((project) => (
      <ProjectCard
        key={project._id + "project"}
        variants={showProject}
        project={project}
        color={project.color}
      />
    ));
  };

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      id="work"
      className="min-h-fit w-screen flex  flex-col bg-white px-48 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-24 "
    >
      <h1 className="text-5xl max:text-7xl lg:text-4xl lg:self-center py-2 font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-lightBlue via-lightPink to-darkPurple self-start">
        My Projects
      </h1>
      <motion.div
        ref={ref}
        variants={appear}
        initial="hidden"
        animate={controls}
        className="w-full flex h-full xl:justify-center flex-wrap gap-4 mt-12"
      >
        {renderProjects()}
      </motion.div>
    </div>
  );
}

export default Work;
