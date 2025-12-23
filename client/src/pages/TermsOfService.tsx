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
                <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
                
                <h3>1. Accettazione dei Termini</h3>
                <p>
                  Accedendo al sito web di RuoccoAgency, accetti di essere vincolato da questi termini di servizio, da tutte le leggi e i regolamenti applicabili e accetti di essere responsabile del rispetto di tutte le leggi locali applicabili. Se non sei d'accordo con uno qualsiasi di questi termini, ti è vietato utilizzare o accedere a questo sito.
                </p>

                <h3>2. Licenza d'Uso</h3>
                <p>
                  È concesso il permesso di scaricare temporaneamente una copia dei materiali (informazioni o software) sul sito web di RuoccoAgency solo per la visualizzazione transitoria personale e non commerciale. Questa è la concessione di una licenza, non un trasferimento di titolo, e sotto questa licenza non puoi:
                </p>
                <ul>
                  <li>Modificare o copiare i materiali;</li>
                  <li>Utilizzare i materiali per qualsiasi scopo commerciale o per qualsiasi esposizione pubblica (commerciale o non commerciale);</li>
                  <li>Tentare di decompilare o risalire al codice sorgente di qualsiasi software contenuto sul sito web di RuoccoAgency;</li>
                  <li>Rimuovere qualsiasi copyright o altra notazione proprietaria dai materiali; o</li>
                  <li>Trasferire i materiali a un'altra persona o "rispecchiare" i materiali su qualsiasi altro server.</li>
                </ul>

                <h3>3. Disclaimer</h3>
                <p>
                  I materiali sul sito web di RuoccoAgency sono forniti "così come sono". RuoccoAgency non fornisce alcuna garanzia, espressa o implicita, e con la presente declina e nega tutte le altre garanzie, incluse, senza limitazioni, garanzie implicite o condizioni di commerciabilità, idoneità per un particolare scopo o non violazione della proprietà intellettuale o altra violazione dei diritti.
                </p>

                <h3>4. Limitazioni</h3>
                <p>
                  In nessun caso RuoccoAgency o i suoi fornitori saranno responsabili per eventuali danni (inclusi, senza limitazioni, danni per perdita di dati o profitti, o a causa di interruzione dell'attività) derivanti dall'uso o dall'impossibilità di utilizzare i materiali sul sito web di RuoccoAgency, anche se RuoccoAgency o un rappresentante autorizzato di RuoccoAgency è stato informato oralmente o per iscritto della possibilità di tali danni.
                </p>

                <h3>5. Accuratezza dei Materiali</h3>
                <p>
                  I materiali che appaiono sul sito web di RuoccoAgency potrebbero includere errori tecnici, tipografici o fotografici. RuoccoAgency non garantisce che nessuno dei materiali sul suo sito web sia accurato, completo o aggiornato. RuoccoAgency può apportare modifiche ai materiali contenuti sul suo sito web in qualsiasi momento senza preavviso. Tuttavia, RuoccoAgency non si impegna ad aggiornare i materiali.
                </p>

                <h3>6. Link</h3>
                <p>
                  RuoccoAgency non ha esaminato tutti i siti collegati al suo sito web e non è responsabile per i contenuti di tali siti collegati. L'inclusione di qualsiasi link non implica l'approvazione da parte di RuoccoAgency del sito. L'uso di tali siti web collegati è a rischio dell'utente.
                </p>

                <h3>7. Modifiche</h3>
                <p>
                  RuoccoAgency può rivedere questi termini di servizio per il suo sito web in qualsiasi momento senza preavviso. Utilizzando questo sito web, accetti di essere vincolato dalla versione corrente di questi termini di servizio.
                </p>

                <h3>8. Legge Applicabile</h3>
                <p>
                  Questi termini e condizioni sono governati e interpretati in conformità con le leggi italiane e ti sottoponi irrevocabilmente alla giurisdizione esclusiva dei tribunali in quello Stato o località.
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
