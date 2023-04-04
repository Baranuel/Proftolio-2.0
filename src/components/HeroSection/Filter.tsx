"use client";

import React from "react";
import BlurBubble from "./BlurBubble";

function Filter() {
  const boxOptions1 = {
    top: "-10%",
    left: "-20%",
  };

  const boxOptions2 = {
    bottom: "-10%",
    right: "-20%",
  };

  return (
    <div className="h-screen absolute bg-[#F8F0FE]/40 w-full overflow-hidden ">
      <BlurBubble options={boxOptions1} />
      <BlurBubble options={boxOptions2} />
    </div>
  );
}

export default Filter;
