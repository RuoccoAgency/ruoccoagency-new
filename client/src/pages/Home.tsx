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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 relative">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none animate-gradient-bg" />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <HowItWorks />
          <WhyItWorks />
          <CaseStudies />
          <About />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
