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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {content.caseStudies.items.map((item, index) => (
            <StaggerItem key={index} className={index === 0 ? "md:col-span-2" : ""}>
              <motion.div
                whileHover={{ 
                  y: -15, 
                  rotateX: 2, 
                  rotateY: -2,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                initial={{ opacity: 0, y: 50, perspective: 1000 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative h-[550px] rounded-[2.5rem] overflow-hidden border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl transition-all cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-primary/20 hover:border-primary/50"
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => {
                  if (item.url) {
                    window.open(item.url, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                {item.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-top transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    style={{ 
                      backgroundImage: `url(${item.image})`,
                      transform: "translateZ(-10px)"
                    }}
                  />
                )}

                {/* Depth layers for 3D effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
                
                {/* Content with 3D translation */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-10 z-20 transform transition-all duration-500 group-hover:translate-z-20"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <Badge
                      variant="secondary"
                      className="bg-primary/30 text-primary-foreground hover:bg-primary/40 border-primary/30 backdrop-blur-2xl px-6 py-2 text-sm font-bold uppercase tracking-widest"
                    >
                      {item.badge}
                    </Badge>

                    {item.location && (
                      <span className="text-sm text-white/90 font-bold bg-white/10 px-4 py-2 rounded-full backdrop-blur-2xl border border-white/10 shadow-inner">
                        📍 {item.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black text-white mb-3 leading-none group-hover:text-primary transition-colors drop-shadow-2xl">
                    {item.title}
                  </h3>
                  <p className="text-4xl md:text-6xl font-black text-primary text-glow-lg tracking-tighter italic">
                    {item.stat}
                  </p>
                  
                  {/* View Project indicator */}
                  <div className="mt-10 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                    <span className="text-sm font-black uppercase tracking-[0.3em] text-white">Esplora Progetto</span>
                    <motion.div 
                      animate={{ x: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="h-[2px] w-20 bg-primary shadow-[0_0_15px_rgba(var(--primary),0.8)]" 
                    />
                  </div>
                </div>

                {/* 3D Reflection/Glass effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 bg-gradient-to-br from-white via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}