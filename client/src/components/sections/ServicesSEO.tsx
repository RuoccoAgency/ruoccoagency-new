import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Monitor, Cpu, MessageSquare, CalendarCheck, Mail } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const icons = [Monitor, Cpu, MessageSquare, CalendarCheck, Mail];

export function ServicesSEO() {
  const { content } = useLanguage();

  if (!content.servicesSEO) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {content.servicesSEO.items.map((item: { title: string; description: string }, index: number) => {
            const Icon = icons[index % icons.length];
            
            // Bento Grid logic: 
            // 1st item: large (2 cols)
            // 2nd item: small (1 col)
            // 3rd item: small (1 col)
            // 4th item: small (1 col)
            // 5th item: large (2 cols on md, 1 col on lg... actually let's make 5th item 2 cols on md, 1 col on lg to fit 3 cols, or maybe item 1 is 2 cols, item 2 is 1 col, item 3 is 1 col, item 4 is 1 col, item 5 is 2 cols -> total 3+3=6 blocks... wait. 2+1=3. 1+1+1=3. But we have 5 items. 2+1=3. 1+1+2=4? Let's use standard bento:
            // 0: span 2, 1: span 1
            // 2: span 1, 3: span 1, 4: span 1
            let colSpan = "col-span-1";
            if (index === 0) colSpan = "md:col-span-2 lg:col-span-2";
            if (index === 4) colSpan = "md:col-span-2 lg:col-span-1";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={colSpan}
              >
                <SpotlightCard className="h-full p-8 group border-white/5 bg-card/40 backdrop-blur-md flex flex-col justify-between">
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                      <Icon className="w-7 h-7 text-white/90" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
                      {item.title}
                    </h2>
                    <p className="text-white/60 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Decorative faint icon in background */}
                  <Icon className="absolute -bottom-6 -right-6 w-48 h-48 text-white/[0.02] transform -rotate-12 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-secondary/10 border border-secondary/20 shadow-[0_0_30px_rgba(var(--secondary),0.1)]">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <p className="text-lg md:text-xl font-medium text-white/90">
              {content.servicesSEO.footer}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
