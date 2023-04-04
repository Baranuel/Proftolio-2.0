import React from "react";
import Image from "next/image";

function ToolsGrid() {
  return (
    <div className="flex-col flex w-full">
      <h1 className="text-4xl z-50 mb-8 py-2 font-bold text-transparent hidden self-center  lg:block bg-clip-text bg-gradient-to-r  from-lightBlue via-lightPink to-darkPurple self-start">
        My Toolbelt
      </h1>
      <div className="grid h-full w-full grid-cols-12   grid-rows-5 gap-2 z-50">
        <div className="flex flex-col justify-center items-center col-start-5 col-span-3 sm:col-span-4 sm:col-start-5  rounded-xl shadow-md bg-white row-start-1">
          <Image
            src="/javascript.svg"
            alt="javascript"
            width={50}
            height={70}
          />
        </div>
        <div className="flex justify-center items-center col-start-4 col-span-3 sm:col-span-4 sm:col-start-3 row-start-2  rounded-xl shadow-md bg-white">
          <Image src="/next.svg" alt="nextjs" width={65} height={75} />
        </div>
        <div className="flex justify-center items-center col-start-7 col-span-3 sm:col-span-4 sm:col-star7 row-start-2  rounded-xl shadow-md bg-white">
          <Image src="/react.svg" alt="react icon" width={50} height={70} />
        </div>
        <div className="flex justify-center items-center col-start-2 col-span-3 sm:col-span-4 row-start-3 rounded-xl shadow-md bg-white">
          <Image
            src="/icons8-tailwindcss.svg"
            alt="tailwind icon"
            width={50}
            height={70}
          />
        </div>
        <div className="flex justify-center items-center col-span-3 sm:col-span-4 row-start-3 rounded-xl shadow-md bg-white">
          <Image src="/framer.svg" alt="framer icon" width={30} height={30} />
        </div>
        <div className="flex justify-center items-center col-span-3 sm:col-span-4 row-start-3 rounded-xl shadow-md bg-white">
          <Image src="/jest.svg" alt="jest icon" width={50} height={50} />
        </div>
        <div className="flex justify-center items-center col-start-4 col-span-3 sm:col-span-4 sm:col-start-4 row-start-4 rounded-xl shadow-md bg-white">
          <Image
            src="/mongoose.svg"
            alt="mongoose icon"
            width={50}
            height={50}
          />
        </div>
        <div className="flex justify-center items-center col-start-7 col-span-3 sm:col-span-4 sm:col-start-8 row-start-4 rounded-xl shadow-md bg-white">
          <Image src="/nestjs.svg" alt="nestjs icon" width={50} height={50} />
        </div>
        <div className="flex justify-center items-center col-start-6 col-span-2 sm:col-span-4 sm:col-start-3 row-start-5 rounded-xl shadow-md bg-white">
          <Image
            src="/postgresql.svg"
            alt="postgresql icon"
            width={50}
            height={50}
          />
        </div>
        <div className="flex justify-center relative items-center col-start-8 col-span-3 sm:col-span-4 sm:col-start-7 row-start-5 rounded-xl shadow-md bg-white">
          <Image src="/mongodb.svg" alt="mongodb icon" width={75} height={60} />
        </div>
      </div>
    </div>
  );
}

export default ToolsGrid;
