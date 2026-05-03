import vipiesseImage from "@/assets/Screenshot_2026-02-24_181322_1771953306043.png";
import madeingigiImage from "@/assets/madeingigi_screenshot.png";
import wldeventiImage from "@/assets/wldeventi_screenshot.png";
import drealstudioImage from "@/assets/3drealstudio_screenshot.png";
import { servicesData } from "./services";

export const content = {
  meta: {
    title: "RuoccoAgency | Trasformiamo Richieste in Clienti con l'AI, 24/7",
    description: "RuoccoAgency aiuta aziende e professionisti a catturare e qualificare lead automaticamente tramite chatbot, assistenti WhatsApp e agenti vocali AI. Risposte immediate h24, meno chiamate perse, più clienti. Richiedi una demo gratuita.",
  },
  common: {
    servicePremium: "Servizio Premium",
    backToHome: "Torna alla Home",
    learnMore: "Scopri di più",
    hours24: "24/7",
    demo: "Richiedi Demo",
    contactUs: "Contattaci",
    viewProject: "Visualizza Progetto",
    loading: "Caricamento...",
    sending: "Invio in corso...",
    techStackTitle: "TECNOLOGIE CHE UTILIZZIAMO",
  },
  nav: {
    logo: "RuoccoAgency",
    links: [
      { label: "Home", href: "/#home" },
      { label: "Servizi", href: "/#services" },
      { label: "I miei Progetti", href: "/casi-studio" },
      { label: "Chi Sono", href: "/chi-sono" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contatti", href: "/contatti" },
    ],
    cta: "Richiedi Demo",
    languages: {
      it: "Italiano",
      en: "English"
    }
  },
  techStack: {
    title: "TECNOLOGIE CHE UTILIZZIAMO"
  },
  hero: {
    badge: "AI Automation Agency",
    headline: "Siti web e automazione AI per la crescita aziendale",
    subheadline: "Realizziamo siti web veloci, moderni e ottimizzati SEO, combinati con automazioni AI per aziende: chatbot AI, sistemi di prenotazione online, assistenti WhatsApp Business e automazioni di email marketing per aumentare contatti e conversioni.",
    ctaPrimary: "Richiedi una demo gratuita",
    ctaSecondary: "Vedi i servizi",
    benefits: [
      "Risposte immediate h24",
      "Meno chiamate perse / più lead qualificati",
      "Sito moderno + SEO per farsi trovare",
    ],
  },
  servicesSEO: {
    items: [
      {
        title: "Sviluppo di siti web professionali",
        description: "Creiamo piattaforme su misura per il tuo brand, veloci da caricare e perfette per convertire i visitatori in clienti. Ogni sito è studiato per posizionarsi in alto sui motori di ricerca."
      },
      {
        title: "Automazione AI per le aziende",
        description: "Semplifichiamo i tuoi processi aziendali con l'Intelligenza Artificiale. Riduci il lavoro manuale e lascia che il software gestisca le operazioni ripetitive per te."
      },
      {
        title: "Chatbot AI e assistenti WhatsApp Business",
        description: "Offri assistenza 24/7 ai tuoi clienti senza dover assumere nuovo personale. I nostri chatbot qualificano i contatti e rispondono istantaneamente su WhatsApp."
      },
      {
        title: "Sistemi di prenotazione online per ridurre i no-show",
        description: "Automatizza la gestione degli appuntamenti con calendari intelligenti e promemoria automatici. Elimina le mancate presentazioni e ottimizza il tuo tempo."
      },
      {
        title: "Automazione di email marketing per aumentare le vendite",
        description: "Trasforma i semplici visitatori in clienti fedeli. Impostiamo flussi di email automatici che nutrono i tuoi contatti fino al momento dell'acquisto."
      }
    ],
    footer: "Operiamo a Napoli, Salerno e in tutta Italia."
  },
  services: {
    title: "I Nostri Servizi",
    subtitle: "Soluzioni tecnologiche avanzate per scalare il tuo business",
    items: servicesData,
    detail: {
      notFound: "Servizio non trovato",
      notFoundDescription: "Il servizio che stai cercando non esiste.",
      ctaTitle: "Pronto a trasformare il tuo business?",
      ctaDescription: (title: string) => `Prenota una consulenza gratuita e scopri come ${title} può aiutarti a crescere.`,
      ctaButton: "Parla con un esperto",
    }
  },
  howItWorks: {
    title: "Come Funziona",
    steps: [
      {
        title: "Analisi & Obiettivo",
        description: "Studiamo il tuo business e identifichiamo i processi da automatizzare per massimizzare i risultati.",
      },
      {
        title: "Setup & Integrazioni",
        description: "Configuriamo gli assistenti AI e li integriamo con i tuoi strumenti esistenti (Calendar, CRM).",
      },
      {
        title: "Test & Ottimizzazione",
        description: "Testiamo rigorosamente ogni flusso e ottimizziamo le risposte per garantire la massima efficacia.",
      },
      {
        title: "Go-live + Supporto",
        description: "Lanciamo il sistema e forniamo supporto continuo per assicurare che tutto funzioni perfettamente.",
      },
    ],
  },
  whyItWorks: {
    title: "Perché Funziona",
    cards: [
      {
        title: "Clienti Fuori Orario",
        description: "Molte persone cercano servizi la sera o nel weekend. I nostri assistenti rispondono quando tu riposi.",
      },
      {
        title: "Velocità è Conversione",
        description: "Rispondere entro 5 minuti aumenta drasticamente le probabilità di chiudere un cliente.",
      },
      {
        title: "Filtro Automatico",
        description: "L'AI qualifica i contatti prima che arrivino a te, facendoti parlare solo con chi è pronto a comprare.",
      },
    ],
  },
  caseStudies: {
    title: "Risultati che Parlano da Soli.",
    subtitle: "Scopri come abbiamo aiutato e-commerce, agenzie di eventi e professionisti a scalare online con design moderni e automazioni mirate.",
    viewProject: "Visualizza Progetto",
    items: [
      {
        title: "Vipiesse Ingrosso | Ciabatte e Pantofole",
        stat: "E-commerce",
        badge: "Web Design",
        location: "Napoli, IT",
        image: vipiesseImage,
        url: "https://vipiesse.com",
        sfida: "Portare un'attività di ingrosso tradizionale nel mondo digitale in modo efficiente.",
        soluzione: "Sviluppo di un e-commerce su misura, veloce e ottimizzato per conversioni e gestione ordini B2B/B2C.",
      },
      {
        title: "MadeInGigi Events",
        stat: "Sito Vetrina & Eventi",
        badge: "Web Design",
        location: "Napoli, IT",
        image: madeingigiImage,
        url: "https://madeingigievent.com/",
        sfida: "Creare una vetrina digitale che trasmettesse l'emozione e la professionalità dei loro eventi fisici.",
        soluzione: "Design immersivo, gallerie fotografiche d'impatto e un'interfaccia utente focalizzata sulla generazione di contatti.",
      },
      {
        title: "WLD Events",
        stat: "Sito Vetrina Completo",
        badge: "Web Design",
        image: wldeventiImage,
        url: "https://wldeventi.it",
        sfida: "Posizionare il brand nel mercato competitivo degli eventi con un sito che ne rispecchiasse il valore.",
        soluzione: "Struttura SEO-friendly, performance veloci e un design pulito che guida l'utente a richiedere informazioni.",
      },
      {
        title: "3DRealStudio",
        stat: "Servizio di Stampa 3D",
        badge: "Web Design",
        image: drealstudioImage,
        url: "https://3drealstudio.it",
        sfida: "Progettare una piattaforma digitale moderna e futuristica per presentare servizi avanzati di stampa 3D.",
        soluzione: "Un sito web dal design high-tech, con focus visivo sui progetti e moduli di preventivo integrati.",
      },
      {
        title: "Wedding Planner",
        stat: "Sito Vetrina Completo",
        badge: "Coming Soon",
      },
    ],
  },
  about: {
    title: "L'Anima di RuoccoAgency",
    badge: "Founder of RuoccoAgency",
    name: "Gianluca Ruocco",
    role: "Founder & Automation Expert",
    bio: "Mi chiamo Gianluca Ruocco e la mia missione è semplice: liberare il potenziale umano eliminando il lavoro ripetitivo. In RuoccoAgency, non vendiamo solo tecnologia; costruiamo ponti tra le ambizioni dei nostri clienti e le infinite possibilità dell'Intelligenza Artificiale. Con un background focalizzato sull'efficienza e l'innovazione, ho fondato questa agenzia per offrire a studi professionali e aziende strumenti che fino a ieri erano riservati solo ai colossi del tech.",
    mission: "La nostra missione è democratizzare l'accesso all'automazione avanzata. Crediamo in un futuro dove ogni professionista possa concentrarsi sulla creatività e sulla strategia, lasciando che l'AI gestisca la logistica e la prima linea del servizio clienti.",
    values: [
      {
        title: "Innovazione Etica",
        description: "Utilizziamo l'IA per potenziare il lavoro umano, mai per sostituirlo senza criterio."
      },
      {
        title: "Efficienza Misurabile",
        description: "Ogni nostra automazione deve portare un ritorno sull'investimento chiaro e tangibile."
      },
      {
        title: "Trasparenza Totale",
        description: "Zero fuffa. Spieghiamo cosa può fare l'IA e, soprattutto, cosa non deve fare."
      }
    ],
    contacts: {
      email: "Email Diretta",
      phone: "Telefono Diretto",
    }
  },
  faq: {
    title: "Domande Frequenti",
    items: [
      {
        question: "Serve cambiare sito per usare i vostri servizi?",
        answer: "Non necessariamente. I nostri assistenti possono essere integrati nella maggior parte dei siti esistenti. Se il tuo sito è obsoleto, possiamo valutarne il rifacimento per massimizzare i risultati.",
      },
      {
        question: "Funziona con WhatsApp Business?",
        answer: "Sì, le nostre soluzioni si integrano perfettamente con WhatsApp Business API per gestire conversazioni su larga scala in modo conforme.",
      },
      {
        question: "L'AI può passare la chat a un umano?",
        answer: "Assolutamente. Il sistema è progettato per gestire le richieste standard e passare immediatamente la conversazione a un operatore umano in caso di domande complesse o necessità specifica.",
      },
      {
        question: "Si integra con Google Calendar o il mio CRM?",
        answer: "Sì, integriamo gli assistenti con Google Calendar, HubSpot, Salesforce e molti altri strumenti per automatizzare appuntamenti e gestione dati.",
      },
      {
        question: "Quali sono i tempi di attivazione?",
        answer: "Dipende dalla complessità del progetto, ma generalmente un assistente semplice può essere operativo in 1-2 giorni, mentre un assistente più complesso può essere operativo in 1-2 settimane.",
      },
      {
        question: "Cosa serve da parte mia?",
        answer: "Solo una sessione iniziale per capire i tuoi processi e il materiale informativo (FAQ, listini) per addestrare l'AI. Al resto pensiamo noi.",
      },
    ],
  },
  contact: {
    title: "Diamo Vita al Tuo Progetto",
    subtitle: "Che tu voglia automatizzare le vendite o creare un assistente vocale, siamo pronti a parlarne. Rispondiamo solitamente entro 24 ore lavorative.",
    form: {
      name: "Nome e Cognome",
      namePlaceholder: "Mario Rossi",
      email: "Email Professionale",
      emailPlaceholder: "mario@azienda.com",
      phone: "Telefono (opzionale)",
      phonePlaceholder: "+39 333 1234567",
      type: "Il tuo Business",
      typePlaceholder: "Es: Studio Legale, Agenzia Immobiliare, E-commerce...",
      message: "Descrivi la tua sfida",
      messagePlaceholder: "Raccontaci brevemente cosa vorresti automatizzare o migliorare...",
      submit: "Invia la Sfida",
      success: "Richiesta ricevuta! Gianluca o un membro del team ti contatterà a breve.",
      error: "Ops! Qualcosa è andato storto. Riprova o scrivici direttamente via email.",
      sendAnother: "Invia un'altra richiesta",
      thanks: "A presto!",
      validation: {
        name: "Il nome è necessario per sapere con chi parleremo",
        email: "Inserisci un'email valida per poterti rispondere",
        type: "Aiutaci a capire il tuo settore",
        message: "Dacci qualche dettaglio in più (minimo 10 caratteri)",
      }
    },
    info: {
      email: "ruoccoagency@gmail.com",
      phone: "+39 329 467 1410",
      website: "ruoccoagency.com",
      location: "Disponibili per consulenze in tutta Italia (e oltre)",
    },
  },
  footer: {
    rights: "© 2026 RuoccoAgency. Tutti i diritti riservati.",
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
    terms: "Termini di Servizio",
    legal: "Note Legali",
    disclaimer: "Disclaimer",
    sections: {
      contacts: "Contatti",
      links: "Links",
    }
  },
  roi: {
    title: "Quanto ti costa non automatizzare?",
    subtitle: "Calcola il potenziale di guadagno recuperato grazie ai nostri assistenti AI",
    labels: {
      leadsPerMonth: "Contatti (Lead) al mese",
      missedLeadRate: "% Contatti persi/non gestiti",
      avgLeadValue: "Valore medio di un cliente (€)",
      lostRevenue: "Entrate potenziali perse",
      lostRevenueSub: "Ogni mese il tuo business lascia sul tavolo questa cifra.",
      estimatedRecovery: "Recupero stimato con AI",
      estimatedRecoverySub: "L'automazione può recuperare fino all'80% dei contatti persi gestendoli istantaneamente.",
      cta: "Smetti di perdere clienti ora",
    }
  },
};

