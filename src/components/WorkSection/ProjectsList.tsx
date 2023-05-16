import React from "react";
import useSWR from "swr";
import { showProject } from "../../app/animations";
import { ProjectDto } from "../../types/ProjectDto";
import ProjectCard from "./ProjectCard";

function ProjectsList({ projects }: { projects: ProjectDto[] }) {
  return (
    <>
      {projects?.map((project) => (
        <ProjectCard
          key={project._id + "project"}
          variants={showProject}
          project={project}
          color={project.color}
        />
      ))}
    </>
  );
}

export default ProjectsList;
