import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: "100%" },
  show: { opacity: 1, x: 0 },
};

function ToolsGrid() {
  const [visible, setVisible] = useState(false);
  return (
    <motion.div className="flex-col flex w-full ]">
      <h1
        onClick={() => setVisible(!visible)}
        className="text-4xl z-50 mb-8 py-2 font-bold text-transparent hidden self-center  lg:block bg-clip-text bg-gradient-to-r  from-lightBlue via-lightPink to-darkPurple "
      >
        My Toolbelt
      </h1>
      <AnimatePresence>
        {visible && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="grid h-full w-full grid-cols-12 p-6 xl:p-0  grid-rows-5 gap-2 z-50"
          >
            <motion.div
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
              <Image
                src="/framer.svg"
                alt="framer icon"
                width={30}
                height={30}
              />
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
              <Image
                src="/nestjs.svg"
                alt="nestjs icon"
                width={50}
                height={50}
              />
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
              <Image
                src="/mongodb.svg"
                alt="mongodb icon"
                width={75}
                height={60}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ToolsGrid;
