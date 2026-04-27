import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/hooks/useLanguage";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  children?: React.ReactNode;
}

export function SEO({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "https://ruoccoagency.com/opengraph.jpg",
  twitterCard = "summary_large_image",
  children,
}: SEOProps) {
  const { language } = useLanguage();
  const siteName = "RuoccoAgency";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = "Trasformiamo richieste in clienti, 24/7. Assistenti AI, Chatbot e Siti Web Moderni per il tuo business.";
  const metaDescription = description || defaultDescription;
  const url = "https://ruoccoagency.com";
  const currentCanonical = canonical ? `${url}${canonical}` : url;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={currentCanonical} />
      <html lang={language} />

      {/* Open Graph tags */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* hreflang tags for multi-language support */}
      <link rel="alternate" href={currentCanonical} hrefLang={language} />
      <link rel="alternate" href={currentCanonical} hrefLang="x-default" />
      
      {children}
    </Helmet>
  );
}
