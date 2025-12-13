import { content } from "@/content/it";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_abstract_tech_background_with_neon_lines.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-10" />
        <img 
          src={heroBg} 
          alt="Abstract Tech Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-8 backdrop-blur-md hover:border-primary/50 transition-colors cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold">
              {content.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white mb-8 leading-tight"
          >
            {content.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <MagneticButton 
              className="w-full sm:w-auto bg-gradient-brand hover:opacity-90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all flex items-center justify-center gap-2"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {content.hero.ctaPrimary}
              <ArrowRight className="h-5 w-5" />
            </MagneticButton>
            
            <MagneticButton 
              className="w-full sm:w-auto border border-white/20 hover:bg-white/5 text-white rounded-full px-8 h-14 text-lg font-medium backdrop-blur-sm flex items-center justify-center gap-2 transition-all hover:border-secondary/50"
              onClick={() => window.open("https://wa.me/393806413543", "_blank")}
            >
              <MessageCircle className="h-5 w-5 text-secondary" />
              {content.hero.ctaSecondary}
            </MagneticButton>
          </motion.div>

          {/* Social Proof Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-t border-white/10 pt-8 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {content.hero.socialProof.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                <span className="text-white/80 font-medium tracking-wide uppercase text-sm">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
