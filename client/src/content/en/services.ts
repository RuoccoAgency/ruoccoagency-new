import { Bot, MessageSquare, Phone, Globe } from "lucide-react";

export const servicesData = [
    {
        slug: "chatbot-ia",
        title: "Virtual Assistants (Chatbots)",
        shortDescription: "Intelligent chatbots integrated into your website to answer FAQs and qualify visitors.",
        longDescription: "Our AI-based virtual assistants are not simple pre-programmed chatbots. They use generative artificial intelligence to understand context, respond naturally, and guide the user toward the goal, whether it's sales or booking an appointment. Available 24/7, they transform your site into a lead generation machine.",
        icon: "Bot",
        features: [
            "Natural and contextual responses",
            "24/7 availability without breaks",
            "Automatic lead qualification",
            "Direct calendar integration",
            "Instant multi-language",
            "Conversation analysis dashboard"
        ],
        useCases: [
            {
                title: "Customer Support",
                description: "Reduce customer support load by instantly answering 80% of repetitive questions."
            },
            {
                title: "Booking Assistant",
                description: "Guide visitors in choosing a service and book appointments directly on your calendar."
            },
            {
                title: "Lead Gen & Qualification",
                description: "Ask targeted questions to understand if the visitor is an ideal customer before passing them to the sales team."
            }
        ],
        processSteps: [
            {
                title: "Knowledge Base Analysis",
                description: "We analyze your documents, website, and chat history to train the AI on your business."
            },
            {
                title: "Conversational Design",
                description: "We define the tone of voice and ideal conversation flows for your brand."
            },
            {
                title: "Integration & Testing",
                description: "We connect the chatbot to your site and test every possible scenario."
            },
            {
                title: "Launch & Optimization",
                description: "We go live and monitor conversations to constantly improve responses."
            }
        ],
        faq: [
            {
                question: "Can the chatbot give a wrong answer?",
                answer: "The AI is trained to answer only based on the information provided. If it doesn't know the answer, it asks the user for contact details so a human can call back."
            },
            {
                question: "Can I see the chat history?",
                answer: "Yes, you will have access to a dashboard where you can read all conversations and intervene if necessary."
            }
        ]
    },
    {
        slug: "whatsapp-automation",
        title: "WhatsApp Business Assistants",
        shortDescription: "Powerful automations on WhatsApp to manage communications, send reminders, and close sales.",
        longDescription: "WhatsApp is the most used communication channel in the world. We bring the power of AI directly into your customers' chats. From abandoned cart recovery to appointment confirmation and complete customer support, all handled automatically on WhatsApp Business API.",
        icon: "MessageSquare",
        features: [
            "98% open rate",
            "Instant responses on WhatsApp",
            "Automatic reminder sending",
            "Product catalog management",
            "Segmented list broadcasts",
            "Bi-directional CRM integration"
        ],
        useCases: [
            {
                title: "Cart Recovery",
                description: "Send automatic messages to those who abandon their cart to recover the sale."
            },
            {
                title: "Appointment Confirmation",
                description: "Send automatic reminders to drastically reduce no-shows."
            },
            {
                title: "Post-Sales Support",
                description: "Provide immediate instructions and support after purchase directly on the customer's phone."
            }
        ],
        processSteps: [
            {
                title: "WhatsApp API Setup",
                description: "We configure your WhatsApp Business Platform account for automation."
            },
            {
                title: "Flow Mapping",
                description: "We design the paths the user can take in chat."
            },
            {
                title: "CRM Connection",
                description: "We connect WhatsApp to your customer database to personalize every message."
            },
            {
                title: "Activation",
                description: "Your customers will start receiving immediate assistance on their preferred channel."
            }
        ]
    },
    {
        slug: "voice-agents",
        title: "AI Voice Agents",
        shortDescription: "Telephone assistants that answer calls, take messages, and book appointments for you.",
        longDescription: "Never miss an important call again. Our AI voice agents answer the phone for you, with a natural, human-like voice. They can answer questions, take orders, book appointments, and even make outbound calls for confirmations or lead qualification.",
        icon: "Phone",
        features: [
            "Immediate response to all calls",
            "Natural human-like voice",
            "Handling call peaks",
            "Automatic conversation transcription",
            "Spam call filtering",
            "Intelligent call transfer"
        ],
        useCases: [
            {
                title: "Intelligent Voicemail",
                description: "Answers when you're busy, takes the message and sends it to you transcribed."
            },
            {
                title: "Telephone Bookings",
                description: "Handles the agenda and sets appointments directly by phone, syncing with the calendar."
            },
            {
                title: "Lead Pre-qualification",
                description: "Calls incoming leads within 5 minutes to qualify them and schedule a call with a salesperson."
            }
        ],
        processSteps: [
            {
                title: "Voice Scripting",
                description: "We write the dialogues to make the conversation smooth and natural."
            },
            {
                title: "Technical Setup",
                description: "We configure the virtual number and the AI agent."
            },
            {
                title: "Voice Training",
                description: "We train the AI to recognize accents and idioms specific to your industry."
            },
            {
                title: "Deployment",
                description: "The agent starts managing your calls, 24/7."
            }
        ]
    },
    {
        slug: "web-development",
        title: "Modern Websites + SEO",
        shortDescription: "Fast websites, optimized for search engines and designed to convert visitors into customers.",
        longDescription: "Your website is your digital business card, but it must do much more than just look 'good'. We build ultra-fast websites, optimized for SEO, and designed with one obsession: converting visitors into paying customers. Premium design, persuasive copy, and flawless technical structure.",
        icon: "Globe",
        features: [
            "Premium & Responsive Design",
            "Extreme loading speed",
            "Technical SEO optimization",
            "Easy-to-manage CMS",
            "Advanced Analytics integration",
            "Sales-oriented copywriting"
        ],
        useCases: [
            {
                title: "Landing Page",
                description: "Vertical pages optimized for high-conversion advertising campaigns."
            },
            {
                title: "Corporate Showcase Site",
                description: "The perfect institutional presence to convey authority and trust."
            },
            {
                title: "E-commerce",
                description: "Fluid and fast shopping experiences to maximize online sales."
            }
        ],
        processSteps: [
            {
                title: "Strategy & Wireframe",
                description: "We define the site structure based on your business goals."
            },
            {
                title: "Design & Development",
                description: "We create the visual design and write clean, high-performance code."
            },
            {
                title: "Content & SEO",
                description: "We insert content and optimize every page for Google."
            },
            {
                title: "Launch",
                description: "We put the site online and configure all monitoring tools."
            }
        ]
    }
];
