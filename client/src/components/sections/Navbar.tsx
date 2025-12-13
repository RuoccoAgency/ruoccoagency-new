import { useState, useEffect } from "react";
import { content } from "@/content/it";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@assets/Progetto_senza_titolo_(8)_(1)_1765658448175.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

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
          className="flex items-center gap-3 text-2xl font-bold font-display tracking-tighter text-white hover:text-primary transition-colors group"
        >
          <img 
            src={logo} 
            alt="RuoccoAgency Logo" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(140,82,255,0.5)] transition-transform group-hover:scale-110" 
          />
          {content.nav.logo}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {content.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-6 shadow-[0_0_15px_rgba(140,82,255,0.3)] hover:shadow-[0_0_25px_rgba(140,82,255,0.5)] transition-all"
            onClick={(e) => {
              scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact");
            }}
          >
            {content.nav.cta}
          </Button>
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
            <div className="flex flex-col p-4 gap-4">
              {content.nav.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-white/80 hover:text-white py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                className="w-full bg-primary mt-4"
                onClick={(e) => {
                  scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact");
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
