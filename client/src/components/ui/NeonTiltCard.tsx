import React, { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface NeonTiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function NeonTiltCard({ 
  children, 
  className = "", 
  intensity = 20
}: NeonTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity, intensity]);
  const translateZ = useTransform(mouseYSpring, [-0.5, 0.5], [0, 10]); // Slight lift
  
  // Specular highlight position
  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group perspective-1000 transform-gpu transition-all duration-200 ease-out ${className}`}
    >
      {/* Idle Float Animation Wrapper */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="h-full w-full relative"
      >
        {/* Neon Edge Border */}
        <div 
          className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0" 
          style={{ transform: "translateZ(-1px)" }}
        />
        
        {/* Card Content */}
        <div 
          className="h-full w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative backdrop-blur-md z-10 group-hover:border-primary/50 transition-colors duration-300"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Specular Highlight Overlay */}
          <motion.div 
            style={{
              background: `radial-gradient(
                circle at ${bgX} ${bgY}, 
                rgba(255,255,255,0.1) 0%, 
                transparent 50%
              )`,
            }}
            className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
          />

          <div style={{ transform: "translateZ(20px)" }} className="relative z-30 h-full">
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
