import { content } from "@/content/it";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { NeonTiltCard } from "@/components/ui/NeonTiltCard";
import { SectionPortal } from "@/components/ui/SectionPortal";

export function About() {
  return (
    <SectionPortal id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full md:w-1/2 max-w-md relative perspective-1000"
          >
            <NeonTiltCard intensity={15}>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group shadow-2xl">
                {/* Glowing Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />
                
                <img 
                  src="/gianluca-profile.jpg" 
                  alt="Gianluca Ruocco" 
                  className="w-full h-full object-cover relative z-10 bg-muted transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"; 
                  }}
                />
              </div>
            </NeonTiltCard>
          </motion.div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6 text-gradient-logo">
                {content.about.title}
              </h2>
            </Reveal>

            {/* Existing Founder Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-2 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Founder
            </motion.div>

            {/* NEW BADGE: Fondatore di RuoccoAgency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 border border-white/10 text-white text-sm font-medium backdrop-blur-sm shadow-[0_0_15px_rgba(124,58,237,0.2)] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all transform hover:-translate-y-0.5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-bold">
                  Fondatore di RuoccoAgency
                </span>
              </div>
            </motion.div>
            
            <Reveal delay={0.1}>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  {content.about.bio}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href={`mailto:${content.contact.info.email}`} className="text-white hover:text-primary transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300">
                    {content.contact.info.email}
                  </a>
                </div>
                <div className="group">
                  <p className="text-sm text-muted-foreground mb-1">Telefono</p>
                  <a href={`tel:${content.contact.info.phone}`} className="text-white hover:text-primary transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300">
                    {content.contact.info.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </SectionPortal>
  );
}
