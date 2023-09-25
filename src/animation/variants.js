export const fadeIn = (duration = 0.7, delay = 0) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
