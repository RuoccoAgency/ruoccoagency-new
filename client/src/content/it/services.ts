import { Bot, MessageSquare, Phone, Globe } from "lucide-react";

export const servicesData = [
    {
        slug: "chatbot-ia",
        title: "Assistenti Virtuali (Chatbot)",
        shortDescription: "Chatbot intelligenti integrati nel tuo sito web per rispondere alle domande frequenti e qualificare i visitatori.",
        longDescription: "I nostri assistenti virtuali basati su AI non sono semplici chatbot pre-programmati. Utilizzano l'intelligenza artificiale generativa per comprendere il contesto, rispondere in modo naturale e guidare l'utente verso l'obiettivo, che sia la vendita o la prenotazione di un appuntamento. Disponibili 24/7, trasformano il tuo sito in una macchina di generazione lead.",
        icon: "Bot",
        features: [
            "Risposte naturali e contestuali",
            "Disponibilità 24/7 senza pause",
            "Qualificazione lead automatica",
            "Integrazione diretta con il calendario",
            "Multilingua istantaneo",
            "Dashboard di analisi conversazioni"
        ],
        useCases: [
            {
                title: "Customer Support",
                description: "Riduci il carico sul supporto clienti rispondendo istantaneamente all'80% delle domande ripetitive."
            },
            {
                title: "Booking Assistant",
                description: "Guida i visitatori nella scelta del servizio e prenota direttamente l'appuntamento sul tuo calendario."
            },
            {
                title: "Lead Gen & Qualifica",
                description: "Fai domande mirate per capire se il visitatore è un cliente ideale prima di passarlo al team vendita."
            }
        ],
        processSteps: [
            {
                title: "Analisi Knowledge Base",
                description: "Analizziamo i tuoi documenti, sito web e storici chat per istruire l'AI sulla tua azienda."
            },
            {
                title: "Design Conversazionale",
                description: "Definiamo il tono di voce e i flussi di conversazione ideali per il tuo brand."
            },
            {
                title: "Integrazione & Test",
                description: "Colleghiamo il chatbot al tuo sito e testiamo ogni scenario possibile."
            },
            {
                title: "Lancio & Ottimizzazione",
                description: "Andiamo live e monitoriamo le conversazioni per migliorare costantemente le risposte."
            }
        ],
        faq: [
            {
                question: "Il chatbot può sbagliare risposta?",
                answer: "L'AI è istruita per rispondere solo basandosi sulle informazioni fornite. Se non conosce la risposta, chiede i contatti all'utente per farlo richiamare da un umano."
            },
            {
                question: "Posso vedere lo storico delle chat?",
                answer: "Sì, avrai accesso a una dashboard dove potrai leggere tutte le conversazioni e intervenire se necessario."
            }
        ]
    },
    {
        slug: "whatsapp-automation",
        title: "Assistenti WhatsApp Business",
        shortDescription: "Automazioni potenti su WhatsApp per gestire comunicazioni, inviare promemoria e chiudere vendite.",
        longDescription: "WhatsApp è il canale di comunicazione più usato al mondo. Portiamo la potenza dell'AI direttamente nelle chat dei tuoi clienti. Dal recupero carrelli abbandonati alla conferma appuntamenti, fino al supporto clienti completo, tutto gestito automaticamente su WhatsApp Business API.",
        icon: "MessageSquare",
        features: [
            "Tasso di apertura del 98%",
            "Risposte istantanee su WhatsApp",
            "Invio automatico di reminder",
            "Gestione cataloghi prodotti",
            "Broadcast a liste segmentate",
            "Integrazione CRM bidirezionale"
        ],
        useCases: [
            {
                title: "Recupero Carrelli",
                description: "Invia messaggi automatici a chi abbandona il carrello per recuperare la vendita."
            },
            {
                title: "Conferma Appuntamenti",
                description: "Invia reminder automatici per ridurre drasticamente i no-show."
            },
            {
                title: "Supporto Post-Vendita",
                description: "Fornisci istruzioni e supporto immediato dopo l'acquisto direttamente sul telefono del cliente."
            }
        ],
        processSteps: [
            {
                title: "Setup WhatsApp API",
                description: "Configuriamo il tuo account WhatsApp Business Platform per l'automazione."
            },
            {
                title: "Mappatura Flussi",
                description: "Disegniamo i percorsi che l'utente potrà seguire in chat."
            },
            {
                title: "Connessione CRM",
                description: "Colleghiamo WhatsApp al tuo database clienti per personalizzare ogni messaggio."
            },
            {
                title: "Attivazione",
                description: "I tuoi clienti inizieranno a ricevere assistenza immediata sul loro canale preferito."
            }
        ]
    },
    {
        slug: "voice-agents",
        title: "Agenti Vocali AI",
        shortDescription: "Assistenti telefonici che rispondono alle chiamate, prendono messaggi e fissano appuntamenti per te.",
        longDescription: "Non perdere mai più una chiamata importante. I nostri agenti vocali AI rispondono al telefono per te, con una voce naturale e umana. Possono rispondere a domande, prendere ordini, fissare appuntamenti e persino fare chiamate in uscita per conferme o lead qualification.",
        icon: "Phone",
        features: [
            "Risposta immediata a tutte le chiamate",
            "Voce naturale simil-umana",
            "Gestione picchi di chiamate",
            "Trascrizione automatica conversazioni",
            "Filtro chiamate spam",
            "Trasferimento di chiamata intelligente"
        ],
        useCases: [
            {
                title: "Segreteria Intelligente",
                description: "Risponde quando sei occupato, prende il messaggio e te lo invia trascritto."
            },
            {
                title: "Prenotazioni Telefoniche",
                description: "Gestisce l'agenda e fissa appuntamenti direttamente al telefono sincronizzandosi col calendario."
            },
            {
                title: "Pre-qualifica Lead",
                description: "Chiama i lead in entrata entro 5 minuti per qualificarli e fissare una call con un commerciale."
            }
        ],
        processSteps: [
            {
                title: "Scripting Vocale",
                description: "Scriviamo i dialoghi per rendere la conversazione fluida e naturale."
            },
            {
                title: "Setup Tecnico",
                description: "Configuriamo il numero virtuale e l'agente AI."
            },
            {
                title: "Training Vocale",
                description: "Addestriamo l'AI a riconoscere accenti e modi di dire specifici del tuo settore."
            },
            {
                title: "Deployment",
                description: "L'agente inizia a gestire le tue chiamate, 24/7."
            }
        ]
    },
    {
        slug: "web-development",
        title: "Siti Web Moderni + SEO",
        shortDescription: "Siti web veloci, ottimizzati per i motori di ricerca e progettati per convertire i visitatori in clienti.",
        longDescription: "Il tuo sito web è il tuo biglietto da visita digitale, ma deve fare molto più che essere 'bello'. Costruiamo siti web ultra-veloci, ottimizzati per la SEO e progettati con una sola ossessione: convertire i visitatori in clienti paganti. Design premium, copy persuasivo e struttura tecnica impeccabile.",
        icon: "Globe",
        features: [
            "Design Premium & Responsive",
            "Velocità di caricamento estrema",
            "Ottimizzazione SEO tecnica",
            "CMS facile da gestire",
            "Integrazione Analytics avanzata",
            "Copywriting orientato alla vendita"
        ],
        useCases: [
            {
                title: "Landing Page",
                description: "Pagine verticali ottimizzate per campagne pubblicitarie ad alta conversione."
            },
            {
                title: "Sito Vetrina Aziendale",
                description: "La presenza istituzionale perfetta per trasmettere autorità e fiducia."
            },
            {
                title: "E-commerce",
                description: "Esperienze di acquisto fluide e veloci per massimizzare le vendite online."
            }
        ],
        processSteps: [
            {
                title: "Strategia & Wireframe",
                description: "Definiamo la struttura del sito in base ai tuoi obiettivi di business."
            },
            {
                title: "Design & Sviluppo",
                description: "Creiamo il design visivo e scriviamo codice pulito e performante."
            },
            {
                title: "Contenuti & SEO",
                description: "Inseriamo i contenuti e ottimizziamo ogni pagina per Google."
            },
            {
                title: "Lancio",
                description: "Mettiamo online il sito e configuriamo tutti gli strumenti di monitoraggio."
            }
        ]
    }
];
