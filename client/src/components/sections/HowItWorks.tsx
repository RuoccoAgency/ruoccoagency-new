import { content } from "@/content/it";
import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-black/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-white mb-4 text-gradient-logo"
          >
            {content.howItWorks.title}
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {content.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors ${
                     index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <h3 className="text-xl font-bold text-white mb-2">
                      <span className="text-primary mr-2">0{index + 1}.</span>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(124,58,237,0.5)] z-10" />
                  <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
