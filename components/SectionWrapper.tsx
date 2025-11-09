"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { 
    opacity: 0,
    y: 100,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

export default function SectionWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="my-16"
    >
      {children}
    </motion.section>
  );
}
