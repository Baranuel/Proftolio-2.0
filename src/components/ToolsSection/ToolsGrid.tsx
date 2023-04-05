"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, animate, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const item = {
  hidden: { opacity: 0, x: "100%" },
  show: { opacity: 1, x: 0 },
};

const showTypescript = {
  hidden: { opacity: 0, x: "100%" },
  show: { opacity: 1, x: 0, transition: { delay: 0.75 } },
};

function ToolsGrid() {
  const appear = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const jsIconRef = useRef<HTMLDivElement>(null!);
  const tsIconRef = useRef<HTMLDivElement>(null!);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);
  const typescriptControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const typescriptAnimation = async () => {
    const jsIcon = jsIconRef.current;
    const tsIcon = tsIconRef.current;

    await animate(tsIcon, { x: 0, opacity: 1 });
    await animate(jsIcon, { x: -25, opacity: 1 }, { delay: 0 });
  };

  return (
    <motion.div className="flex-col flex w-full ]">
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
        className="grid h-full w-full grid-cols-12 p-6 xl:p-0  grid-rows-5 gap-2 z-50"
      >
        <motion.div
          ref={jsIconRef}
          variants={item}
          className="flex flex-col justify-center items-center col-start-5 col-span-3 sm:col-span-4 sm:col-start-5  rounded-xl shadow-md bg-white row-start-1"
        >
          <Image
            src="/javascript.svg"
            alt="javascript"
            width={50}
            height={70}
          />
        </motion.div>
        <motion.div
          ref={tsIconRef}
          initial={{ x: 100, opacity: 0 }}
          className="flex flex-col justify-center items-center col-start-8 col-span-3 sm:col-span-4 sm:col-start-8  rounded-xl shadow-md bg-red-200 row-start-1"
        >
          <Image
            src="/javascript.svg"
            alt="javascript"
            width={50}
            height={70}
          />
        </motion.div>
        <motion.div
          variants={item}
          className="flex justify-center items-center col-start-4 col-span-3 sm:col-span-4 sm:col-start-3 row-start-2  rounded-xl shadow-md bg-white"
        >
          <Image src="/next.svg" alt="nextjs" width={65} height={75} />
        </motion.div>

        <motion.div
          variants={item}
          className="flex justify-center items-center col-start-7 col-span-3 sm:col-span-4 sm:col-star7 row-start-2  rounded-xl shadow-md bg-white"
        >
          <Image src="/react.svg" alt="react icon" width={50} height={70} />
        </motion.div>

        <motion.div
          variants={item}
          className="flex justify-center items-center col-start-2 col-span-3 sm:col-span-4 row-start-3 rounded-xl shadow-md bg-white"
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
          className="flex justify-center items-center col-span-3 sm:col-span-4 row-start-3 rounded-xl shadow-md bg-white"
        >
          <Image src="/framer.svg" alt="framer icon" width={30} height={30} />
        </motion.div>
        <motion.div
          variants={item}
          className="flex justify-center items-center col-span-3 sm:col-span-4 row-start-3 rounded-xl shadow-md bg-white"
        >
          <Image src="/jest.svg" alt="jest icon" width={50} height={50} />
        </motion.div>
        <motion.div
          variants={item}
          className="flex justify-center items-center col-start-4 col-span-3 sm:col-span-4 sm:col-start-4 row-start-4 rounded-xl shadow-md bg-white"
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
          className="flex justify-center items-center col-start-7 col-span-3 sm:col-span-4 sm:col-start-8 row-start-4 rounded-xl shadow-md bg-white"
        >
          <Image src="/nestjs.svg" alt="nestjs icon" width={50} height={50} />
        </motion.div>
        <motion.div
          variants={item}
          className="flex justify-center items-center col-start-6 col-span-2 sm:col-span-4 sm:col-start-3 row-start-5 rounded-xl shadow-md bg-white"
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
          className="flex justify-center relative items-center col-start-8 col-span-3 sm:col-span-4 sm:col-start-7 row-start-5 rounded-xl shadow-md bg-white"
        >
          <Image src="/mongodb.svg" alt="mongodb icon" width={75} height={60} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ToolsGrid;
