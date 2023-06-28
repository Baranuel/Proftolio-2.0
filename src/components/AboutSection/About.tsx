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
    text:'Ignited with spark of innovation, I strive to bring the engaging and functional together. What gets me going is a cup of coffee and an entire day ahead.'
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
    text:` Constantly seeking proper solutions in the midst of complex situations, while jamming to a mix of EDM bangers and face-melting metal tunes.`
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
    text:`Like a gentle breeze, I bring a breath of fresh perspectives to the table with an open mind and eagerness for exploration. Applicable both at work and on Summoner's Rift`},
  {
    id:4,
    colorTitle: "amber",
    backgroundColor: "bg-amber-500",
    color: "text-amber-500",
    renderIcon: (className: string) => (
      <GiGroundSprout className={`text-4xl self-center ${className}`} />
    ),
    title:'Solid Mastery',
    text:`Whether it's drilling down component props or hitting the gym for some pull-up action. I keep going until I'm done, or take a break when I can't push any further.`},
];



function About() {
  const [selectedCard, setSelectedCard] = React.useState(cards[0]);

  return (
    <div className=" overflow-hidden h-screen relative w-screen flex flex-col bg-white px-48 2xl:px-24 xl:px-12 lg:px-12 sm:px-4 py-24  gap-8">
     
      <h1 className="text-5xl max:text-7xl lg:text-4xl lg:self-center py-2 font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-lightBlue via-lightPink to-darkPurple self-start">
        About me
      </h1>
      <div className="   flex items-center justify-center  relative   w-full h-full  ">
      <Blob color={selectedCard.colorTitle}/>
      <Blob2 color={selectedCard.colorTitle} />
        <PassionCard cards={cards} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      </div>
    </div>
  );
}

export default About;
