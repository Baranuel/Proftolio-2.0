import React, { useLayoutEffect } from "react";
import useSWR from "swr";
import { showProject, item, appear, appearWork } from "../../app/animations";
import { ProjectDto } from "../../types/ProjectDto";
import ProjectCard from "./ProjectCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ProjectsList({ projects }: { projects: ProjectDto[] }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  useLayoutEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.ul
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={appearWork}
      className="w-full h-full flex flex-wrap gap-4 items-center "
    >
      {projects?.map((project) => (
        <ProjectCard
          key={project._id + "project"}
          variants={item}
          project={project}
          color={project.color}
        />
      ))}
    </motion.ul>
  );
}

export default ProjectsList;
