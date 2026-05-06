import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Bot, MessageSquare, Phone, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "chatbot-ia": <Bot className="w-4 h-4 text-primary" />,
  "whatsapp-automation": <MessageSquare className="w-4 h-4 text-primary" />,
  "voice-agents": <Phone className="w-4 h-4 text-primary" />,
  "web-development": <Globe className="w-4 h-4 text-primary" />,
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { content, language, setLanguage } = useLanguage();
  const servicesRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If it's an internal route starting with '/', navigate directly
    if (href.startsWith("/") && !href.startsWith("/#")) {
      setLocation(href);
      setMobileMenuOpen(false);
      return;
    }

    try {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
        setMobileMenuOpen(false);
      } else {
        if (href.startsWith("#")) {
          setLocation("/" + href);
        } else {
          setLocation(href);
        }
        setMobileMenuOpen(false);
      }
    } catch (err) {
      // Fallback for cases where querySelector fails (e.g. invalid selector)
      setLocation(href);
      setMobileMenuOpen(false);
    }
  };

  const openServicesDropdown = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setServicesDropdownOpen(true);
  };

  const closeServicesDropdown = () => {
    hoverTimeout.current = setTimeout(() => setServicesDropdownOpen(false), 120);
  };

  // Build service items from the content services data
  const services = content.services.items.map((s: { slug: string; title: string; shortDescription: string }) => ({
    slug: s.slug,
    title: s.title,
    short: s.shortDescription,
  }));

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex items-center gap-3 text-2xl font-bold font-display tracking-tighter text-white hover:text-primary transition-colors group text-gradient-logo"
        >
          <motion.img
            animate={{
              filter: ["drop-shadow(0 0 8px rgba(140,82,255,0.4))", "drop-shadow(0 0 16px rgba(140,82,255,0.7))", "drop-shadow(0 0 8px rgba(140,82,255,0.4))"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src={logo}
            alt="RuoccoAgency Logo"
            className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
          />
          {content.nav.logo}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {content.nav.links.map((link: { label: string; href: string }) => {
            // Intercept the "Servizi" link and replace it with a dropdown
            if (link.href === "#services" || link.href === "/#services") {
              return (
                <div
                  key={link.label}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={openServicesDropdown}
                  onMouseLeave={closeServicesDropdown}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
                    onClick={() => setServicesDropdownOpen((v) => !v)}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        servicesDropdownOpen ? "rotate-180" : ""
                      )}
                    />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </button>

                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
                        onMouseEnter={openServicesDropdown}
                        onMouseLeave={closeServicesDropdown}
                      >
                        {/* Decorative top accent */}
                        <div className="h-0.5 w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
                        <div className="p-2">
                          {services.map((svc: { slug: string; title: string; short: string }) => (
                            <button
                              key={svc.slug}
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                setLocation(`/services/${svc.slug}`);
                              }}
                              className="w-full flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors text-left group/item"
                            >
                              <span className="mt-0.5 p-1.5 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                                {SERVICE_ICONS[svc.slug]}
                              </span>
                              <span className="flex flex-col min-w-0">
                                <span className="text-sm font-semibold text-white leading-snug">
                                  {svc.title}
                                </span>
                                <span className="text-xs text-muted-foreground leading-snug mt-0.5 line-clamp-2">
                                  {svc.short}
                                </span>
                              </span>
                            </button>
                          ))}
                          {/* View all shortcut */}
                          <div className="mt-1 pt-2 border-t border-white/5">
                            <a
                              href="#services"
                              onClick={(e) => { scrollToSection(e, "#services"); setServicesDropdownOpen(false); }}
                              className="flex items-center justify-center gap-1 w-full py-2 rounded-xl text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
                            >
                              {language === "it" ? "Vedi tutti i servizi" : "View all services"} →
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            );
          })}

          <Button
            variant="default"
            className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-6 shadow-[0_0_15px_rgba(140,82,255,0.3)] hover:shadow-[0_0_25px_rgba(140,82,255,0.5)] transition-all"
            onClick={(e) => {
              scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, "/contatti");
            }}
          >
            {content.nav.cta}
          </Button>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-colors">
                <span className="text-xl leading-none">{language === "it" ? "🇮🇹" : "🇬🇧"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 bg-background/95 backdrop-blur-md border-white/10">
              <DropdownMenuItem
                onClick={() => setLanguage("it")}
                className="cursor-pointer hover:bg-white/5 focus:bg-white/10 transition-colors py-2"
              >
                <span className="mr-3 text-xl leading-none">🇮🇹</span>
                <span className="font-medium">{content.nav.languages?.it || "Italiano"}</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("en")}
                className="cursor-pointer hover:bg-white/5 focus:bg-white/10 transition-colors py-2"
              >
                <span className="mr-3 text-xl leading-none">🇬🇧</span>
                <span className="font-medium">{content.nav.languages?.en || "English"}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {content.nav.links.map((link: { label: string; href: string }) => {
                if (link.href === "#services" || link.href === "/#services") {
                  return (
                    <div key={link.label}>
                      <button
                        className="w-full flex items-center justify-between text-lg font-medium text-white/80 hover:text-white py-3 border-b border-white/5"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            mobileServicesOpen ? "rotate-180" : ""
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 py-2 pl-2">
                              {services.map((svc: { slug: string; title: string }) => (
                                <button
                                  key={svc.slug}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileServicesOpen(false);
                                    setLocation(`/services/${svc.slug}`);
                                  }}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-left transition-colors"
                                >
                                  <span className="p-1.5 rounded-lg bg-primary/10">
                                    {SERVICE_ICONS[svc.slug]}
                                  </span>
                                  <span className="text-sm font-medium text-white/80">{svc.title}</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-medium text-white/80 hover:text-white py-3 border-b border-white/5"
                  >
                    {link.label}
                  </a>
                );
              })}

              {/* Mobile Language Switcher */}
              <div className="flex gap-4 py-2 border-b border-white/5 mt-1">
                <Button
                  variant="ghost"
                  className={cn("flex-1 justify-start", language === "it" && "bg-white/10")}
                  onClick={() => { setLanguage("it"); setMobileMenuOpen(false); }}
                >
                  <span className="mr-2 text-xl leading-none">🇮🇹</span> {content.nav.languages?.it || "Italiano"}
                </Button>
                <Button
                  variant="ghost"
                  className={cn("flex-1 justify-start", language === "en" && "bg-white/10")}
                  onClick={() => { setLanguage("en"); setMobileMenuOpen(false); }}
                >
                  <span className="mr-2 text-xl leading-none">🇬🇧</span> {content.nav.languages?.en || "English"}
                </Button>
              </div>

              <Button
                className="w-full bg-primary mt-4"
                onClick={(e) => {
                  scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, "/contatti");
                }}
              >
                {content.nav.cta}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
