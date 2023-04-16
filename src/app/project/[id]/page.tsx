"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { panelAnimation, webAnimation } from "../../animations";

function ProjectPage() {
  const iFrameControls = useAnimation();
  const panelControls = useAnimation();
  const [visible, setVisible] = useState(false);

  const handleShowWeb = () => {
    if (!visible) {
      setVisible(true);
      iFrameControls.start("show");
      panelControls.start("show");
    } else {
      setVisible(false);
      panelControls.start("hidden");
      iFrameControls.start("hidden");
    }
  };
  return (
    <motion.div className="flex relative  max-h-screen w-screen px-64 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-24">
      <motion.div className="w-screen mt-12 text-black  ">
        {!visible && (
          <h1
            className="text-6xl font-inter font-bold"
            onClick={() => handleShowWeb()}
          >
            Project Page
          </h1>
        )}
      </motion.div>

      <section
        className={
          "flex overflow-hidden md:flex-col-reverse absolute top-0 left-0 w-full h-screen z-50 " +
          `${!visible && "pointer-events-none"}`
        }
      >
        <motion.div
          variants={panelAnimation}
          initial={{ x: "-100%" }}
          animate={iFrameControls}
          className=" h-full md:h-[100px] min-w-[100px] bg-red-200"
        >
          <h1 onClick={() => handleShowWeb()}>hello</h1>
        </motion.div>
        {
          <motion.div
            variants={webAnimation}
            initial={{ x: "100%" }}
            animate={iFrameControls}
            className=" h-full w-full"
          >
            <iframe
              src="https://particle-clock.vercel.app/"
              width="100%"
              height="100%"
            ></iframe>
          </motion.div>
        }
      </section>
    </motion.div>
  );
}

export default ProjectPage;
