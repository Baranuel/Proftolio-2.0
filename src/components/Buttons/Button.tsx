import React from "react";
import "../../app/globals.css";
import { ButtonType } from "../../types/ButtonTypes";

interface ButtonProps {
  type: ButtonType;
  text: string;
  onClick?: () => void;
}

function Button({ type, text, onClick }: ButtonProps) {
  switch (type) {
    case "primary":
      return (
        <button
          onClick={onClick}
          className="bg-bgWhite text-lightPink font-quicksand font-[500] text-xl tracking-wide px-12 py-4 rounded-xl shadow-lg "
        >
          {text}
        </button>
      );

    case "secondary":
      return (
        <button
          onClick={onClick}
          className="bg-white text-[#6C63FF] flex  font-quicksand font-bold text-[1.5rem] px-8 py-3 rounded-lg shadow-lg hover:bg-[#F3F3F3]"
        >
          {text}
        </button>
      );
  }
}

export default Button;
