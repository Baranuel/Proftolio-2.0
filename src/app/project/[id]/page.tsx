"use client";
import Image from "next/image"
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import {AiFillGithub} from "react-icons/ai"
import {BiShowAlt} from "react-icons/bi"

import ProjectPreview from "./(components)/ProjectPreview";

function ProjectPage() {
    const [visibleTest, setVisibleTest] = useState(false);


  const animateModal = async () => {
    setVisibleTest(!visibleTest);
  };


  const deliverables =["Great UX", "Comfortable Mobile browsing", "Updatable CMS", "Increase ease of navigation", "Retain Customers on page longer"]

  return (
    <>
      <motion.div className="flex relative  w-screen px-64 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-24 md:py-4">
          <motion.div className="w-screen grid grid-rows-2  mt-12 text-black  ">
            <div className="  flex items-center w-full justify-between gap-4">
              <h1 className="text-6xl md:text-3xl font-inter font-bold text-green-500">
                Paluba
              </h1>
              <button
                className="text-md font-inter"
              >
                Next Project
              </button>
            </div>
            <hr className="my-6" />
            <motion.div>

           <motion.div className="relative h-[25vh] bg-red-200 rounded-xl">
            <Image src='/grains.jpg' alt="thumbnail" fill className="rounded-xl"/>
           </motion.div>

           <motion.ul className="flex my-4 gap-2">
            <motion.li className=" min-w-[120px] flex justify-center items-center gap-1 text-purple-800 hover:cursor-pointer outline outline-1 outline-purple-800 p-2 rounded-md">
            <AiFillGithub  className="text-2xl"/>
            <p className="text-md">Github</p>
            </motion.li>
            <motion.li
                onClick={() => animateModal()}               
                 className=" min-w-[120px] flex justify-center  items-center gap-1 bg-purple-800 text-white hover:cursor-pointer outline outline-1 outline-purple-800 p-2 rounded-md">
            <BiShowAlt  className="text-2xl"/>
            <p className="text-md">See Live</p>
            </motion.li>
          </motion.ul>
        <motion.div className="flex gap-4 lg:flex-col justify-between">

          <motion.div className="mt-4">
              <h1 className="text-xl text-green-500 font-semibold">Deliverables</h1>
              <ul className="mt-2">{deliverables.map((item, index) => <li key={index} className="text-[#333] text-bold">{item} </li>)}</ul>
            </motion.div>

            <motion.div className="  flex md:flex-col gap-6 justify-between">
            <motion.div className="mt-4">
              <h1 className="text-xl text-[#333] font-semibold">Overview</h1>
              <p className="w-[75ch] md:w-full mt-2 text-justify">
                {`In my recent project, I developed a dynamic and interactive eCommerce website using React.js, showcasing its powerful capabilities for building user interfaces. With seamless navigation and an intuitive layout, the website provided users an engaging shopping experience. The project also entailed incorporating responsive design principles, ensuring the site's usability across a wide range of devices and screen sizes.`}
              </p>
            </motion.div>

        </motion.div>
           
            </motion.div>
          </motion.div>
          <motion.div className="mt-12">
         
       </motion.div>  
 
      </motion.div>


    

      </motion.div>
      
      <AnimatePresence>
        {visibleTest && <ProjectPreview animateModal={animateModal} />}
      </AnimatePresence>
    </>
  );
}

export default ProjectPage;
