import { content } from "@/content/it";
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { NeonTiltCard } from "@/components/ui/NeonTiltCard";
import { SectionPortal } from "@/components/ui/SectionPortal";

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const [maxProgress, setMaxProgress] = useState(0);
  const scaleY = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > maxProgress) {
      setMaxProgress(latest);
      scaleY.set(latest);
    }
  });

  return (
    <SectionPortal id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-white mb-4 text-gradient-logo"
          >
            {content.howItWorks.title}
          </motion.h2>
        </div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Vertical Line for Desktop - Animated Liquid Neon */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block bg-white/5">
             <motion.div 
               style={{ scaleY, originY: 0 }}
               className="absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-b from-secondary via-primary to-secondary shadow-[0_0_20px_hsla(var(--primary),0.8),0_0_40px_hsla(var(--primary),0.5)] drop-shadow-[0_0_10px_hsla(var(--secondary),0.8)]"
             >
                {/* Neon Bloom Core */}
                <div className="absolute inset-0 bg-white/50 blur-[1px]" />
                <div className="absolute inset-0 bg-primary/30 blur-sm -z-10" />
             </motion.div>
          </div>

          <div className="space-y-12 md:space-y-24">
            {content.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, rotateY: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.8, type: "spring", stiffness: 40 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full text-center md:text-left perspective-1000">
                  <NeonTiltCard>
                    <div className={`group p-8 h-full bg-transparent ${
                       index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}>
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} justify-center md:justify-start`}>
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                           <span className="text-lg font-bold text-primary font-display">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </NeonTiltCard>
                </div>

                {/* Center Node */}
                <div className="relative flex items-center justify-center w-12 h-12 shrink-0 z-20">
                  {/* Active State Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                    className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(124,58,237,0.8)] z-10 ring-4 ring-background" 
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute w-12 h-12 rounded-full bg-primary/20" 
                  />
                </div>

                {/* Empty Space for alignment - matches flex-1 of content */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionPortal>
  );
}
