import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8 text-gradient-logo">Privacy Policy</h1>
              
              <div className="prose prose-invert prose-lg max-w-none bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
                
                <h3>1. Introduzione</h3>
                <p>
                  Benvenuto su RuoccoAgency. La tua privacy è importante per noi. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando visiti il nostro sito web.
                </p>

                <h3>2. Raccolta dei Dati</h3>
                <p>
                  Possiamo raccogliere informazioni personali che ci fornisci volontariamente quando:
                </p>
                <ul>
                  <li>Compili i moduli di contatto sul nostro sito.</li>
                  <li>Ti iscrivi alla nostra newsletter.</li>
                  <li>Richiedi una demo o una consulenza.</li>
                  <li>Interagisci con i nostri chatbot o assistenti virtuali.</li>
                </ul>
                <p>
                  Le informazioni raccolte possono includere nome, indirizzo email, numero di telefono e altre informazioni relative alla tua attività.
                </p>

                <h3>3. Uso delle Informazioni</h3>
                <p>
                  Utilizziamo le informazioni raccolte per:
                </p>
                <ul>
                  <li>Fornire, gestire e mantenere i nostri servizi.</li>
                  <li>Migliorare, personalizzare ed espandere il nostro sito web.</li>
                  <li>Comprendere e analizzare come utilizzi il nostro sito.</li>
                  <li>Sviluppare nuovi prodotti, servizi, caratteristiche e funzionalità.</li>
                  <li>Comunicare con te, direttamente o tramite uno dei nostri partner, anche per il servizio clienti.</li>
                  <li>Inviarti email marketing (se hai acconsentito).</li>
                </ul>

                <h3>4. Condivisione dei Dati</h3>
                <p>
                  Non vendiamo, scambiamo o trasferiamo in altro modo a terzi le tue informazioni personali identificabili, a meno che non forniamo agli utenti un preavviso. Questo non include i partner di hosting del sito web e altre parti che ci assistono nella gestione del nostro sito web, nella conduzione della nostra attività o nel servizio agli utenti, a condizione che tali parti accettino di mantenere queste informazioni riservate.
                </p>

                <h3>5. Sicurezza dei Dati</h3>
                <p>
                  Adottiamo misure di sicurezza adeguate per proteggere contro l'accesso non autorizzato, l'alterazione, la divulgazione o la distruzione dei tuoi dati personali. Tuttavia, nessun metodo di trasmissione su Internet o metodo di archiviazione elettronica è sicuro al 100%, quindi non possiamo garantire la sua assoluta sicurezza.
                </p>

                <h3>6. I Tuoi Diritti</h3>
                <p>
                  Hai il diritto di accedere, aggiornare o cancellare le informazioni che abbiamo su di te. Se desideri esercitare questo diritto, ti preghiamo di contattarci.
                </p>

                <h3>7. Contatti</h3>
                <p>
                  Se hai domande su questa Informativa sulla Privacy, puoi contattarci all'indirizzo email: ruoccoagency@gmail.com
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
