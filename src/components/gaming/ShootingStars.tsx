
import React from "react";
import { motion } from "framer-motion";

export const ShootingStars = () => {
  const stars = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-0.5 w-0.5 bg-yellow-400/70"
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            x: [-10, -300],
            y: [10, 300],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
