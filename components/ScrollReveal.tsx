"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
}

export function ScrollReveal({
  children,
  width = "100%",
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <div ref={ref} style={{ width, perspective: "1000px" }} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -10, scale: 0.95 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, rotateX: 0, scale: 1 }
            : { opacity: 0, y: 50, rotateX: -10, scale: 0.95 }
        }
        transition={{
          duration: 0.8,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
