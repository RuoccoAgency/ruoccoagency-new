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
