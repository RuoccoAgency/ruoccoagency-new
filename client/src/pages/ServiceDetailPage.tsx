import { useEffect, useRef } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { useLanguage } from "@/hooks/useLanguage";
import { useRoute, useLocation } from "wouter";
import { motion, useScroll, useMotionValue, useMotionValueEvent } from "framer-motion";
import { Bot, MessageSquare, Phone, Globe, LucideIcon, ArrowRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { SEO } from "@/components/SEO";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  MessageSquare,
  Phone,
  Globe,
};

export default function ServiceDetailPage() {
  const [, params] = useRoute("/services/:slug");
  const [, setLocation] = useLocation();
  const { content } = useLanguage();
  const slug = params?.slug;

  const service = content.services.items.find((s: any) => s.slug === slug);

  // Timeline animation logic
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const scaleY = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const currentMax = scaleY.get();
    if (latest > currentMax) {
      scaleY.set(latest);
    }
  });


  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4 text-white">{content.services.detail.notFound}</h1>
        <p className="text-muted-foreground mb-8">{content.services.detail.notFoundDescription}</p>
        <Button onClick={() => setLocation("/")}>{content.common.backToHome}</Button>
      </div>
    );
  }

  const Icon = iconMap[service.icon];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 relative">
      <SEO 
        title={service.title}
        description={service.shortDescription}
        canonical={`/services/${service.slug}`}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.shortDescription,
            "provider": {
              "@type": "Organization",
              "name": "RuoccoAgency",
              "url": "https://ruoccoagency.com"
            },
            "areaServed": "Italy",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Automation Services",
              "itemListElement": service.features.map((f: string, i: number) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": f
                }
              }))
            }
          })}
        </script>
      </SEO>
      <div className="fixed inset-0 z-0 pointer-events-none animate-gradient-bg opacity-40" />
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-32 pb-24">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
              <button onClick={() => setLocation("/")} className="hover:text-white transition-colors">
                {content.nav.links.find((l: any) => l.href === "#home")?.label || "Home"}
              </button>
              <span>/</span>
              <span className="text-primary">{service.title}</span>
            </div>

            <button
              onClick={() => setLocation("/")}
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group"
            >
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {content.common.backToHome}
            </button>

            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  {content.common.servicePremium}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 text-gradient-logo leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all"
                    onClick={() => {
                      const contactEl = document.getElementById("contact");
                      if (contactEl) {
                        contactEl.scrollIntoView({ behavior: "smooth" });
                      } else {
                        setLocation("/#contact");
                      }
                    }}
                  >
                    {(service as any).ctaText || content.common.demo}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
                  {Icon && <Icon className="h-32 w-32 text-white/80 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />}

                  {/* Floating Elements */}
                  <div className="absolute top-10 left-10 p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl animate-float">
                    <div className="h-2 w-16 bg-white/20 rounded-full mb-2" />
                    <div className="h-2 w-24 bg-white/10 rounded-full" />
                  </div>
                  <div className="absolute bottom-10 right-10 p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl animate-float" style={{ animationDelay: "2s" }}>
                    <div className="h-2 w-20 bg-primary/40 rounded-full mb-2" />
                    <div className="h-2 w-12 bg-white/10 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Process Steps - Matches HowItWorks timeline style */}
            <div className="mb-24">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-16 text-center">{content.howItWorks.title}</h2>
              </Reveal>
              <div ref={containerRef} className="relative max-w-5xl mx-auto">
                {/* Vertical Line for Desktop - Animated */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block bg-white/5">
                  <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-b from-secondary via-primary to-secondary shadow-[0_0_30px_hsla(var(--primary),1),0_0_60px_hsla(var(--primary),0.8)] drop-shadow-[0_0_15px_hsla(var(--secondary),1)]"
                  >
                    <div className="absolute inset-0 bg-primary/50 blur-md -z-10" />
                  </motion.div>
                </div>

                <div className="space-y-12 md:space-y-24">
                  {service.processSteps.map((step: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 50 }}
                      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                    >
                      {/* Content Card */}
                      <div className="flex-1 w-full text-center md:text-left">
                        <div className={`group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/[0.07] backdrop-blur-sm shadow-lg hover:shadow-primary/10 ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                          }`}>
                          <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} justify-center md:justify-start`}>
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                              <span className="text-lg font-bold text-primary font-display">{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                              {step.title}
                            </h3>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>

                      {/* Center Node */}
                      <div className="relative flex items-center justify-center w-12 h-12 shrink-0 z-20">
                        <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(124,58,237,0.5)] z-10 ring-4 ring-background" />
                        <div className="absolute w-12 h-12 rounded-full bg-primary/20 animate-pulse" />
                      </div>

                      {/* Empty Space for alignment */}
                      <div className="flex-1 hidden md:block" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>


            {/* Bottom CTA */}
            <div className="text-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-12 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                  {content.services.detail.ctaTitle}
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  {typeof content.services.detail.ctaDescription === 'function'
                    ? content.services.detail.ctaDescription(service.title)
                    : content.services.detail.ctaDescription}
                </p>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 text-base font-bold shadow-lg"
                  onClick={() => {
                    const contactEl = document.getElementById("contact");
                    if (contactEl) {
                      contactEl.scrollIntoView({ behavior: "smooth" });
                    } else {
                      setLocation("/#contact");
                    }
                  }}
                >
                  {content.services.detail.ctaButton}
                </Button>
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
