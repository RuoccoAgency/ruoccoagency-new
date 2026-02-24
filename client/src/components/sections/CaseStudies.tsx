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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.caseStudies.items.map((item, index) => (
            <StaggerItem key={index}>
              <div
                className="group relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition cursor-pointer hover:scale-[1.02]"
                onClick={() => {
                  if (item.url) {
                    window.open(item.url, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                {item.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/20 backdrop-blur-md"
                    >
                      {item.badge}
                    </Badge>

                    {item.location && (
                      <span className="text-xs text-white/70 font-medium bg-black/50 px-2 py-1 rounded-md backdrop-blur-md">
                        📍 {item.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-2xl font-bold text-primary text-glow">
                    {item.stat}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}