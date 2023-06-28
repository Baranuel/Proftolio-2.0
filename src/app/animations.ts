export const appear = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const item = {
  hidden: { opacity: 0, x: "100%" },
  show: { opacity: 1, x: 0, transition:{stagerChildren: 0.5} },
};

export const appearWork = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.10,
    },
  },
};

export const showProject = {
  hidden: { opacity: 0, x: "100%" },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeIn",
      staggerChildren: 1,
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

export const webProjectModal = {
  hidden: {
    height: 0,
    width: 0,
  },
  show: {
    height: "100%",
    width: "100%",

}
}