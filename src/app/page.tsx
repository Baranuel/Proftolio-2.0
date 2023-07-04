import Hero from "../components/HeroSection/Hero";
import Tools from "../components/ToolsSection/Tools";
import Work from "@/components/WorkSection/Work";
import About from "../components/AboutSection/About";
import { BASE_URL } from "../helpers";
import { getProjects } from "../functions";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Hero />
      <Tools />
      <Work projects={projects} />
      <About />
    </>
  );
}
