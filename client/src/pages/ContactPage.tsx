import { useLanguage } from "@/hooks/useLanguage";
import { Navbar } from "@/components/sections/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 relative">
      <SEO 
        title={`${content.contact.title} | RuoccoAgency`}
        description={content.contact.subtitle}
        canonical="/contatti"
      />
      
      {/* Premium Visual Layers */}
      <div className="noise-bg" />

      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="orb w-[500px] h-[500px] bg-secondary/20 -bottom-48 -right-48" />
        <div className="orb w-[400px] h-[400px] bg-primary/20 top-1/4 -left-24" />
      </div>

      <ParticlesBackground />

      <div className="relative z-10 pt-20">
        <Navbar />
        <main>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Contact />
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
