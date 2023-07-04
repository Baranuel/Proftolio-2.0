import React from "react";
import colors from "../../app/colors";

function Blob({ color }: { color: string }) {
  return (
    <div
      className={`w-[350px] h-[350px] ${colors.bg[color]} rounded-full blur-3xl opacity-30 absolute top-[50%] left-[50%] -translate-y-[70%] -translate-x-[20%] sm:-translate-x-[50%] z-0`}
    >
      Blob
    </div>
  );
}

export default Blob;
