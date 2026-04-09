import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, width = "fit-content", delay = 0, direction = "up", scale = 1, rotate = 0 }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      scale: scale !== 1 ? 0.9 : 1,
      rotate: rotate
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0
    },
  };

  return (
    <div style={{ width, position: 'relative' }}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ 
          type: "spring",
          duration: 0.8, 
          delay: delay, 
          bounce: 0.3,
          stiffness: 100 
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
