import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider, useLanguage } from "@/hooks/useLanguage";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import LegalNotice from "@/pages/LegalNotice";
import Disclaimer from "@/pages/Disclaimer";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { useEffect } from "react";

function RouteWrapper({ component: Component }: { component: any }) {
  const { language } = useLanguage();
  const [location] = useLocation();

  // This hook ensures that when language changes, the component re-renders
  // by forcing a re-mount of the component through React key (if needed)
  // or just by consuming the context.

  return <Component key={`${language}-${location}`} />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <RouteWrapper component={Home} />} />
      <Route path="/services/:slug" component={() => <RouteWrapper component={ServiceDetailPage} />} />
      <Route path="/privacy-policy" component={() => <RouteWrapper component={PrivacyPolicy} />} />
      <Route path="/terms-of-service" component={() => <RouteWrapper component={TermsOfService} />} />
      <Route path="/cookie-policy" component={() => <RouteWrapper component={CookiePolicy} />} />
      <Route path="/legal-notice" component={() => <RouteWrapper component={LegalNotice} />} />
      <Route path="/disclaimer" component={() => <RouteWrapper component={Disclaimer} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <ScrollToTop />
          <Router />
          <Toaster />
          <CookieBanner />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
