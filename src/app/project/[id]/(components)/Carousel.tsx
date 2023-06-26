"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import colors from "../../../colors";

function Carousel({ items, color }: { items: any[]; color: string }) {
  return (
    <div className="relative z-0 sm:w-[90vw] w-auto ">
      <Splide
        style={{
          width: "100%",
          padding: "0.5rem 0 ",
          borderRight: "1px solid #e2e8f0",
        }}
        options={{
          drag: true,
          arrows: false,
          pagination: false,
          gap: "0.5rem",
          autoHeight: true,
          autoWidth: true,
          zIndex: 0,
        }}
        aria-label="My Favorite Images"
      >
        {items.map((item, index) => {
          return (
            <SplideSlide
              className={` md:h-[40px] h-[50px] min-w-fit max-w-[130px] border border-1 ${colors.border[color]} bg-white p-2 flex items-center justify-center rounded-xl `}
              key={index}
            >
              <p
                className={`sm:text-sm text-sm p-1 text-center ${colors.text[color]}`}
              >
                {item}
              </p>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Carousel;
