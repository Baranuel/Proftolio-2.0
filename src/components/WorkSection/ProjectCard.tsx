"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import colors from "@/app/colors";
import { ProjectDto } from "../../types/ProjectDto";
interface Props {
  color: string;
  variants: any;
  project: ProjectDto;
}
function ProjectCard({ color, variants, project }: Props) {
  const [active, setActive] = React.useState(false);
  return (
    <motion.div
      variants={variants}
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`flex flex-col justify-between hover:cursor-pointer p-2 max:h-[320px] max:w-[550px] min-w-[350px] h-[300px] lg:h-[275px] md:h-[250px] w-[calc(33%-15px)] xl:w-[450px]   rounded-lg  ${
        active
          ? `   outline outline-2 ${colors.outline[color]}  } `
          : " outline outline-1 outline-purple-200 "
      } relative shadow-md bg-white transition-outline
          `}
    >
      <Link
        href={`project/${project._id}`}
        className="self-center p-8  lg:p-6 h-full w-full bg-transparent  flex flex-col relative z-50"
      >
        <div className="flex items-center justify-between">
          <h1
            className={`z-50 ${colors.text[color]} font-inter text-3xl max:text-4xl md:text-3xl font-black transition-all duration-100 `}
          >
            {project.title}
          </h1>
          <span
            className={`py-1 outline outline-1 ${colors.outline[color]} ${colors.bg[color]} ${colors.text[color]} rounded-xl px-4 max:text-lg text-sm md:text-xs`}
          >
            {project.type}
          </span>
        </div>
        <div className="flex flex-wrap gap-1 mt-3 md:mt-1 font-light max:text-xl sm:text-sm text-md  text-slate-400">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <hr className="my-2" />
        <div className="flex flex-col h-auto w-full grow gap-1 justify-center   ">
          <div className=" self-right">
            <span className="font-bold font-inter max:text-xl">Overview</span>
            <p className="text-md w-full max:text-xl">{project.overview}</p>
          </div>
        </div>
      </Link>
      {/* <div className="flex gap-2 px-8 md:p-4 w-full text-md items-center">
        <Link href="#" className={`flex items-center text-white`}>
          <span className={`${colors.text[color]}`}>Live Demo</span>
        </Link>
      </div> */}
    </motion.div>
  );
}

export default ProjectCard;
