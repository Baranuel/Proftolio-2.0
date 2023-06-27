"use client";

import React from "react";
import Blob from "./Blob";
import Blob2 from "./Blob2";
import PassionCard from "./PassionCard";
import { BsFire } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import { GiGroundSprout } from "react-icons/gi";
import {BsFillDropletFill} from "react-icons/bs";

const cards = [
  {
    id:1,
    colorTitle: "red",
    backgroundColor: "bg-red-500",
    color: "text-red-500",
    renderIcon: (className: string) => (
      <BsFire className={`text-4xl  self-center ${className}`} />
    ),
    title:'Blazing Passion',
    text:'Fuelled by an unwavering passion for creating extraordinary digital experiences. I ignite the spark of innovation, breathing life into captivating designs and dynamic functionalities.'
  },
  {
    id:2,
    colorTitle: "blue",
    backgroundColor: "bg-blue-500",
    color: "text-blue-500",
    renderIcon: (className: string) => (
      <BsFillDropletFill className={`text-4xl l self-center ${className}`} />
    ),
    title:'Soothing Flow',
    text:'I navigate with calm determination, flowing effortlessly around obstacles that come my way. Just as water adapts to its environment, I embrace challenges, constantly seeking creative solutions and staying composed in the face of complexity.'
  },
  {
    id:3,
    colorTitle: "teal",
    backgroundColor: "bg-teal-500",
    color: "text-teal-500",
    renderIcon: (className: string) => (
      <BiWind className={`text-4xl self-center ${className}`} />
    ),
    title:'Swift Gust',
    text:' Like a gentle breeze, I bring fresh perspectives and cutting-edge solutions to the table. With an open mind and a passion for exploration, I embrace the dynamic nature of the digital world, adapting and evolving alongside emerging trends and technologies.'
  },
  {
    id:4,
    colorTitle: "amber",
    backgroundColor: "bg-amber-500",
    color: "text-amber-500",
    renderIcon: (className: string) => (
      <GiGroundSprout className={`text-4xl self-center ${className}`} />
    ),
    title:'Solid Mastery',
    text:'Grounded in the world of web development, I provide a solid foundation for your digital aspirations. Like the earth beneath our feet, I am reliable, steadfast, and meticulous in my approach.'
  },
];



function About() {
  const [selectedCard, setSelectedCard] = React.useState(cards[0]);

  return (
    <div className=" h-screen relative w-screen flex flex-col bg-white px-48 2xl:px-24 xl:px-12 lg:px-12 sm:px-4 py-24  gap-8">
     
      <h1 className="text-5xl max:text-7xl lg:text-4xl lg:self-center py-2 font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-lightBlue via-lightPink to-darkPurple self-start">
        About me
      </h1>
      <div className="  flex items-center justify-center  relative   w-full h-full ">
      <Blob color={selectedCard.colorTitle}/>
      <Blob2 color={selectedCard.colorTitle} />
        <PassionCard cards={cards} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      </div>
    </div>
  );
}

export default About;
