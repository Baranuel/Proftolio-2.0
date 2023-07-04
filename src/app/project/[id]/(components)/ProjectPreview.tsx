"use client";
import {
  motion,
  usePresence,
  useAnimate,
  useAnimationControls,
  AnimatePresence,
} from "framer-motion";
import React, { useCallback, useEffect } from "react";
import colors from "../../../colors";
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
  const [isReady, setIsReady] = React.useState(false);
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
    setIsReady(true);
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
      transition: { duration: 0.05, ease: [0.06, 0.975, 0.195, 0.985] },
    });
    await animate(scope.current, {
      opacity: 0,
    });
    !isPresent && safeToRemove();
    setIsReady(false);
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
              className={` outline outline-1 outline-purple-200 rounded-t-md  p-2 w-full flex flex-row-reverse gap-4 items-center ${
                colors.bgFull[project.color]
              } `}
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
            {isReady && !loaded && (
              <motion.div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  text-5xl  ">
                <svg
                  aria-hidden="true"
                  className={`w-24 h-24 mr-2 text-transparent animate-spin dark:text-gray-600 ${
                    colors.fill[project.color]
                  }`}
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </motion.div>
            )}
            <motion.iframe
              style={{ width: "100%", height: "100%" }}
              key={project.liveDemo}
              ref={scope}
              initial={{ width: 0, height: 0 }}
              className={`outline bg-black outline-1 outline-purple-200 ${
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
