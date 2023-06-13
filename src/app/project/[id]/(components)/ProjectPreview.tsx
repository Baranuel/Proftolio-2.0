"use client";
import {
  motion,
  usePresence,
  useAnimate,
  useAnimationControls,
  AnimatePresence,
} from "framer-motion";
import React, { useCallback, useEffect } from "react";
import { faExpand, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectPreview({
  project,
  setShowProject,
}: {
  project: any;
  setShowProject: any;
}) {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  const [scopeOptions, animateOptions] = useAnimate();
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const controls = useAnimationControls();
  const resizeFullScreen = useCallback(() => {
    if (!isPresent) return;
    setIsFullScreen(!isFullScreen);
    controls.start({
      opacity: 1,
      transition: { duration: 0.35, ease: [0.06, 0.975, 0.195, 0.985] },
    });
  }, [controls, isFullScreen, isPresent]);
  const [loaded, setLoaded] = React.useState(false);

  const isPresentAnimation = useCallback(async () => {
    await animate(scope.current, {
      display: "block",
      width: "100%",

      transition: { duration: 0.35, ease: [0.06, 0.975, 0.195, 0.985] },
    });
    await animate(scope.current, {
      height: "100%",
      transition: { duration: 0.35, ease: [0.06, 0.975, 0.195, 0.985] },
    });
    await animateOptions(scopeOptions.current, {
      opacity: 1,
    });
  }, [animate, animateOptions, scope, scopeOptions]);

  const isNotPresentAnimation = useCallback(async () => {
    animateOptions(scopeOptions.current, {
      opacity: 0,
    });
    await animate(scope.current, {
      height: 0,
      transition: { duration: 0.35, ease: [0.06, 0.975, 0.195, 0.985] },
    });
    await animate(scope.current, {
      width: 0,
      transition: { duration: 0.35, ease: [0.06, 0.975, 0.195, 0.985] },
    });
    await animate(scope.current, {
      display: "none",
    });
    !isPresent && safeToRemove();
  }, [animate, animateOptions, isPresent, safeToRemove, scope, scopeOptions]);

  useEffect(() => {
    if (isPresent) {
      isPresentAnimation();
    } else {
      isNotPresentAnimation();
    }
  }, [isPresent, isPresentAnimation, isNotPresentAnimation, safeToRemove]);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{
            position: "fixed",
            left: "50%",
            opacity: 0,
            top: "50%",
            translateX: "-50%",
            translateY: "-50%",
            width: "100vw",
            height: "100vh",
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.35, ease: [0.06, 0.975, 0.195, 0.985] },
          }}
          className=" z-50 w-screen h-screen bg-[#333]/50"
        >
          <motion.div
            className="z-50"
            initial={{
              position: "fixed",
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              width: "95vw",
              height: "85vh",
              zIndex: 99,
            }}
            animate={
              isFullScreen
                ? {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    transition: {
                      duration: 0.35,
                      ease: [0.06, 0.975, 0.195, 0.985],
                    },
                  }
                : {}
            }
          >
            <motion.div
              ref={scopeOptions}
              initial={{ opacity: 0 }}
              className=" outline outline-1 outline-purple-200 rounded-t-md  p-2 w-full flex flex-row-reverse gap-4 items-center bg-red-200 "
            >
              <FontAwesomeIcon
                icon={faClose}
                onClick={() => setShowProject(false)}
                className=" text-black text-2xl hover:cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faExpand}
                onClick={() => resizeFullScreen()}
                className=" text-black text-xl  hover:cursor-pointer "
              />
            </motion.div>

            <motion.iframe
              key={project.liveDemo}
              ref={scope}
              initial={{ width: 0, height: 0 }}
              className={`outline ${
                !loaded && "bg-black animate-pulse"
              } outline-1 outline-purple-200 ${
                !isFullScreen ? "rounded-b-md" : ""
              }`}
              src={project.liveDemo}
              width="100%"
              height="100%"
              title="project preview"
              loading="eager"
              onLoad={() => setLoaded(true)}
            ></motion.iframe>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default ProjectPreview;
