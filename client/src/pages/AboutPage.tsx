import { useLanguage } from "@/hooks/useLanguage";
import { Navbar } from "@/components/sections/Navbar";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 relative">
      <SEO 
        title={`${content.about.title} | RuoccoAgency`}
        description={content.about.bio}
        canonical="/chi-sono"
      />
      
      {/* Premium Visual Layers */}
      <div className="noise-bg" />

      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="orb w-[500px] h-[500px] bg-primary/20 -top-48 -left-48" />
        <div className="orb w-[400px] h-[400px] bg-secondary/20 top-1/2 -right-24" />
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
            <About />
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
