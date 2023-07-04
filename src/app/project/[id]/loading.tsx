import React from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import {
  Skeleton,
  SkeletonText,
  SkeletonTextLong,
} from "./(components)/Skeleton";

function loading() {
  return (
    <>
      <div className="flex relative w-full px-80  2xl:px-24 xl:px-12 lg:px-12 sm:px-4 py-24 md:py-4">
        <div className="w-3/4 lg:w-full mx-auto  mt-4 text-black  ">
          <a
            href="/#work"
            className={`flex gap-1  items-center text-lg  mb-4  hover:cursor-pointer`}
          >
            <RiArrowGoBackLine />
            <h1>Back to projects</h1>
          </a>
          <div className="  flex items-center w-full justify-between gap-4">
            <Skeleton />
          </div>
          <hr className="my-6 md:my-3" />
          <div>
            <div className="relative h-[30vh] bg-gray-200 rounded-xl"></div>
            <div className="flex gap-4 lg:flex-col justify-between">
              <div className="mt-4">
                <h1 className={`text-xl text-[#333] font-semibold`}>
                  Deliverables
                </h1>
                <div className="flex flex-col gap-2">
                  <SkeletonText />
                  <SkeletonText />
                  <SkeletonText />
                  <SkeletonText />
                </div>
              </div>

              <div className="  flex md:flex-col gap-6 justify-between">
                <div className="mt-4">
                  <h1 className="text-xl text-[#333] font-semibold">
                    Overview
                  </h1>

                  <div className="flex flex-col gap-2">
                    <SkeletonTextLong />
                    <SkeletonTextLong />
                    <SkeletonText />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12"></div>
        </div>
      </div>
    </>
  );
}

export default loading;
