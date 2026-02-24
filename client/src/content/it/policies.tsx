export const policies = {
  privacy: {
    title: "Privacy Policy",
    content: (
      <>
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
      </>
    )
  },
  terms: {
    title: "Termini di Servizio",
    content: (
      <>
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
      </>
    )
  },
  cookie: {
    title: "Cookie Policy",
    content: (
      <>
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
      </>
    )
  },
  disclaimer: {
    title: "Disclaimer",
    content: (
      <>
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
      </>
    )
  },
  legal: {
    title: "Note Legali",
    content: (
      <>
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
      </>
    )
  }
};