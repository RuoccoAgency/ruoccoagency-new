import { content } from "@/content/it";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_abstract_tech_background_with_neon_lines.png";
import { FloatingShape } from "@/components/ui/FloatingShape";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-1000">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-10" />
        <motion.div style={{ y }} className="w-full h-full">
          <img 
            src={heroBg} 
            alt="Abstract Tech Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        
        {/* Floating 3D Shapes */}
        <FloatingShape type="circle" size={300} color="bg-primary" className="top-1/4 -left-20 opacity-20 blur-[100px]" duration={10} />
        <FloatingShape type="circle" size={400} color="bg-secondary" className="bottom-0 -right-20 opacity-20 blur-[120px]" duration={15} delay={2} />
        <FloatingShape type="ring" size={100} color="border-primary" className="top-1/3 right-[10%] opacity-20" duration={20} delay={1} />
        <FloatingShape type="ring" size={60} color="border-secondary" className="bottom-1/3 left-[15%] opacity-20" duration={18} delay={3} />
      </div>

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 z-10 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {content.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white mb-6 leading-tight text-gradient-logo"
            style={{ transformStyle: "preserve-3d" }}
          >
            {content.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {content.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all relative overflow-hidden group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              <span className="relative z-10 flex items-center">
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
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {content.hero.benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2 text-sm text-muted-foreground/80"
                whileHover={{ scale: 1.05, color: "white" }}
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
