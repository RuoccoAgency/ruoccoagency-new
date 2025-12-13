import { content } from "@/content/it";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-black/40 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 max-w-md relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />
              
              <img 
                src="/gianluca.jpg" 
                alt="Gianluca Ruocco" 
                className="w-full h-full object-cover relative z-10 bg-muted"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"; // Fallback to a professional stock photo if local file missing
                }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              {content.about.title}
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                {content.about.bio}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href={`mailto:${content.contact.info.email}`} className="text-white hover:text-primary transition-colors">
                  {content.contact.info.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Telefono</p>
                <a href={`tel:${content.contact.info.phone}`} className="text-white hover:text-primary transition-colors">
                  {content.contact.info.phone}
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
