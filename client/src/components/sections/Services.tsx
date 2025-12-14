import { content } from "@/content/it";
import { Bot, MessageSquare, Phone, Globe, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { NeonTiltCard } from "@/components/ui/NeonTiltCard";
import { SectionPortal } from "@/components/ui/SectionPortal";
import { FloatingShape } from "@/components/ui/FloatingShape";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  MessageSquare,
  Phone,
  Globe,
};

export function Services() {
  return (
    <SectionPortal id="services" className="py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <FloatingShape type="circle" size={400} color="bg-primary" className="-top-20 -right-20 opacity-10 blur-[100px]" duration={20} />
      <FloatingShape type="ring" size={200} color="border-secondary" className="bottom-20 -left-20 opacity-10" duration={25} delay={2} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-white mb-4 text-gradient-logo"
          >
            {content.services.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            {content.services.subtitle}
          </motion.p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {content.services.items.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem
                key={index}
                className="h-full"
              >
                <NeonTiltCard className="h-full">
                  <div className="group p-8 h-full flex flex-col bg-transparent">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mt-auto">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                          <div className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </NeonTiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionPortal>
  );
}
