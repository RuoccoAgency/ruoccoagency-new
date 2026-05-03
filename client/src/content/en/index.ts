import vipiesseImage from "@/assets/Screenshot_2026-02-24_181322_1771953306043.png";
import madeingigiImage from "@/assets/madeingigi_screenshot.png";
import wldeventiImage from "@/assets/wldeventi_screenshot.png";
import drealstudioImage from "@/assets/3drealstudio_screenshot.png";
import { servicesData } from "./services";

export const content = {
  meta: {
    title: "RuoccoAgency | We Turn Requests into Customers with AI, 24/7",
    description: "RuoccoAgency helps businesses and professionals capture and qualify leads automatically via chatbots, WhatsApp assistants, and AI voice agents. Instant 24/7 responses, fewer missed calls, more customers. Request a free demo.",
  },
  common: {
    servicePremium: "Premium Service",
    backToHome: "Back to Home",
    learnMore: "Learn More",
    hours24: "24/7",
    demo: "Request Demo",
    contactUs: "Contact Us",
    viewProject: "View Project",
    loading: "Loading...",
    sending: "Sending...",
    techStackTitle: "TECHNOLOGIES WE USE",
  },
  nav: {
    logo: "RuoccoAgency",
    links: [
      { label: "Home", href: "/#home" },
      { label: "Services", href: "/#services" },
      { label: "My Projects", href: "/casi-studio" },
      { label: "About", href: "/chi-sono" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/contatti" },
    ],
    cta: "Request Demo",
    languages: {
      it: "Italiano",
      en: "English"
    }
  },
  techStack: {
    title: "TECHNOLOGIES WE USE"
  },
  hero: {
    badge: "AI Automation Agency",
    headline: "Websites and AI automation for business growth",
    subheadline: "We build fast, modern, and SEO-optimized websites, combined with AI automation for businesses: AI chatbots, online booking systems, WhatsApp Business assistants, and email marketing automation to increase leads and conversions.",
    ctaPrimary: "Request a free demo",
    ctaSecondary: "View services",
    benefits: [
      "Immediate responses 24/7",
      "Fewer missed calls / more qualified leads",
      "Modern website + SEO to be found",
    ],
  },
  servicesSEO: {
    items: [
      {
        title: "Professional website development",
        description: "We create custom platforms for your brand, fast-loading and perfect for converting visitors into clients. Every site is built to rank high on search engines."
      },
      {
        title: "AI automation for businesses",
        description: "We simplify your business processes with Artificial Intelligence. Reduce manual work and let the software handle repetitive operations for you."
      },
      {
        title: "AI chatbots and WhatsApp Business assistants",
        description: "Offer 24/7 support to your customers without hiring new staff. Our chatbots qualify leads and reply instantly on WhatsApp."
      },
      {
        title: "Online booking systems to reduce no-shows",
        description: "Automate appointment management with smart calendars and automatic reminders. Eliminate no-shows and optimize your time."
      },
      {
        title: "Email marketing automation to increase sales",
        description: "Turn simple visitors into loyal customers. We set up automated email flows that nurture your leads until the moment of purchase."
      }
    ],
    footer: "We operate in Naples, Salerno, and across Italy."
  },
  services: {
    title: "Our Services",
    subtitle: "Advanced technological solutions to scale your business",
    items: servicesData,
    detail: {
      notFound: "Service not found",
      notFoundDescription: "The service you are looking for does not exist.",
      ctaTitle: "Ready to transform your business?",
      ctaDescription: (title: string) => `Book a free consultation and discover how ${title} can help you grow.`,
      ctaButton: "Speak with an expert",
    }
  },
  howItWorks: {
    title: "How It Works",
    steps: [
      {
        title: "Analysis & Goal",
        description: "We study your business and identify processes to automate to maximize results.",
      },
      {
        title: "Setup & Integrazioni",
        description: "We configure AI assistants and integrate them with your existing tools (Calendar, CRM).",
      },
      {
        title: "Testing & Optimization",
        description: "We rigorously test every flow and optimize responses to ensure maximum effectiveness.",
      },
      {
        title: "Go-live + Support",
        description: "We launch the system and provide continuous support to ensure everything works perfectly.",
      },
    ],
  },
  whyItWorks: {
    title: "Why It Works",
    cards: [
      {
        title: "After-Hours Customers",
        description: "Many people look for services in the evening or on weekends. Our assistants answer when you rest.",
      },
      {
        title: "Speed is Conversion",
        description: "Responding within 5 minutes drastically increases the chances of closing a client.",
      },
      {
        title: "Automatic Filtering",
        description: "AI qualifies contacts before they reach you, making you talk only to those ready to buy.",
      },
    ],
  },
  caseStudies: {
    title: "My Projects",
    subtitle: "Our recent work",
    viewProject: "View Project",
    items: [
      {
        title: "Vipiesse Wholesale | Slippers and Footwear",
        stat: "E-commerce",
        badge: "Web Design",
        location: "Naples, IT",
        image: vipiesseImage,
        url: "https://vipiesse.com",
      },
      {
        title: "MadeInGigi Events",
        stat: "Event Showcase Site",
        badge: "Web Design",
        location: "Naples, IT",
        image: madeingigiImage,
        url: "https://madeingigievent.com/",
      },
      {
        title: "WLD Events",
        stat: "Full Showcase Website",
        badge: "Web Design",
        image: wldeventiImage,
        url: "https://wldeventi.it",
      },
      {
        title: "3DRealStudio",
        stat: "3D Printing Service",
        badge: "Web Design",
        image: drealstudioImage,
        url: "https://3drealstudio.it",
      },
      {
        title: "Wedding Planner",
        stat: "Full Showcase Website",
        badge: "Coming Soon",
      },
    ],
  },
  about: {
    title: "The Soul of RuoccoAgency",
    badge: "Founder of RuoccoAgency",
    name: "Gianluca Ruocco",
    role: "Founder & Automation Expert",
    bio: "My name is Gianluca Ruocco and my mission is simple: to liberate human potential by eliminating repetitive work. At RuoccoAgency, we don't just sell technology; we build bridges between our clients' ambitions and the infinite possibilities of Artificial Intelligence. With a background focused on efficiency and innovation, I founded this agency to offer professional studios and businesses tools that until yesterday were reserved only for tech giants.",
    mission: "Our mission is to democratize access to advanced automation. We believe in a future where every professional can focus on creativity and strategy, letting AI handle the logistics and the front line of customer service.",
    values: [
      {
        title: "Ethical Innovation",
        description: "We use AI to empower human work, never to replace it indiscriminately."
      },
      {
        title: "Measurable Efficiency",
        description: "Every one of our automations must bring a clear and tangible return on investment."
      },
      {
        title: "Total Transparency",
        description: "No fluff. We explain what AI can do and, more importantly, what it should not do."
      }
    ],
    contacts: {
      email: "Direct Email",
      phone: "Direct Phone",
    }
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Do I need to change my website to use your services?",
        answer: "Not necessarily. Our assistants can be integrated into most existing websites. If your site is outdated, we can evaluate a redesign to maximize results.",
      },
      {
        question: "Does it work with WhatsApp Business?",
        answer: "Yes, our solutions integrate perfectly with WhatsApp Business API to handle conversations at scale compliantly.",
      },
      {
        question: "Can the AI transfer the chat to a human?",
        answer: "Absolutely. The system is designed to handle standard requests and immediately transfer the conversation to a human operator in case of complex questions or specific needs.",
      },
      {
        question: "Does it integrate with Google Calendar or my CRM?",
        answer: "Yes, we integrate assistants with Google Calendar, HubSpot, Salesforce, and many other tools to automate appointments and data management.",
      },
      {
        question: "What are the activation times?",
        answer: "It depends on the complexity of the project, but generally, a simple assistant can be operational in 1-2 days, while a more complex assistant can be operational in 1-2 weeks.",
      },
      {
        question: "What is needed from my side?",
        answer: "Just an initial session to understand your processes and the informational material (FAQs, price lists) to train the AI. We take care of the rest.",
      },
    ],
  },
  contact: {
    title: "Bring Your Project to Life",
    subtitle: "Whether you want to automate sales or create a voice assistant, we're ready to talk. We usually respond within 24 business hours.",
    form: {
      name: "Full Name",
      namePlaceholder: "John Doe",
      email: "Professional Email",
      emailPlaceholder: "john@company.com",
      phone: "Phone (optional)",
      phonePlaceholder: "+1 234 567 8900",
      type: "Your Business",
      typePlaceholder: "e.g. Law Firm, Real Estate, E-commerce...",
      message: "Describe your challenge",
      messagePlaceholder: "Briefly tell us what you'd like to automate or improve...",
      submit: "Send the Challenge",
      success: "Request received! Gianluca or a team member will contact you soon.",
      error: "Oops! Something went wrong. Please try again or email us directly.",
      sendAnother: "Send another request",
      thanks: "See you soon!",
      validation: {
        name: "Name is needed so we know who we're talking to",
        email: "Enter a valid email so we can reply",
        type: "Help us understand your sector",
        message: "Give us a few more details (min 10 characters)",
      }
    },
    info: {
      email: "ruoccoagency@gmail.com",
      phone: "+39 329 467 1410",
      website: "ruoccoagency.com",
      location: "Available for consultations worldwide",
    },
  },
  footer: {
    rights: "© 2026 RuoccoAgency. All rights reserved.",
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
    terms: "Terms of Service",
    legal: "Legal Notice",
    disclaimer: "Disclaimer",
    sections: {
      contacts: "Contacts",
      links: "Links",
    }
  },
  roi: {
    title: "How much does it cost you not to automate?",
    subtitle: "Calculate the potential profit recovered thanks to our AI assistants",
    labels: {
      leadsPerMonth: "Leads per month",
      missedLeadRate: "% Missed/unhandled leads",
      avgLeadValue: "Average lead value (€)",
      lostRevenue: "Potential revenue lost",
      lostRevenueSub: "Every month your business leaves this amount on the table.",
      estimatedRecovery: "Estimated recovery with AI",
      estimatedRecoverySub: "Automation can recover up to 80% of lost leads by handling them instantly.",
      cta: "Stop losing customers now",
    }
  },
};