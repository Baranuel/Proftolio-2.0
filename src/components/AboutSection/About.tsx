"use client";

import React from "react";
import Blob from "./Blob";
import { AiFillFire } from "react-icons/ai";
import Blob2 from "./Blob2";
import PassionCard from "./PassionCard";

const cards = [
  {
    color: "text-red-500",
    renderIcon: (className: string) => (
      <AiFillFire className={`text-5xl lg:text-4xl self-center ${className}`} />
    ),
  },
  {
    color: "text-blue-500",
    renderIcon: (className: string) => (
      <AiFillFire className={`text-5xl lg:text-4xl self-center ${className}`} />
    ),
  },
  {
    color: "text-teal-500",
    renderIcon: (className: string) => (
      <AiFillFire className={`text-5xl lg:text-4xl self-center ${className}`} />
    ),
  },
];

function About() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <div className="min-h-screen  h-screen relative w-screen flex flex-col bg-white px-48 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-24 gap-8">
      <Blob color="red" />
      <Blob2 color="red" />
      <h1 className="text-5xl max:text-7xl lg:text-4xl lg:self-center py-2 font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-lightBlue via-lightPink to-darkPurple self-start">
        About me
      </h1>
      <div className=" flex-grow gap-8 flex lg:flex-col-reverse justify-between items-center w-full ">
        <div className=" flex  flex-wrap lg:flex-nowrap gap-2 justify-center items-center w-1/2 lg:w-full">
          <div className="w-[150px] h-[150px] lg:w-[100px] lg:h-[100px] md:w-[75px] md:h-[75px] bg-white border border-1 border-purple-200 rounded-xl"></div>
          <div className="w-[150px] h-[150px] lg:w-[100px] lg:h-[100px] md:w-[75px] md:h-[75px] bg-white border border-1 border-purple-200 rounded-xl"></div>
          <div className="w-[150px] h-[150px] lg:w-[100px] lg:h-[100px] md:w-[75px] md:h-[75px] bg-white border border-1 border-purple-200 rounded-xl"></div>
          <div className="w-[150px] h-[150px] lg:w-[100px] lg:h-[100px] md:w-[75px] md:h-[75px] bg-white border border-1 border-purple-200 rounded-xl"></div>
        </div>
        <PassionCard />
      </div>
    </div>
  );
}

export default About;
