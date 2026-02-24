import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Clock, Zap, Target, LucideIcon } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

const iconMap: Record<number, LucideIcon> = {
  0: Clock,
  1: Zap,
  2: Target,
};

export function WhyItWorks() {
  const { content } = useLanguage();
  
  return (
    <section id="why-it-works" className="py-24 bg-gradient-to-b from-background to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-white mb-4 text-gradient-logo"
          >
            {content.whyItWorks.title}
          </motion.h2>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.whyItWorks.cards.map((card, index) => {
            const Icon = iconMap[index];
            return (
              <StaggerItem
                key={index}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/[0.07] backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 ring-1 ring-primary/20 shadow-[0_0_20px_rgba(124,58,237,0.1)] group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/20">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
