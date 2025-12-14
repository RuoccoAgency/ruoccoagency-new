import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const ySpring = useSpring(scrollY, { stiffness: 50, damping: 20 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener("resize", resize);
    resize();

    // Star properties
    const stars: { x: number; y: number; z: number; size: number; opacity: number; speed: number }[] = [];
    const starCount = 300;
    
    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5, // Depth factor
        size: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.05 + 0.01,
      });
    }

    // Nebula blobs
    const blobs: { x: number; y: number; r: number; color: string; vx: number; vy: number }[] = [
      { x: width * 0.2, y: height * 0.3, r: 300, color: "rgba(124, 58, 237, 0.03)", vx: 0.1, vy: 0.1 }, // Primary purple
      { x: width * 0.8, y: height * 0.7, r: 400, color: "rgba(6, 182, 212, 0.03)", vx: -0.1, vy: -0.05 }, // Secondary cyan
      { x: width * 0.5, y: height * 0.5, r: 350, color: "rgba(168, 85, 247, 0.02)", vx: 0.05, vy: -0.1 }, // Accent pinkish
    ];

    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      const scrollOffset = ySpring.get() * 0.2;
      const mouseXOffset = (mouseRef.current.x - width / 2) * 0.02;
      const mouseYOffset = (mouseRef.current.y - height / 2) * 0.02;

      // Draw Nebula
      blobs.forEach(blob => {
        blob.x += blob.vx;
        blob.y += blob.vy;
        
        // Bounce off edges
        if (blob.x < -blob.r || blob.x > width + blob.r) blob.vx *= -1;
        if (blob.y < -blob.r || blob.y > height + blob.r) blob.vy *= -1;

        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Stars
      stars.forEach(star => {
        // Parallax movement based on scroll and mouse
        let y = star.y - scrollOffset * star.z; 
        let x = star.x + mouseXOffset * star.z;
        let finalY = y + mouseYOffset * star.z;
        
        // Wrap around vertically
        // Use modulo to keep stars in view but careful with negative values
        finalY = ((finalY % height) + height) % height;
        x = ((x % width) + width) % width;

        // Twinkle
        if (Math.random() > 0.99) {
          star.opacity = Math.random();
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(x, finalY, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [ySpring]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none bg-background"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
