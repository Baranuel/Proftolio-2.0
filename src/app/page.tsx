import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Hero from "../components/HeroSection/Hero";
import Tools from "../components/ToolsSection/Tools";

export default function Home() {
  return (
    <>
      <Hero />
      <Tools />
    </>
  );
}
