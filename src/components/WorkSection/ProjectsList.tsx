import React from "react";
import useSWR from "swr";
import { showProject } from "../../app/animations";
import { ProjectDto } from "../../types/ProjectDto";
import ProjectCard from "./ProjectCard";

function ProjectsList() {
  const getProjects = async (url: string) => {
    const res = await fetch(url, { next: { revalidate: 10 } });
    const projects = await res.json();
    return projects;
  };

  const { data: projects } = useSWR<ProjectDto[]>("/api/projects", getProjects);

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
