"use client";

import React from "react";
import Blob from "./Blob";
import { AiFillFire } from "react-icons/ai";
import Blob2 from "./Blob2";
import PassionCard from "./PassionCard";



function About() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <div className="min-h-[700px]  h-full relative w-screen flex flex-col bg-white px-48 2xl:px-24 xl:px-12 lg:px-12 sm:px-2 py-24 gap-8">
      <Blob color="red" />
      <Blob2 color="red" />
      <h1 className="text-5xl max:text-7xl lg:text-4xl lg:self-center py-2 font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-lightBlue via-lightPink to-darkPurple self-start">
        About me
      </h1>
      <div className=" relative flex-grow gap-8 flex  justify-center items-center w-full h-full ">
        <PassionCard />
      </div>
    </div>
  );
}

export default About;
