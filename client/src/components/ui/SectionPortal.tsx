import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionPortalProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionPortal({ children, className = "", id }: SectionPortalProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Portal effect: fade in + rotate slightly + slide from depth
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [15, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{
        opacity,
        scale,
        rotateX,
        y,
        perspective: 1000,
      }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </motion.section>
  );
}
