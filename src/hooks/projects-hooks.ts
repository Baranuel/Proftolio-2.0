import { useState, useEffect } from "react";
import { ProjectDto } from "../types/ProjectDto";

export const useGetProject = (id: string) => {
  const [project, setProject] = useState<ProjectDto>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        const data = await res.json();
        setProject(data);
      } catch (error) {
        // Handle error if fetch or parsing fails
        console.error("Error fetching project:", error);
      }
    };

    fetchData();
  }, [id]);

  return project;
};
