"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Carousel({ items, color }: { items: any[]; color: string }) {
  return (
    <div className="relative z-0 sm:w-full w-full ">
      <Splide
        style={{
          width: "100%",
          padding: "0.25rem 0 ",
          borderRight: "1px solid #e2e8f0",
        }}
        options={{
          drag: true,
          arrows: false,
          pagination: false,
          gap: "0.25rem",
          autoHeight: true,
          autoWidth: true,
          zIndex: 0,
        }}
        aria-label="My Favorite Images"
      >
        {items.map((item, index) => {
          return (
            <SplideSlide
              className={`  h-[30px] min-w-fit max-w-[130px]  px-2 border border-1 border-[#999] bg-white  flex items-center justify-center rounded-full `}
              key={index}
            >
              <p
                className={` text-[13px] p-1 text-center font-medium text-[#444]`}
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
