import React from "react";
import BlurBubble from "./BlurBubble";
import Experience from "./Experience/Experience";
import Filter from "./Filter";
import HeroText from "./HeroText";

function Hero() {
  return (
    <div className="h-screen relative w-screen flex items-center justify-center">
      {/* <Filter /> */}
      <Experience />
      {/* <HeroText /> */}
    </div>
  );
}

export default Hero;
