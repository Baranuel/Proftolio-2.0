export const appear = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const appearWork = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

export const showProject = {
  hidden: { opacity: 1, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeIn",
    },
  },
};
