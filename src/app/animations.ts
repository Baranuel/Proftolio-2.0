export const appear = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const showProject = {
  hidden: { opacity: 1, x: -100, scale: 0.7 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      ease: "easeIn",
    },
  },
};
