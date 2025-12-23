import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { motion } from "framer-motion";

export default function CookiePolicy() {
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
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8 text-gradient-logo">Cookie Policy</h1>
              
              <div className="prose prose-invert prose-lg max-w-none bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
                
                <h3>1. Cosa sono i cookie?</h3>
                <p>
                  I cookie sono piccoli file di testo che vengono salvati sul tuo computer o dispositivo mobile quando visiti un sito web. 
                  Permettono al sito di ricordare le tue azioni e preferenze (come il login, la lingua, la dimensione dei caratteri e altre impostazioni di visualizzazione) 
                  per un periodo di tempo, in modo da non doverle reinserire ogni volta che torni sul sito o navighi da una pagina all'altra.
                </p>

                <h3>2. Come utilizziamo i cookie?</h3>
                <p>
                  Utilizziamo i cookie per diversi scopi, tra cui:
                </p>
                <ul>
                  <li><strong>Cookie tecnici essenziali:</strong> Necessari per il corretto funzionamento del sito web. Senza questi cookie, il sito non potrebbe funzionare correttamente.</li>
                  <li><strong>Cookie analitici:</strong> Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo e riportando informazioni in modo anonimo.</li>
                  <li><strong>Cookie di preferenza:</strong> Permettono al sito di ricordare informazioni che modificano il comportamento o l'aspetto del sito stesso, come la lingua preferita.</li>
                </ul>

                <h3>3. Quali tipi di cookie utilizziamo?</h3>
                
                <h4>Cookie Tecnici (Necessari)</h4>
                <p>
                  Questi cookie sono indispensabili per la navigazione del sito e l'utilizzo delle sue funzionalità. Non richiedono il consenso dell'utente.
                </p>

                <h4>Cookie Analitici (Opzionali)</h4>
                <p>
                  Utilizziamo strumenti di analisi anonimizzati per monitorare il traffico e migliorare l'esperienza utente. 
                  Questi cookie raccolgono dati in forma aggregata e non identificano direttamente l'utente.
                </p>

                <h3>4. Gestione dei cookie</h3>
                <p>
                  Puoi controllare e/o cancellare i cookie come preferisci. Puoi cancellare i cookie già presenti sul tuo computer e impostare la maggior parte dei browser in modo da bloccarne l'installazione. 
                  Se scegli di farlo, tuttavia, potresti dover modificare manualmente alcune preferenze ogni volta che visiti un sito ed è possibile che alcuni servizi o determinate funzioni non siano disponibili.
                </p>
                <p>
                  Per maggiori informazioni su come gestire i cookie nel tuo browser, visita le pagine di aiuto del browser stesso (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, ecc.).
                </p>

                <h3>5. Collegamento alla Privacy Policy</h3>
                <p>
                  Per ulteriori informazioni su come trattiamo i tuoi dati personali, consulta la nostra <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
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
