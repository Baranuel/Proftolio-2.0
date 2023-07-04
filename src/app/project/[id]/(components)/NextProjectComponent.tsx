"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useMyContext } from "../../../../providers/VisitedProjectsProvider";
import Image from "next/image";

function NextProjectComponent({
  project,
  allProjects,
}: {
  project: any;
  allProjects: any;
}) {
  const { visitedProjects, setVisitedProjects } = useMyContext();

  useEffect(() => {
    setVisitedProjects((prev: any) => {
      const exists = prev.find((p: any) => p._id === project._id);
      return exists ? prev : [...prev, project];
    });
  }, [allProjects.length, project, setVisitedProjects, visitedProjects.length]);

  const projectIndex = allProjects.findIndex((p: any) => p._id === project._id);
  const lastIndex = allProjects.length - 1;
  const nextProjectIndex = projectIndex + 1;
  const nextProject =
    allProjects[projectIndex === lastIndex ? 0 : nextProjectIndex];
  console.log(nextProject);
  return (
    <Link className="text-lg font-inter" href={`project/${nextProject._id}`}>
      Next Project
    </Link>
  );
}

export default NextProjectComponent;
