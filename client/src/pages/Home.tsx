import { useEffect } from "react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyItWorks } from "@/components/sections/WhyItWorks";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { TechStack } from "@/components/sections/TechStack";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { SEO } from "@/components/SEO";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 relative">
      <SEO 
        title="RuoccoAgency | Automazioni e Assistenti AI"
        description="Trasformiamo richieste in clienti, 24/7. Assistenti AI, Chatbot e Siti Web Moderni per il tuo business."
        canonical="/"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RuoccoAgency",
            "url": "https://ruoccoagency.com",
            "logo": "https://ruoccoagency.com/favicon.png",
            "description": "Agenzia specializzata in automazioni IA, assistenti virtuali e sviluppo web moderno.",
            "founder": {
              "@type": "Person",
              "name": "Gianluca Ruocco"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+39 380 641 3543",
              "contactType": "customer service",
              "email": "ruoccoagency@gmail.com"
            }
          })}
        </script>
      </SEO>
      {/* Premium Visual Layers */}
      <div className="noise-bg" />

      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="orb w-[500px] h-[500px] bg-primary/20 -top-48 -left-48" />
        <div className="orb w-[400px] h-[400px] bg-secondary/20 top-1/2 -right-24" />
        <div className="orb w-[300px] h-[300px] bg-accent/20 -bottom-24 left-1/4" />
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none animate-gradient-bg opacity-30" />
      <ParticlesBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <About />
          <Services />
          <HowItWorks />
          <WhyItWorks />
          <ROICalculator />
          <CaseStudies />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
