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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {content.caseStudies.items.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-all cursor-pointer shadow-2xl shadow-black/50"
                onClick={() => {
                  if (item.url) {
                    window.open(item.url, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                {item.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-top transition-transform duration-1000 group-hover:scale-110 group-hover:bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}

                {/* Overlay with glass effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-center mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/20 backdrop-blur-xl px-4 py-1.5 text-sm font-semibold"
                    >
                      {item.badge}
                    </Badge>

                    {item.location && (
                      <span className="text-sm text-white/80 font-medium bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-xl border border-white/10">
                        📍 {item.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-3xl md:text-4xl font-extrabold text-primary text-glow tracking-tight">
                    {item.stat}
                  </p>
                  
                  {/* View Project indicator */}
                  <div className="mt-6 flex items-center gap-2 text-white/0 group-hover:text-white/100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-bold uppercase tracking-widest">Vedi Progetto</span>
                    <div className="h-[1px] w-12 bg-primary" />
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full pointer-events-none transform skew-x-12" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}