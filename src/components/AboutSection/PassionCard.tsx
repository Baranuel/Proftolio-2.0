import React from "react";
import {GiWaterDrop} from "react-icons/gi";
import {BiWind} from "react-icons/bi";
import {GiGroundSprout} from "react-icons/gi";
import {BsFire} from "react-icons/bs";
import {IoMdSnow} from "react-icons/io";


function PassionCard() {
  const cards = [
    {
      id:1,
      backgroundColor: "bg-red-500",
      color: "text-red-500",
      renderIcon: (className: string) => (
        <BsFire className={`text-4xl  self-center ${className}`} />
      ),
    },
    {
      id:2,
      backgroundColor: "bg-blue-500",
      color: "text-blue-500",
      renderIcon: (className: string) => (
        <IoMdSnow className={`text-4xl l self-center ${className}`} />
      ),
    },
    {
      id:3,
      backgroundColor: "bg-teal-500",
      color: "text-teal-500",
      renderIcon: (className: string) => (
        <BiWind className={`text-4xl self-center ${className}`} />
      ),
    },
    {
      id:4,
      backgroundColor: "bg-amber-500",
      color: "text-amber-500",
      renderIcon: (className: string) => (
        <GiGroundSprout className={`text-4xl self-center ${className}`} />
      ),
    },
  ];

  const [selectedCard, setSelectedCard] = React.useState(cards[0]);

 



  return (
    <div className=" flex items-center justify-center relative min-h-[400px] h-full max-w-[500px] w-2/5  lg:w-3/5 md:w-4/5 sm:w-full  rounded-lg z-50 bg-white border border-1 border-purple-200">
      <div className="flex  flex-col gap-4 items-center justify-center relative w-full h-full bg-white rounded-lg p-8 md:p-6">
      <div className="  flex flex-col items-center justify-center gap-4 ">
        <div className=" ">{selectedCard.renderIcon(selectedCard.color + ' ' + 'text-5xl ')}</div>
        <h1 className={`text-3xl 2xl:text-3xl whitespace-nowrap mx-auto  ${selectedCard.color} font-medium`}>Passionately Firesome</h1>
      </div>

      <div className=" mx-auto text-md text-[#333] mt-2 text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam inventore rem voluptate dolore illo ipsam, magnam blanditiis reprehenderit tempore sunt facere vitae laboriosam officia consequuntur quis aliquam provident obcaecati quo!
      </div>
      </div>
      <div className=" absolute right-0 flex flex-col sm:flex-row translate-x-[60%] top-[50%] sm:top-[100%] -translate-y-[50%] sm:translate-x-0 flex-wrap gap-2 justify-center items-center h-auto w-[200px] sm:w-full">
        {cards.map((card,index) => {
          return (
            <div
              onClick={() => setSelectedCard(card)}
              key={index}
              className={`cursor-pointer w-[75px] h-[75px] shadow-md  ${selectedCard.id !== card.id ? 'bg-white' : card.backgroundColor} transition-all border border-1 border-purple-200 rounded-xl flex items-center justify-center `}          >
              {card.renderIcon(selectedCard.id !== card.id ? card.color : 'text-white')}
            </div>
          );
        })}
 
       
        </div>
    </div>
  );
}

export default PassionCard;
