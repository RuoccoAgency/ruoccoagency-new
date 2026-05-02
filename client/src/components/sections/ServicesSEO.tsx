import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function ServicesSEO() {
  const { content } = useLanguage();

  if (!content.servicesSEO) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {content.servicesSEO.items.map((item: { title: string; description: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-premium border border-white/5 relative group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h2>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-8 py-4 rounded-full bg-secondary/10 border border-secondary/20">
            <p className="text-lg md:text-xl font-semibold text-white">
              {content.servicesSEO.footer}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
