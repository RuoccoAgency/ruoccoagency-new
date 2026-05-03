import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { motion, AnimatePresence } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider, useLanguage } from "@/hooks/useLanguage";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import LegalNotice from "@/pages/LegalNotice";
import Disclaimer from "@/pages/Disclaimer";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { LiveChatDemo } from "@/components/ui/LiveChatDemo";
import { useEffect } from "react";

function RouteWrapper({ component: Component }: { component: any }) {
  const { language } = useLanguage();
  const [location] = useLocation();

  return (
    <motion.div
      key={`${language}-${location}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Component />
    </motion.div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <RouteWrapper component={Home} />} />
      <Route path="/services/:slug" component={() => <RouteWrapper component={ServiceDetailPage} />} />
      <Route path="/privacy-policy" component={() => <RouteWrapper component={PrivacyPolicy} />} />
      <Route path="/termini-servizio" component={() => <RouteWrapper component={TermsOfService} />} />
      <Route path="/cookie-policy" component={() => <RouteWrapper component={CookiePolicy} />} />
      <Route path="/note-legali" component={() => <RouteWrapper component={LegalNotice} />} />
      <Route path="/disclaimer" component={() => <RouteWrapper component={Disclaimer} />} />
      <Route path="/chi-sono" component={() => <RouteWrapper component={AboutPage} />} />
      <Route path="/casi-studio" component={() => <RouteWrapper component={CaseStudiesPage} />} />
      <Route path="/contatti" component={() => <RouteWrapper component={ContactPage} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <ScrollToTop />
            <Router />
            <Toaster />
            <LiveChatDemo />
            <CookieBanner />
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
