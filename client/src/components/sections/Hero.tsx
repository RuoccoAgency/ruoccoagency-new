import { content } from "@/content/it";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_abstract_tech_background_with_neon_lines.png";
import { useRef, useEffect, useState } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  
  // Mouse parallax state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { stiffness: 50, damping: 20 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const parallaxY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-1000">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-10" />
        <motion.div style={{ y: y1, x: parallaxX, scale: 1.1 }} className="w-full h-full">
          <img 
            src={heroBg} 
            alt="Abstract Tech Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </motion.div>
      </div>

      <motion.div 
        style={{ y: y2, x: useTransform(parallaxX, v => -v) }}
        className="container mx-auto px-4 z-10 relative"
      >
        <div className="max-w-4xl mx-auto text-center perspective-1000">
          
          <motion.div
            initial={{ opacity: 0, rotateX: 20, z: -100 }}
            animate={{ opacity: 1, rotateX: 0, z: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm cursor-default hover:bg-white/10 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {content.hero.badge}
          </motion.div>

          <div className="relative inline-block mb-6">
            <motion.h1
              initial={{ opacity: 0, rotateX: 18, z: 60, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, z: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 40 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-tight text-gradient-logo relative z-10"
              style={{ transformStyle: "preserve-3d" }}
            >
              {content.hero.headline}
            </motion.h1>
            {/* Holographic Shimmer Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none mix-blend-overlay"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, rotateX: 12, z: 40, y: 30 }}
            animate={{ opacity: 1, rotateX: 0, z: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {content.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all relative overflow-hidden group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {/* Neon Sweep Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:animate-shine z-10" />
              <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse-slow" />
              
              <span className="relative z-20 flex items-center">
                {content.hero.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-white/10 hover:bg-white/5 text-white rounded-full px-8 h-12 text-base backdrop-blur-sm hover:border-primary/50 transition-all"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              {content.hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {content.hero.benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2 text-sm text-muted-foreground/80"
                whileHover={{ scale: 1.05, color: "white", textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
              >
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
