import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import profileImage from "@assets/Immagine_WhatsApp_2025-04-08_ore_17.54.43_6325596d_1765660889615.jpg";
import { Award, Briefcase, Zap } from "lucide-react";

export function About() {
  const { content } = useLanguage();

  const stats = [
    { icon: Briefcase, label: "Progetti", value: "50+" },
    { icon: Zap, label: "Automazioni", value: "20+" },
    { icon: Award, label: "Esperienza", value: "5 Anni" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden glass-premium p-2">
              <img
                src={profileImage}
                alt={content.about.name}
                className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative Frame Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-secondary/30 rounded-bl-3xl" />
          </motion.div>

          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-display text-white mb-6 text-gradient-logo"
            >
              {content.about.title}
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold text-white mb-4"
            >
              {content.about.name}
              <span className="block text-lg font-medium text-primary mt-1">
                {content.about.role}
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mb-10 text-justify"
            >
              {content.about.bio}
            </motion.p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-2xl glass-premium text-center"
                >
                  <stat.icon className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
