export const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const SlideLeft = {
  hidden: {
    opacity: 0,
    x: 40,          
    scale: 0.98,    // subtle zoom-in effect
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], 
    },
  },
};
