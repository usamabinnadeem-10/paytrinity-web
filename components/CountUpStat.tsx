"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "motion/react";

interface CountUpStatProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}

export function CountUpStat({
  value,
  prefix = "",
  suffix = "",
  className = "",
  decimals = 0,
}: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Number(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}
