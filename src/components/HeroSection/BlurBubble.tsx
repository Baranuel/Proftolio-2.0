import React, { useRef, useLayoutEffect } from "react";

interface BlurBubbleProps {
  options: Record<string, string>;
}

function BlurBubble({ options }: BlurBubbleProps) {
  const blur = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Add a random floating animation to the timeline
    tl.to(blur.current, {
      x: () => Math.sin(Math.PI * Math.random()) * 100 + Math.random() * 100,
      y: () =>
        Math.sin(Math.PI * 2 * Math.random()) * 100 + Math.random() * 100,
      ease: "linear",
      duration: 5,
    });
  }, []);

  return (
    <div
      ref={blur}
      style={options}
      className={`w-[150px] h-[150px] absolute z-1 blur-2xl rounded-full bg-[#6C63FF] opacity-[.1] `}
    ></div>
  );
}

export default BlurBubble;
