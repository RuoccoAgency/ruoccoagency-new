import React, { createContext, useContext, useState, ReactNode } from "react";
import { content as contentIt } from "../content/it";
import { content as contentEn } from "../content/en";

type Language = "it" | "en";
type ContentType = typeof contentIt;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: ContentType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("it");

  const content = language === "it" ? contentIt : contentEn;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}