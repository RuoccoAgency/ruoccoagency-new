import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
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

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { content, language, setLanguage } = useLanguage();

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
    } else {
      if (href.startsWith("#")) {
        setLocation("/" + href);
      } else {
        setLocation(href);
      }
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

              {/* Mobile Language Switcher */}
              <div className="flex gap-4 py-2 border-b border-white/5">
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
