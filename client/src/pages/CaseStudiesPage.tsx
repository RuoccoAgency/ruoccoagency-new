import { useLanguage } from "@/hooks/useLanguage";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ArrowRight, ExternalLink, Lock } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { SEO } from "@/components/SEO";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function CaseStudiesPage() {
  const { content, language } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = content.caseStudies.items;
  // First 4 items are actual projects, the 5th is coming soon
  const projects = items.slice(0, 4);
  const comingSoon = items[4];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative">
      <SEO 
        title={`${content.caseStudies.title} | RuoccoAgency`}
        description={content.caseStudies.subtitle}
        canonical="/casi-studio"
      />
      <div className="noise-bg" />
      <div className="fixed inset-0 z-0 pointer-events-none animate-gradient-bg opacity-20" />

      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-32 pb-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 mb-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium text-primary text-sm font-semibold mb-6"
            >
              <span>PORTFOLIO</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold font-display text-white mb-6 text-gradient-logo"
            >
              {content.caseStudies.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              {content.caseStudies.subtitle}
            </motion.p>
          </section>

          {/* Projects Grid - Alternating Layout */}
          <section className="container mx-auto px-4 space-y-32 mb-32">
            {projects.map((project: any, index: number) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col gap-12 md:gap-24 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Image Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 relative group"
                  >
                    <SpotlightCard className="p-2 rounded-3xl bg-white/5 border-white/10 w-full aspect-[4/3] overflow-hidden flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-50 mix-blend-overlay" />
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                      />
                    </SpotlightCard>
                  </motion.div>

                  {/* Text Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 flex flex-col justify-center"
                  >
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">{project.badge}</span>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary/20 text-secondary border border-secondary/30">{project.stat}</span>
                      {project.location && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white/70 border border-white/20">{project.location}</span>
                      )}
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                      {project.title}
                    </h2>
                    
                    <div className="space-y-6 mb-10">
                      <div>
                        <h4 className="text-lg font-semibold text-white/90 mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {language === "it" ? "La Sfida" : "The Challenge"}
                        </h4>
                        <p className="text-white/60 leading-relaxed">
                          {project.sfida}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white/90 mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {language === "it" ? "La Soluzione" : "The Solution"}
                        </h4>
                        <p className="text-white/60 leading-relaxed">
                          {project.soluzione}
                        </p>
                      </div>
                    </div>

                    {project.url && (
                      <Magnetic strength={0.1}>
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-white/90 transition-colors w-fit group"
                        >
                          {content.caseStudies.viewProject}
                          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Magnetic>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </section>

          {/* Coming Soon Section */}
          {comingSoon && (
            <section className="container mx-auto px-4 mb-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <SpotlightCard className="w-full max-w-4xl mx-auto p-12 md:p-20 rounded-3xl bg-white/[0.02] border-white/10 text-center flex flex-col items-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                  
                  <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-md">
                    <Lock className="w-10 h-10 text-white/40" />
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    {comingSoon.title}
                  </h3>
                  <p className="text-xl text-white/50 max-w-2xl mx-auto">
                    {language === "it" ? "Stiamo cucinando qualcosa di speciale per il settore matrimoni. Ritorna presto per vederlo in azione." : "We are cooking something special for the wedding sector. Check back soon to see it in action."}
                  </p>
                  
                  <div className="mt-10 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-sm tracking-widest uppercase">
                    {comingSoon.badge}
                  </div>
                </SpotlightCard>
              </motion.div>
            </section>
          )}

          {/* Final CTA */}
          <section className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full rounded-3xl p-1 md:p-px bg-gradient-to-r from-secondary via-accent to-primary"
            >
              <div className="bg-background rounded-[23px] px-8 py-16 md:py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    {language === "it" ? "Vuoi essere il nostro prossimo Caso di Successo?" : "Want to be our next Success Story?"}
                  </h2>
                  <p className="text-xl text-white/70 mb-12">
                    {language === "it" ? "Che tu abbia bisogno di un sito web, di un e-commerce o di un assistente AI, siamo pronti ad ascoltare la tua sfida." : "Whether you need a website, an e-commerce, or an AI assistant, we are ready to hear your challenge."}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Magnetic strength={0.1}>
                      <button
                        onClick={() => setLocation('/contatti')}
                        className="w-full sm:w-auto px-10 py-5 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all group flex items-center justify-center gap-3"
                      >
                        {content.hero.ctaPrimary}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
