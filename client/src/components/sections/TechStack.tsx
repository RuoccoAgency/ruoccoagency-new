import { motion } from "framer-motion";

const technologies = [
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Make", logo: "https://vibe-coding-assets.s3.amazonaws.com/make-logo.svg" },
    { name: "WhatsApp", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
    { name: "Replit", logo: "" },
    { name: "Voiceflow", logo: "" },
    { name: "Bland", logo: "" },
    { name: "Vercel", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_and_wordmark.svg" },
];

export function TechStack() {
    return (
        <section className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden whitespace-nowrap">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-medium text-muted-foreground/60 uppercase tracking-widest mb-8">
                    TECNOLOGIE CHE UTILIZZIAMO
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-6 md:h-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            {/* Using text for logos where images might fail or for simplicity in this demo */}
                            <span className="text-xl md:text-2xl font-bold text-white/50 hover:text-white transition-colors">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
