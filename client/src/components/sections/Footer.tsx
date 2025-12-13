import { content } from "@/content/it";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white font-display mb-4">{content.nav.logo}</h2>
            <p className="text-muted-foreground max-w-md">
              {content.hero.subheadline}
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Contatti</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href={`mailto:${content.contact.info.email}`} className="hover:text-primary transition-colors">
                  {content.contact.info.email}
                </a>
              </li>
              <li>
                <a href={`tel:${content.contact.info.phone}`} className="hover:text-primary transition-colors">
                  {content.contact.info.phone}
                </a>
              </li>
              <li>{content.contact.info.website}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              {content.nav.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
          <p>{content.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{content.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{content.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
