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
                <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>
                
                <h3>1. Chi siamo</h3>
                <p>
                  L'indirizzo del nostro sito web è: <strong>https://ruoccoagency.com</strong>.
                  <br />
                  Il Titolare del trattamento dei dati è Gianluca Ruocco, professionista freelance operante in Italia.
                  <br />
                  Per qualsiasi richiesta relativa alla privacy, puoi contattarci a: <strong>ruoccoagency@gmail.com</strong>
                </p>

                <h3>2. Quali dati personali raccogliamo e perché</h3>
                
                <h4>Modulo di Contatto</h4>
                <p>
                  Quando compili il modulo di contatto sul nostro sito, raccogliamo i dati che inserisci, come il tuo nome, indirizzo email, numero di telefono (opzionale) e il messaggio. 
                  Questi dati vengono utilizzati esclusivamente per rispondere alle tue richieste e fornirti le informazioni desiderate sui nostri servizi.
                </p>

                <h4>Cookie</h4>
                <p>
                  Il nostro sito utilizza i cookie per migliorare la tua esperienza di navigazione. Per dettagli specifici sui cookie utilizzati, consulta la nostra <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.
                </p>

                <h4>Dati di Navigazione</h4>
                <p>
                  I sistemi informatici preposti al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP, orari delle richieste). 
                  Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull'uso del sito e per controllarne il corretto funzionamento.
                </p>

                <h3>3. Con chi condividiamo i tuoi dati</h3>
                <p>
                  Non vendiamo né cediamo i tuoi dati personali a terzi per scopi di marketing. 
                  I tuoi dati possono essere condivisi con fornitori di servizi tecnici terzi (es. provider di hosting, servizi di analisi come Google Analytics) solo per quanto strettamente necessario al funzionamento e alla manutenzione del sito web.
                </p>

                <h3>4. Per quanto tempo conserviamo i tuoi dati</h3>
                <p>
                  I dati inviati tramite modulo di contatto vengono conservati per il tempo necessario a gestire la tua richiesta e per eventuali comunicazioni successive relative ai nostri servizi professionali.
                  Puoi richiedere la cancellazione dei tuoi dati in qualsiasi momento.
                </p>

                <h3>5. I tuoi diritti sui dati</h3>
                <p>
                  In conformità con il GDPR (Regolamento Generale sulla Protezione dei Dati), hai il diritto di:
                </p>
                <ul>
                  <li>Richiedere l'accesso ai tuoi dati personali in nostro possesso.</li>
                  <li>Richiedere la rettifica di dati inesatti.</li>
                  <li>Richiedere la cancellazione dei tuoi dati ("diritto all'oblio").</li>
                  <li>Richiedere la limitazione del trattamento dei tuoi dati.</li>
                  <li>Opporti al trattamento dei tuoi dati.</li>
                  <li>Richiedere la portabilità dei tuoi dati.</li>
                </ul>
                <p>
                  Per esercitare uno qualsiasi di questi diritti, ti invitiamo a contattarci via email all'indirizzo ruoccoagency@gmail.com.
                </p>

                <h3>6. Dove spediamo i tuoi dati</h3>
                <p>
                  I dati dei visitatori possono essere controllati attraverso un servizio di rilevamento automatico dello spam. I dati sono conservati su server sicuri e trattati nel rispetto delle normative vigenti.
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
