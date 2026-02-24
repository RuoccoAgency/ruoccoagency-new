import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

export function CaseStudies() {
  const { content } = useLanguage();
  
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {content.caseStudies.items.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative h-80 rounded-[2rem] overflow-hidden border border-white/10 bg-[#0A0A0B] cursor-pointer shadow-2xl transition-all duration-500 hover:border-primary/40"
                onClick={() => {
                  if (item.url) {
                    window.open(item.url, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                {item.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}

                {/* Elegant Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-center mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary border-none text-xs uppercase tracking-widest px-3 py-1 font-bold backdrop-blur-md"
                    >
                      {item.badge}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-3xl font-black text-primary italic tracking-tight">
                    {item.stat}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-primary transition-colors duration-300">
                    <span className="text-xs font-bold uppercase tracking-widest">Visualizza Progetto</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}