"use client";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { panelAnimation, webAnimation, webProjectModal } from "../../animations";
import ProjectPreview from "./(components)/ProjectPreview";

function ProjectPage() {
  const iFrameControls = useAnimation();
  const panelControls = useAnimation();
  const modalControls = useAnimation();
  const [visible, setVisible] = useState(false);
  const [visibleTest, setVisibleTest] = useState(false);

  const [selectedTab, setSelectedTab] = useState("overview");

  const tabs = ["overview", "code"];

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

  const animateModal = async () => {
    setVisibleTest(!visibleTest)
    await modalControls.start({
      width:"100%",
    })
    await modalControls.start({
      height:500,
    })
  }
  return (
    <motion.div className="flex relative   w-screen px-64 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-24">
      {!visible && (
        <motion.div className="w-screen grid grid-rows-2  mt-12 text-black  ">
          <div className="  flex items-center w-full justify-between gap-4">
            <h1 className="text-6xl font-inter font-bold text-green-500">
              Paluba
            </h1>
            <button
              className="text-xl font-inter"
              onClick={() => animateModal()}
            >
              Next Project
            </button>
          </div>
          <hr className="my-6" />

          <div className="flex gap-2">
            {tabs.map((tab, index) => (
              <motion.div key={index} onClick={() => setSelectedTab(tab)}>
                {tab}
                {selectedTab === tab && (
                  <motion.div
                    layoutId="tab"
                    transition={{ ease: [0.06, 0.975, 0.195, 0.985] }}
                    className="w-full h-1 bg-black"
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </div>
        <AnimatePresence>
          {
            visibleTest &&
            <ProjectPreview animateModal={animateModal} />
            }
        </AnimatePresence>
        </motion.div>
      )}

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
