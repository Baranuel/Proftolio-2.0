import { BASE_URL } from "./helpers";

export const getProjects = async () => {
  const res = await fetch(BASE_URL + "/api/projects", {
    next: { revalidate: 60 },
  });
  const projects = await res.json();
  return projects;
};
