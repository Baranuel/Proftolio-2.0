import React from "react";
import colors from "../../app/colors";

function Blob2({ color }: { color: string }) {
  return (
    <div
      className={`w-[550px] h-[550px] ${colors.bg[color]} rounded-full blur-3xl opacity-30 absolute top-[50%] right-[50%] -translate-y-[40%] translate-x-[20%] sm:translate-x-[50%] z-0`}
    >
      Blob
    </div>
  );
}

export default Blob2;
