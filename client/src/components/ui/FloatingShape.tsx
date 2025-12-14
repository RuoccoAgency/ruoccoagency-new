import { motion } from "framer-motion";

interface FloatingShapeProps {
  className?: string;
  delay?: number;
  duration?: number;
  type?: "circle" | "square" | "triangle" | "ring";
  size?: number;
  color?: string;
}

export function FloatingShape({ 
  className = "", 
  delay = 0, 
  duration = 6, 
  type = "circle",
  size = 20,
  color = "bg-primary"
}: FloatingShapeProps) {
  
  const randomY = Math.random() * 20 - 10;
  const randomRotate = Math.random() * 180;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.1, 0.3, 0.1], 
        y: [0, -30, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
      className={`absolute pointer-events-none z-0 ${className}`}
    >
      {type === "circle" && (
        <div 
          style={{ width: size, height: size }} 
          className={`rounded-full ${color} blur-xl`} 
        />
      )}
      {type === "ring" && (
        <div 
          style={{ width: size, height: size }} 
          className={`rounded-full border-2 ${color.replace('bg-', 'border-')} blur-sm opacity-30`} 
        />
      )}
    </motion.div>
  );
}
