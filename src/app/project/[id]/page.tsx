"use client";
import Image from "next/image";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { Suspense, useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import useSWR from "swr";
import ProjectPreview from "./(components)/ProjectPreview";
import {
  Skeleton,
  SkeletonText,
  SkeletonTextLong,
} from "./(components)/Skeleton";
import { RiArrowGoBackLine } from "react-icons/ri";
import colors from "../../colors";
import { ProjectDto } from "../../../types/ProjectDto";

function ProjectPage({ params }: any) {
  const getData = async (url: string) => {
    const res = await fetch(url);
    return res.json();
  };

  const { data: project, isLoading } = useSWR<ProjectDto>(
    `/api/projects/${params.id}`,
    getData
  );

  const [visibleTest, setVisibleTest] = useState(false);

  const animateModal = async () => {
    setVisibleTest(true);
  };

  const closeModal = () => {
    setVisibleTest(false);
  };

  return (
    <>
      <motion.div className="flex relative  w-screen px-64 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-24 md:py-4">
        <motion.div className="w-screen grid grid-rows-2  mt-12 text-black  ">
          <div className="  flex items-center w-full justify-between gap-4">
            {isLoading && <Skeleton />}
            <h1
              className={`text-6xl md:text-3xl font-inter font-bold ${
                colors.text[project?.color ?? "purple"]
              }`}
            >
              {project?.title}
            </h1>
            <button className="text-md font-inter">Next Project</button>
          </div>
          <hr className="my-6 md:my-3" />
          <motion.div>
            <a
              href="/#work"
              className={`flex gap-2 my-2 items-center text-xl ${
                colors.textHovered[project?.color ?? "purple"]
              } hover:cursor-pointer`}
            >
              <RiArrowGoBackLine />
              <h1>Back to projects</h1>
            </a>
            <motion.div className="relative h-[30vh] bg-gray-200 rounded-xl">
              <Image
                src={project?.thumbnail ?? ""}
                alt="thumbnail"
                fill
                className="rounded-xl object-cover"
              />
            </motion.div>

            <motion.ul className="flex my-4 gap-2">
              <motion.li className=" min-w-[120px] flex justify-center items-center gap-1 text-purple-800 hover:cursor-pointer outline outline-1 outline-purple-800 p-2 rounded-md">
                <AiFillGithub className="text-2xl" />
                <p className="text-md">Github</p>
              </motion.li>
              <motion.li
                onClick={() => animateModal()}
                className=" min-w-[120px] flex justify-center  items-center gap-1 bg-purple-800 text-white hover:cursor-pointer outline outline-1 outline-purple-800 p-2 rounded-md"
              >
                <BiShowAlt className="text-2xl" />
                <p className="text-md">See Live</p>
              </motion.li>
            </motion.ul>
            <motion.div className="flex gap-4 lg:flex-col justify-between">
              <motion.div className="mt-4">
                <h1
                  className={`text-xl  ${
                    colors.text[project?.color ?? "purple"]
                  }  font-semibold`}
                >
                  Deliverables
                </h1>
                {isLoading && (
                  <motion.div className="flex flex-col gap-2">
                    <SkeletonText />
                    <SkeletonText />
                    <SkeletonText />
                    <SkeletonText />
                  </motion.div>
                )}
                <ul className="mt-2">
                  {project?.deliverables.map((item: string, index: any) => (
                    <li key={index} className="text-[#333] text-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="  flex md:flex-col gap-6 justify-between">
                <motion.div className="mt-4">
                  <h1 className="text-xl text-[#333] font-semibold">
                    Overview
                  </h1>
                  {isLoading && (
                    <motion.div className="flex flex-col gap-2">
                      <SkeletonTextLong />
                    </motion.div>
                  )}

                  <p className="w-[75ch] md:w-full mt-2 text-justify">
                    {project?.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="mt-12"></motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {visibleTest && (
          <ProjectPreview
            closeModal={closeModal}
            liveDemo={project?.liveDemo ?? ""}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectPage;
