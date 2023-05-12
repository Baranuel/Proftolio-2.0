"use client";
import { motion, usePresence, useAnimate } from "framer-motion";
import React, { useCallback, useEffect } from "react";
import { faTimes, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectPreview({animateModal}: {animateModal: () => void}) {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  const [scopeOptions, animateOptions] = useAnimate();
  const [isFullScreen, setIsFullScreen] = React.useState(false);

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
      opacity:1
    })
  }, [animate, animateOptions, scope, scopeOptions]);



  const isNotPresentAnimation = useCallback(async () => {

      animateOptions(scopeOptions.current, {
      opacity:0
    })
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

    <motion.div
      initial={{
          position: "absolute",
          left: "50%",
          top: "30%",
          translateX: "-50%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          width:"90vw",
          height:"80vh",
        }}
        animate={isFullScreen ? {width:"100vw",height:"100vh", top:0, transition: { duration: 0.35, ease: [0.06, 0.975, 0.195, 0.985] },
        
    } : {}}
        >
          <motion.div ref={scopeOptions} initial={{opacity:0}} className="absolute top-0 left-0 h-12 p-2 w-full flex flex-row-reverse gap-6 items-center bg-red-200 z-50">
             <FontAwesomeIcon icon={faTimes} onClick={() => animateModal()} className=" text-black text-2xl " />
             <FontAwesomeIcon icon={faExpand} onClick={() => setIsFullScreen(!isFullScreen)} className=" text-black text-xl " />

          </motion.div>

      <motion.iframe
        ref={scope}
        initial={{ width: 0, height: 0, }}
        className={`outline outline-1 outline-purple-200 ${!isFullScreen ? "rounded-md" :""}`}
        src="https://paluba.vercel.app/"
        width="100%"
        height="100%"
        title="project preview"
        ></motion.iframe>
    </motion.div>
        </>
  );
}

export default ProjectPreview;
