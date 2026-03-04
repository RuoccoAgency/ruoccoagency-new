import React, { createContext, useContext, useState, ReactNode } from "react";
import { content as contentIt } from "../content/it";
import { content as contentEn } from "../content/en";
import { policies as policiesIt } from "../content/it/policies";
import { policies as policiesEn } from "../content/en/policies";

type Language = "it" | "en";
type ContentType = typeof contentIt;
type PoliciesType = typeof policiesIt;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: ContentType;
  policies: PoliciesType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      return (saved === "it" || saved === "en") ? saved : "it";
    }
    return "it";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const content = language === "it" ? contentIt : contentEn;
  const policies = language === "it" ? policiesIt : policiesEn;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, content, policies }}>
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