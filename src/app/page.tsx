import Hero from "../components/HeroSection/Hero";
import Tools from "../components/ToolsSection/Tools";
import Work from "@/components/WorkSection/Work";
import About from "../components/AboutSection/About";

const getProjects = async (url: string) => {
  const res = await fetch(url, { cache: "no-store" });
  const projects = await res.json();
  return projects;
};

export default async function Home() {
  const projects = await getProjects("http://localhost:3000/api/projects");

  return (
    <>
      <Hero />
      <Tools />
      <Work projects={projects} />
      <About />
    </>
  );
}
