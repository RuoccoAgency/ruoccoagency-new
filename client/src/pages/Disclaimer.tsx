import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { motion } from "framer-motion";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 relative">
      <div className="fixed inset-0 z-0 pointer-events-none animate-gradient-bg opacity-40" />
      <ParticlesBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-32 pb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8 text-gradient-logo">Disclaimer</h1>
              
              <div className="prose prose-invert prose-lg max-w-none bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <h3>1. Scopo Informativo</h3>
                <p>
                  Tutte le informazioni contenute in questo sito web sono fornite esclusivamente a scopo informativo generale. 
                  Sebbene ci impegniamo a mantenere le informazioni aggiornate e corrette, non rilasciamo dichiarazioni o garanzie di alcun tipo, esplicite o implicite, 
                  sulla completezza, accuratezza, affidabilità, idoneità o disponibilità rispetto al sito web o alle informazioni, prodotti, servizi o grafica correlata contenuti nel sito web per qualsiasi scopo.
                </p>

                <h3>2. Nessuna Garanzia di Risultati</h3>
                <p>
                  I servizi descritti in questo sito (automazioni, chatbot, AI) sono strumenti volti a migliorare l'efficienza aziendale. 
                  Tuttavia, i risultati specifici possono variare da caso a caso e dipendono da molteplici fattori esterni. 
                  Non possiamo garantire specifici risultati economici, aumenti di fatturato o conversioni.
                </p>

                <h3>3. Limitazione di Responsabilità</h3>
                <p>
                  In nessun caso saremo responsabili per eventuali perdite o danni inclusi, senza limitazioni, perdite o danni indiretti o consequenziali, 
                  o qualsiasi perdita o danno derivante dalla perdita di dati o profitti derivanti da, o in connessione con, l'uso di questo sito web.
                </p>

                <h3>4. Link Esterni</h3>
                <p>
                  Attraverso questo sito web è possibile collegarsi ad altri siti web che non sono sotto il controllo di RuoccoAgency. 
                  Non abbiamo alcun controllo sulla natura, il contenuto e la disponibilità di tali siti. 
                  L'inclusione di qualsiasi link non implica necessariamente una raccomandazione o avalla le opinioni espresse al loro interno.
                </p>

                <h3>5. Disponibilità del Sito</h3>
                <p>
                  Viene fatto ogni sforzo per mantenere il sito web attivo e funzionante senza intoppi. 
                  Tuttavia, RuoccoAgency non si assume alcuna responsabilità e non sarà responsabile se il sito web dovesse essere temporaneamente non disponibile a causa di problemi tecnici indipendenti dalla nostra volontà.
                </p>
              </div>
            </motion.div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
