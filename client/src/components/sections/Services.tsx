import { content } from "@/content/it";
import { Bot, MessageSquare, Phone, Globe, LucideIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { useLocation } from "wouter";
import { servicesData } from "@/content/services";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  MessageSquare,
  Phone,
  Globe,
};

export function Services() {
  const [, setLocation] = useLocation();

  // Match existing services content to the detailed data to get slugs
  const servicesWithSlugs = content.services.items.map((item, index) => {
    // We assume the order is the same or we map by title. 
    // For simplicity, let's map by index as they are in same order in both files
    return {
      ...item,
      slug: servicesData[index]?.slug || "chatbot-ia" // Fallback
    };
  });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
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
          {servicesWithSlugs.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem
                key={index}
                className="group p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/50 transition-all duration-500 hover:bg-white/[0.08] backdrop-blur-md hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col relative overflow-hidden"
              >
                {/* Decorative background glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-colors duration-500" />
                
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-white/5">
                  <Icon className="h-7 w-7 text-white group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed flex-grow text-base">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(140,82,255,0.8)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setLocation(`/services/${service.slug}`)}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-all group/btn mt-auto uppercase tracking-widest text-xs"
                >
                  Dettagli Servizio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                </button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
