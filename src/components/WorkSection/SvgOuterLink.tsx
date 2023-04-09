import * as React from "react";
const SvgOuterLink = (props: any) => {
  const { fillColor, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill={fillColor}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={fillColor}
        d="M18 20.75H6A2.75 2.75 0 0 1 3.25 18V6A2.75 2.75 0 0 1 6 3.25h6a.75.75 0 1 1 0 1.5H6A1.25 1.25 0 0 0 4.75 6v12A1.25 1.25 0 0 0 6 19.25h12A1.25 1.25 0 0 0 19.25 18v-6a.75.75 0 1 1 1.5 0v6A2.75 2.75 0 0 1 18 20.75ZM20 8.75a.76.76 0 0 1-.75-.75V4.75H16a.75.75 0 1 1 0-1.5h4a.76.76 0 0 1 .75.75v4a.76.76 0 0 1-.75.75Z"
      />
      <path
        fill={fillColor}
        d="M13.5 11.25A.75.75 0 0 1 13 10l6.5-6.5a.75.75 0 1 1 1.06 1.06L14 11a.74.74 0 0 1-.5.25Z"
      />
    </svg>
  );
};
const MemoSvgOuterLink = React.memo(SvgOuterLink);
export default MemoSvgOuterLink;