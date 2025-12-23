import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie_consent");
    if (!cookieConsent) {
      // Small delay to not show immediately on load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-white font-bold mb-2">Informativa sui Cookie</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito web. 
                Alcuni sono essenziali per il funzionamento del sito, mentre altri ci aiutano a capire come lo utilizzi.
                Per maggiori informazioni, consulta la nostra <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.
              </p>
            </div>
            <div className="flex gap-4 shrink-0 w-full md:w-auto">
              <Button 
                variant="outline" 
                className="flex-1 md:flex-none border-white/10 hover:bg-white/10 hover:text-white"
                onClick={handleReject}
              >
                Rifiuta
              </Button>
              <Button 
                className="flex-1 md:flex-none bg-primary hover:bg-primary/90 text-white"
                onClick={handleAccept}
              >
                Accetta tutti
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
