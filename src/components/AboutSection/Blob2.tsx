import React from "react";
import colors from "../../app/colors";

function Blob2({ color }: { color: string }) {
  return (
    <div
      className={`w-[450px] h-[450px] ${colors.bg[color]} rounded-full blur-3xl opacity-30 absolute top-[50%] right-[30%] -translate-y-[20%] -translate-x-[0%] z-0`}
    >
      Blob
    </div>
  );
}

export default Blob2;
