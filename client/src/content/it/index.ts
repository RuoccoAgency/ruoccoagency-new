import vipiesseImage from "@/assets/Screenshot_2026-02-24_181322_1771953306043.png";
import madeingigiImage from "@/assets/madeingigi.png";
import { servicesData } from "./services";

export const content = {
  meta: {
    title: "RuoccoAgency | Automazioni e Assistenti AI",
    description: "Automazioni e Assistenti AI che trasformano richieste in clienti, 24/7.",
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
      { label: "Home", href: "#home" },
      { label: "Servizi", href: "#services" },
      { label: "Chi Sono", href: "#about" },
      { label: "FAQ", href: "#faq" },
      { label: "Contatti", href: "#contact" },
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
    headline: "Automazioni e Assistenti AI che trasformano richieste in clienti, 24/7.",
    subheadline: "Aiutiamo aziende e professionisti a catturare e qualificare lead automaticamente tramite chatbot, assistenti WhatsApp e agenti vocali AI.",
    ctaPrimary: "Richiedi una demo gratuita",
    ctaSecondary: "Vedi i servizi",
    benefits: [
      "Risposte immediate h24",
      "Meno chiamate perse / più lead qualificati",
      "Sito moderno + SEO per farsi trovare",
    ],
    variants: [
      {
        headline: "Recupera Tempo e Aumenta i Profitti",
        subheadline: "Aiutiamo aziende e professionisti a catturare e qualificare lead automaticamente tramite chatbot, assistenti WhatsApp Business e agenti vocali AI.",
      },
      {
        headline: "Trasforma il Tuo Sito in una Macchina di Clienti",
        subheadline: "Creiamo siti web e landing page veloci e ottimizzati SEO per aumentare conversioni, richieste e vendite.",
      }
    ]
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
    title: "Casi Studio",
    subtitle: "I nostri lavori recenti",
    viewProject: "Visualizza Progetto",
    items: [
      {
        title: "Vipiesse Ingrosso | Ciabatte e Pantofole",
        stat: "E-commerce",
        badge: "Web Design",
        location: "Napoli, IT",
        image: vipiesseImage,
        url: "https://vipiesse.com",
      },
      {
        title: "MadeInGigi Events",
        stat: "Sito Vetrina & Eventi",
        badge: "Web Design",
        location: "Napoli, IT",
        image: madeingigiImage,
        url: "https://madeingigievent.com/",
      },
      {
        title: "WLD Events ",
        stat: "Sito Vetrina Completo",
        badge: "Coming Soon",
      },
      {
        title: "Wedding Planner",
        stat: "Sito Vetrina Completo",
        badge: "Coming Soon",
      },
    ],
  },
  about: {
    title: "Chi Sono",
    badge: "Founder of RuoccoAgency",
    name: "Gianluca Ruocco",
    role: "Founder & Automation Expert",
    bio: "Mi chiamo Gianluca Ruocco, sono il fondatore di RuoccoAgency e aiuto aziende e studi professionali a recuperare tempo e aumentare i profitti grazie all'intelligenza artificiale. Specializzato in automazioni, assistenti virtuali e sviluppo web, il mio obiettivo è trasformare la tecnologia in un vantaggio competitivo concreto e misurabile per la tua attività.",
    contacts: {
      email: "Email",
      phone: "Telefono",
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
    title: "Inizia Ora",
    subtitle: "Raccontaci il tuo progetto",
    form: {
      name: "Nome e Cognome",
      namePlaceholder: "Mario Rossi",
      email: "Email",
      emailPlaceholder: "mario@azienda.com",
      phone: "Telefono (opzionale)",
      phonePlaceholder: "+39 333 1234567",
      type: "Tipo di attività",
      typePlaceholder: "Studio Legale, E-commerce, ecc.",
      message: "Cosa ti serve?",
      messagePlaceholder: "Descrivi brevemente di cosa hai bisogno...",
      submit: "Invia Richiesta",
      success: "Messaggio inviato con successo! Ti risponderemo presto.",
      error: "Si è verificato un errore. Riprova più tardi.",
      sendAnother: "Invia un'altra richiesta",
      thanks: "Grazie!",
      validation: {
        name: "Il nome deve essere di almeno 2 caratteri",
        email: "Email non valida",
        type: "Specificare il tipo di attività",
        message: "Il messaggio deve essere di almeno 10 caratteri",
      }
    },
    info: {
      email: "ruoccoagency@gmail.com",
      phone: "+39 380 641 3543",
      website: "ruoccoagency.com",
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

