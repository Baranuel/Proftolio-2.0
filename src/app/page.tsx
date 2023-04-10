import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Hero from "../components/HeroSection/Hero";
import Tools from "../components/ToolsSection/Tools";
import Work from "@/components/WorkSection/Work";
import About from "../components/AboutSection/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Tools />
      <Work />
      <About />
    </>
  );
}
