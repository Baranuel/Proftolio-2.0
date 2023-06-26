import React from "react";
import colors from "../../app/colors";

function Blob({ color }: { color: string }) {
  return (
    <div
      className={`w-[550px] h-[550px] ${colors.bg[color]} rounded-full blur-3xl opacity-30 absolute top-[50%] left-[80%] -translate-y-[90%] -translate-x-[70%] z-0`}
    >
      Blob
    </div>
  );
}

export default Blob;