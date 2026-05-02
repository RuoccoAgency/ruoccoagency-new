import { useLanguage } from "@/hooks/useLanguage";
import { Bot, MessageSquare, Phone, Globe, LucideIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { useLocation } from "wouter";
import { servicesData } from "@/content/services";
import { Magnetic } from "@/components/ui/Magnetic";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  MessageSquare,
  Phone,
  Globe,
};

export function Services() {
  const [, setLocation] = useLocation();
  const { content } = useLanguage();

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
              <StaggerItem key={index} className="h-full">
                <SpotlightCard className="h-full group p-8 rounded-3xl glass-premium transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col border-white/5">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="h-7 w-7 text-primary relative z-10 animate-float" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient-logo transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-white/60 mb-8 leading-relaxed flex-grow text-lg">
                  {service.shortDescription}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_8px_hsla(var(--secondary),0.6)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Magnetic strength={0.08}>
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                      setLocation(`/services/${service.slug}`);
                    }}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-all group/btn mt-auto py-2 px-4 rounded-full hover:bg-primary/20 border border-transparent hover:border-primary/30"
                  >
                    {content.common.learnMore}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </Magnetic>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
