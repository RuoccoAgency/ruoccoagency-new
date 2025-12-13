import { content } from "@/content/it";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function CaseStudies() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-white mb-4"
          >
            {content.caseStudies.title}
          </motion.h2>
          <p className="text-muted-foreground">{content.caseStudies.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.caseStudies.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-64 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <Badge variant="secondary" className="mb-3 bg-primary/20 text-primary hover:bg-primary/30 border-primary/20">
                  {item.badge}
                </Badge>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-2xl font-bold text-primary text-glow">{item.stat}</p>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
