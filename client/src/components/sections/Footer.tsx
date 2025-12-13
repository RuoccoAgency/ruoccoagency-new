import { content } from "@/content/it";

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10 text-sm relative overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden">
                 <img src="/logo.png" alt="RuoccoAgency" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold font-display text-white">{content.nav.logo}</span>
            </a>
            <p className="text-muted-foreground max-w-md text-base leading-relaxed">
              {content.hero.subheadline}
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Contatti</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a href={`mailto:${content.contact.info.email}`} className="hover:text-primary transition-colors flex items-center gap-2">
                  {content.contact.info.email}
                </a>
              </li>
              <li>
                <a href={`tel:${content.contact.info.phone}`} className="hover:text-primary transition-colors flex items-center gap-2">
                  {content.contact.info.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">{content.contact.info.website}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Links</h3>
            <ul className="space-y-4 text-muted-foreground">
              {content.nav.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary transition-colors block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground">
          <p>{content.footer.rights}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
