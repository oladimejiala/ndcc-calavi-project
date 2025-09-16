import { useState, createContext, useContext, ReactNode } from 'react';
import { translations } from '../data/translations';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const createLanguageProvider = () => {
  const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('fr');

    const toggleLanguage = () => {
      setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
    };

    const t = (key: string): string => {
      const keys = key.split('.');
      let value: any = translations[language];
      
      for (const k of keys) {
        value = value?.[k];
      }
      
      return value || key;
    };

    return (
      <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    );
  };

  return { LanguageProvider, LanguageContext };
};