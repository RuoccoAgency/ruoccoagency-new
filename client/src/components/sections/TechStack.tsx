import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

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
    const { content } = useLanguage();
    return (
        <section className="mt-10 md:mt-12 lg:mt-14 py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden whitespace-nowrap">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-medium text-muted-foreground/60 uppercase tracking-widest mb-8">
                    {content.techStack?.title || "TECNOLOGIE CHE UTILIZZIAMO"}
                </p>

                <div className="relative group overflow-hidden">
                    {/* Gradient Masks for smooth fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex items-center gap-12 md:gap-24 w-fit py-4"
                    >
                        {/* Duplicate the list to create seamless infinite loop */}
                        {[...technologies, ...technologies].map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-auto"
                            >
                                <span className="text-xl md:text-3xl font-bold text-white/50 hover:text-white transition-colors tracking-tight">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
