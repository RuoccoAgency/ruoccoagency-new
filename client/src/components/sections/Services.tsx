import { content } from "@/content/it";
import { Bot, MessageSquare, Phone, Globe, Zap, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  MessageSquare,
  Phone,
  Globe,
  Zap,
};

export function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-background">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-display text-white mb-6"
          >
            {content.services.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xl"
          >
            {content.services.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.services.items.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:bg-white/[0.07] backdrop-blur-sm relative overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-brand p-[1px] mb-8 inline-block shadow-[0_0_20px_rgba(124,58,237,0.2)] group-hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-shadow">
                    <div className="h-full w-full rounded-2xl bg-black flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-brand transition-all">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
