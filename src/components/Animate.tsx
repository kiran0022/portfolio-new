"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Animate() {
  const isVisible = true;
  return (
    <div className="w-96 h-96 border ">
      <motion.div
        className="box"
        // animate={{
        //   scale: [1, 3, 2, 1, 1],
        //   rotate: [0, 0, 180, 180, 0],
        //   borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        // }}

        // animate={{
        //   x: [null, 100, 0],
        // }}

        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}

        // transition={{
        //   duration: 2,
        //   ease: "easeInOut",
        //   times: [0, 0.2, 0.5, 0.8, 1],
        //   repeat: Infinity,
        //   repeatDelay: 1,
        // }}
      >
        {/* <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence> */}
        <div className="w-16 h-16 bg-red-500"></div>
      </motion.div>
    </div>
  );
}
