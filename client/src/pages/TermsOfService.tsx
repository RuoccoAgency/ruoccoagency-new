import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { motion } from "framer-motion";

export default function TermsOfService() {
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
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8 text-gradient-logo">Termini di Servizio</h1>
              
              <div className="prose prose-invert prose-lg max-w-none bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>
                
                <h3>1. Accettazione dei Termini</h3>
                <p>
                  Accedendo e utilizzando il sito web RuoccoAgency, accetti di rispettare e di essere vincolato dai seguenti Termini di Servizio. 
                  Se non accetti questi termini, ti invitiamo a non utilizzare il nostro sito.
                </p>

                <h3>2. Uso del Sito</h3>
                <p>
                  Il contenuto di questo sito è fornito a scopo puramente informativo per illustrare i servizi professionali offerti. 
                  L'uso del sito non crea alcun rapporto contrattuale di clientela o professionale tra l'utente e RuoccoAgency.
                </p>

                <h3>3. Proprietà Intellettuale</h3>
                <p>
                  Tutti i contenuti (testi, grafica, loghi, immagini, video) presenti sul sito sono di proprietà di RuoccoAgency o dei rispettivi proprietari e sono protetti dalle leggi sul diritto d'autore. 
                  È vietata la riproduzione, distribuzione o modifica senza autorizzazione scritta.
                </p>

                <h3>4. Limitazione di Responsabilità</h3>
                <p>
                  RuoccoAgency non sarà responsabile per danni diretti, indiretti, incidentali o consequenziali derivanti dall'uso o dall'impossibilità di utilizzare il sito. 
                  Non garantiamo che il sito sia privo di errori, virus o interruzioni.
                </p>

                <h3>5. Link a Terze Parti</h3>
                <p>
                  Il sito può contenere link a siti web esterni. RuoccoAgency non ha alcun controllo su tali siti e non si assume alcuna responsabilità per i loro contenuti o le loro pratiche sulla privacy.
                </p>

                <h3>6. Modifiche ai Termini</h3>
                <p>
                  Ci riserviamo il diritto di modificare questi Termini di Servizio in qualsiasi momento. Le modifiche saranno effettive immediatamente dopo la pubblicazione sul sito. 
                  L'uso continuato del sito dopo tali modifiche costituisce accettazione dei nuovi termini.
                </p>

                <h3>7. Legge Applicabile</h3>
                <p>
                  Questi termini sono regolati dalle leggi dello Stato Italiano. Per qualsiasi controversia sarà competente in via esclusiva il Foro di residenza del titolare.
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
