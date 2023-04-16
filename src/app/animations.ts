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

export const webAnimation = {
  hidden: {
    opacity: 1,
    x: "100%",
    transition: {
      ease: [0.06, 0.975, 0.195, 0.985],
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.06, 0.975, 0.195, 0.985],
    },
  },
};

export const panelAnimation = {
  hidden: {
    x: "-100%",
  },
  show: {
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.06, 0.975, 0.195, 0.985],
    },
  },
};

// export const panelAnimation = {
//   hidden: {
//     width: "5%",
//   },
//   show: {
//     width: "100%",
//   },
// };
