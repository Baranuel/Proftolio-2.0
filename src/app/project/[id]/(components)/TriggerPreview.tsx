"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import colors from "../../../colors";
import ProjectPreview from "./ProjectPreview";

function TriggerPreview({ project }: any) {
  const [showProject, setShowProject] = React.useState(false);

  return (
    <>
      <motion.ul className="flex my-4 gap-2">
        <motion.li
          className={` min-w-[120px] flex justify-center items-center gap-1 ${
            colors.text[project?.color ?? ""]
          } hover:cursor-pointer outline outline-1 ${
            colors.outline[project?.color ?? ""]
          } p-2 rounded-md`}
        >
          <AiFillGithub className="text-2xl" />
          <p className="text-md">Github</p>
        </motion.li>
        <motion.li
          onClick={() => setShowProject(true)}
          className={` min-w-[120px] flex justify-center  items-center gap-1 ${
            colors.bgFull[project?.color ?? ""]
          } text-white hover:cursor-pointer outline outline-1 ${
            colors.outline[project?.color ?? ""]
          } p-2 rounded-md`}
        >
          <BiShowAlt className="text-2xl" />
          <p className="text-md">See Live</p>
        </motion.li>
      </motion.ul>
      <AnimatePresence>
        {showProject && (
          <ProjectPreview project={project} setShowProject={setShowProject} />
        )}
      </AnimatePresence>
    </>
  );
}

export default TriggerPreview;
