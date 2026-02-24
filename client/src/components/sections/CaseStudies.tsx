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
          <p className="text-muted-foreground">
            {content.caseStudies.subtitle}
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.caseStudies.items.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative h-64 rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0B] cursor-pointer"
                onClick={() => {
                  if (item.url) {
                    window.open(item.url, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                {item.image && (
                  <div
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <div className="flex justify-between items-center mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary border-none text-[10px] uppercase tracking-wider px-2 py-0"
                    >
                      {item.badge}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-0.5 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xl font-black text-primary italic">
                    {item.stat}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}