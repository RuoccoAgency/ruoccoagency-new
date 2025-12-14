import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { servicesData } from "@/content/services";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Bot, MessageSquare, Phone, Globe, LucideIcon, ArrowRight } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  MessageSquare,
  Phone,
  Globe,
};

export default function ServicesPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 relative">
      <div className="fixed inset-0 z-0 pointer-events-none animate-gradient-bg opacity-40" />
      <ParticlesBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-32 pb-24 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold font-display text-white mb-6 text-gradient-logo"
              >
                I Nostri Servizi
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground"
              >
                Soluzioni tecnologiche avanzate progettate per automatizzare i processi, ridurre i costi e scalare il tuo business.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {servicesData.map((service, index) => {
                const Icon = iconMap[service.icon];
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/[0.07] backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
                  >
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                      {Icon && <Icon className="h-7 w-7 text-primary" />}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {service.shortDescription}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setLocation(`/services/${service.slug}`)}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group/btn mt-auto"
                    >
                      Scopri di più
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
