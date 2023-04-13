"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, animate, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const item = {
  hidden: { opacity: 0, x: "100%" },
  show: { opacity: 1, x: 0 },
};

const appear = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

function ToolsGrid() {
  const jsIconRef = useRef<HTMLDivElement>(null!);
  const tsIconRef = useRef<HTMLDivElement>(null!);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const controls = useAnimation();
  const tsControls = useAnimation();
  const jsControls = useAnimation();

  const typescriptAnimation = useCallback(async () => {
    await controls.start("show");
    jsControls.start({ x: "0%" }, { delay: 0.05 });
    await tsControls.start({ x: "0%" });
    tsControls.start({ x: "-50%" });
    await tsControls.start({
      x: "25%",
      transition: { ease: "easeOut", duration: 0.2 },
    });
    tsControls.start({ x: "-50%" });
    jsControls.start({
      x: "-250%",
      rotateZ: -90,
      transition: { duration: 0.5 },
    });
  }, [controls, jsControls, tsControls]);

  useEffect(() => {
    if (inView) {
      typescriptAnimation();
    } else {
      jsControls.start({
        x: "50%",
        rotateZ: 0,
      });
      tsControls.start({ x: "250%" });
    }
  }, [controls, inView, jsControls, tsControls, typescriptAnimation]);

  return (
    <motion.div className="flex-col flex w-full ">
      <h1
        onClick={() => typescriptAnimation()}
        className="text-4xl z-50 mb-8 py-2 font-bold text-transparent hidden self-center  lg:block bg-clip-text bg-gradient-to-r  from-lightBlue via-lightPink to-darkPurple "
      >
        My Toolbelt
      </h1>

      <motion.div
        ref={ref}
        variants={appear}
        initial="hidden"
        animate={controls}
        exit={{ opacity: 0 }}
        className="grid max:h-[600px] 2xl:h-[470px] h-[500px] md:h-full w-full grid-cols-12 max:grid-cols-24 p-6 xl:p-1  grid-rows-5 gap-2 z-50 overflow-x-hidden"
      >
        <motion.div
          ref={jsIconRef}
          variants={item}
          className="flex justify-center overflow-hidden items-center col-start-6 col-span-3 md:col-span-4 md:col-start-5  rounded-xl shadow-md bg-white row-start-1"
        >
          <motion.div ref={jsIconRef} animate={jsControls}>
            <Image
              src="/javascript.svg"
              alt="javascript"
              width={50}
              height={70}
            />
          </motion.div>
          <motion.div ref={tsIconRef} animate={tsControls}>
            <Image
              src="/typescript.svg"
              alt="typescript"
              width={50}
              height={70}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          className="flex justify-center items-center col-start-5 col-span-3 md:col-span-4 md:col-start-3 row-start-2  rounded-xl shadow-md bg-white"
        >
          <Image src="/next.svg" alt="nextjs" width={65} height={75} />
        </motion.div>

        <motion.div
          variants={item}
          className="flex justify-center items-center col-start-8 col-span-3 md:col-span-4 sm:col-star7 row-start-2  rounded-xl shadow-md bg-white"
        >
          <Image src="/react.svg" alt="react icon" width={50} height={70} />
        </motion.div>

        <motion.div
          variants={item}
          className="flex justify-center items-center col-start-3 col-span-3 md:col-span-4 row-start-3 rounded-xl shadow-md bg-white"
        >
          <Image
            src="/icons8-tailwindcss.svg"
            alt="tailwind icon"
            width={50}
            height={70}
          />
        </motion.div>

        <motion.div
          variants={item}
          className="flex justify-center items-center col-span-3 md:col-span-4 row-start-3 rounded-xl shadow-md bg-white"
        >
          <Image src="/framer.svg" alt="framer icon" width={30} height={30} />
        </motion.div>
        <motion.div
          variants={item}
          className="flex justify-center items-center col-start-9 col-span-3 md:col-span-4 row-start-3 rounded-xl shadow-md bg-white"
        >
          <Image src="/jest.svg" alt="jest icon" width={50} height={50} />
        </motion.div>
        <motion.div
          variants={item}
          className="flex justify-center items-center col-start-5 col-span-3 md:col-span-4 md:col-start-4 row-start-4 rounded-xl shadow-md bg-white"
        >
          <Image
            src="/mongoose.svg"
            alt="mongoose icon"
            width={50}
            height={50}
          />
        </motion.div>
        <motion.div
          variants={item}
          className="flex justify-center items-center col-start-8 col-span-3 md:col-span-4 md:col-start-8 row-start-4 rounded-xl shadow-md bg-white"
        >
          <Image src="/nestjs.svg" alt="nestjs icon" width={50} height={50} />
        </motion.div>
        <motion.div
          variants={item}
          className="flex justify-center items-center col-start-7 col-span-2 md:col-span-4 md:col-start-3 row-start-5 rounded-xl shadow-md bg-white"
        >
          <Image
            src="/postgresql.svg"
            alt="postgresql icon"
            width={50}
            height={50}
          />
        </motion.div>
        <motion.div
          variants={item}
          className="flex justify-center  items-center col-start-9 col-span-3 md:col-span-4 md:col-start-7 row-start-5 rounded-xl shadow-md bg-white"
        >
          <Image src="/mongodb.svg" alt="mongodb icon" width={75} height={60} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ToolsGrid;
