import React from "react";
import "../../app/globals.css";
import Button from "../Buttons/Button";
function HeroText() {
  return (
    <div className="flex absolute flex-col items-center">
      <h1 className="text-8xl mb-4 inset-text-shadow background-animate font-inter font-bold text-transparent bg-clip-text bg-gradient-to-r from-lightBlue via-darkPurple via-lightPink to-lightBlue">
        Samuel Baran
      </h1>
      <p className="font-quicksand text-2xl text-gray-500 mb-8 font-medium tracking-wide">
        Creative developer with passion for eye-catching products
      </p>
      <Button type="primary" text="See Projects" />
    </div>
  );
}

export default HeroText;
