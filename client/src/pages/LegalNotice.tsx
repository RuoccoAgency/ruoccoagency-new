import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { motion } from "framer-motion";

export default function LegalNotice() {
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
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8 text-gradient-logo">Note Legali</h1>
              
              <div className="prose prose-invert prose-lg max-w-none bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <h3>Informazioni sul titolare del sito</h3>
                <p>
                  Questo sito web è di proprietà ed è gestito da un professionista freelance.
                </p>
                
                <div className="bg-black/20 p-6 rounded-xl border border-white/5 my-6">
                  <p className="mb-2"><strong>Titolare:</strong> Gianluca Ruocco</p>
                  <p className="mb-2"><strong>Sede:</strong> Napoli, Italia</p>
                  <p className="mb-0"><strong>Contatto Email:</strong> <a href="mailto:ruoccoagency@gmail.com" className="text-primary hover:underline">ruoccoagency@gmail.com</a></p>
                </div>

                <h3>Finalità del sito</h3>
                <p>
                  Il sito ruoccoagency.com ha lo scopo di presentare i servizi professionali offerti dal titolare nel campo dell'automazione AI, sviluppo web e assistenti virtuali. 
                  I contenuti presenti hanno carattere informativo e promozionale.
                </p>

                <h3>Proprietà Intellettuale</h3>
                <p>
                  Tutti i contenuti presenti su questo sito (testi, immagini, loghi, grafica, layout) sono di proprietà esclusiva del titolare o utilizzati con licenza/autorizzazione. 
                  È vietata la riproduzione, anche parziale, senza il consenso scritto del titolare.
                </p>

                <h3>Responsabilità</h3>
                <p>
                  Il titolare si impegna a mantenere le informazioni sul sito aggiornate e corrette, ma non garantisce l'assenza di errori o omissioni. 
                  Il titolare non è responsabile per eventuali danni derivanti dall'utilizzo del sito o dei link esterni presenti.
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
