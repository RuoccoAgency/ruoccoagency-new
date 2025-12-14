import { content } from "@/content/it";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-white mb-4 text-gradient-logo"
          >
            {content.caseStudies.title}
          </motion.h2>
          <p className="text-muted-foreground">{content.caseStudies.subtitle}</p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.caseStudies.items.map((item, index) => (
            <StaggerItem
              key={index}
              className="group relative h-64 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <Badge variant="secondary" className="mb-3 bg-primary/20 text-primary hover:bg-primary/30 border-primary/20 backdrop-blur-md">
                  {item.badge}
                </Badge>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-2xl font-bold text-primary text-glow">{item.stat}</p>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
