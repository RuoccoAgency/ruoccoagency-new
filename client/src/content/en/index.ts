import vipiesseImage from "@/assets/Screenshot_2026-02-24_181322_1771953306043.png";
const madeingigiImage = vipiesseImage; // Temporary placeholder to fix build
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
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
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
    headline: "AI Automations and Assistants that turn requests into customers, 24/7.",
    subheadline: "We help businesses and professionals capture and qualify leads automatically via chatbots, WhatsApp assistants, and AI voice agents.",
    ctaPrimary: "Request a free demo",
    ctaSecondary: "View services",
    benefits: [
      "Immediate responses 24/7",
      "Fewer missed calls / more qualified leads",
      "Modern website + SEO to be found",
    ],
    variants: [
      {
        headline: "Save Time and Increase Profits",
        subheadline: "We help businesses and professionals capture and qualify leads automatically via chatbots, WhatsApp assistants, and AI voice agents.",
      },
      {
        headline: "Turn Your Website into a Customer Machine",
        subheadline: "We create fast websites and SEO-optimized landing pages to increase conversions, requests, and sales.",
      }
    ]
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
    title: "Case Studies",
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
        title: "WLD Events ",
        stat: "Full Showcase Website",
        badge: "Coming Soon",
      },
      {
        title: "Wedding Planner",
        stat: "Full Showcase Website",
        badge: "Coming Soon",
      },
    ],
  },
  about: {
    title: "About Me",
    badge: "Founder of RuoccoAgency",
    name: "Gianluca Ruocco",
    role: "Founder & Automation Expert",
    bio: "My name is Gianluca Ruocco, I am the founder of RuoccoAgency and I help businesses and professional studios recover time and increase profits through artificial intelligence. Specializing in automations, virtual assistants, and web development, my goal is to turn technology into a concrete and measurable competitive advantage for your business.",
    contacts: {
      email: "Email",
      phone: "Phone",
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
    title: "Start Now",
    subtitle: "Tell us about your project",
    form: {
      name: "Full Name",
      namePlaceholder: "John Doe",
      email: "Email",
      emailPlaceholder: "john@company.com",
      phone: "Phone (optional)",
      phonePlaceholder: "+1 234 567 8900",
      type: "Type of business",
      typePlaceholder: "Law Firm, E-commerce, etc.",
      message: "What do you need?",
      messagePlaceholder: "Briefly describe what you need...",
      submit: "Send Request",
      success: "Message sent successfully! We'll reply soon.",
      error: "An error occurred. Please try again later.",
      sendAnother: "Send another request",
      thanks: "Thank You!",
      validation: {
        name: "Name must be at least 2 characters",
        email: "Invalid email",
        type: "Specify the type of business",
        message: "Message must be at least 10 characters",
      }
    },
    info: {
      email: "ruoccoagency@gmail.com",
      phone: "+39 380 641 3543",
      website: "ruoccoagency.com",
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