import React from "react";
import {GiWaterDrop} from "react-icons/gi";
import {BiWind} from "react-icons/bi";
import {GiGroundSprout} from "react-icons/gi";
import {BsFire} from "react-icons/bs";
import {IoMdSnow} from "react-icons/io";
import Blob from "./Blob";
import Blob2 from "./Blob2";

interface PassionCardProps {
  cards: any[];
  selectedCard: any;
  setSelectedCard: any;
}

function PassionCard({
  cards,
  selectedCard,
  setSelectedCard,
}: PassionCardProps) {



 



  return (
    <div className=" flex items-center  h-fit max-w-[500px] w-2/5  lg:w-3/5 md:w-4/5 sm:w-full  rounded-lg z-50 bg-white border border-1 border-purple-200">
      <div className="flex  flex-col gap-4 items-center justify-center relative w-full h-full bg-white rounded-lg p-8 ">
      <div className="  flex flex-col items-center justify-center bg-white gap-4 ">
        <div className=" h-[50px] w-[50px]">{selectedCard.renderIcon(selectedCard.color + ' ' + 'text-5xl ')}</div>
        <h1 className={`text-3xl sm:text-2xl whitespace-nowrap mx-auto  ${selectedCard.color} font-medium`}>{selectedCard.title}</h1>
      </div>

      <div className=" mx-auto text-md sm:text-sm text-[#333] mt-2 text-justify ">
        {selectedCard.text}
      </div>
      </div>
      <div className=" absolute right-0 flex flex-col sm:flex-row translate-x-[60%] top-[50%] sm:top-[100%] -translate-y-[50%] sm:translate-x-0 flex-wrap gap-2 justify-center items-center h-auto w-[200px] sm:w-full">
        {cards.map((card,index) => {
          return (
            <div
              onClick={() => setSelectedCard(card)}
              key={index}
              className={`cursor-pointer w-[75px] h-[75px] shadow-md  ${selectedCard.id !== card.id ? 'bg-white' : card.backgroundColor} transition-all border border-1 border-purple-300 rounded-xl flex items-center justify-center `}          >
              {card.renderIcon(selectedCard.id !== card.id ? card.color : 'text-white')}
            </div>
          );
        })}
 
       
        </div>
    </div>
  );
}

export default PassionCard;
