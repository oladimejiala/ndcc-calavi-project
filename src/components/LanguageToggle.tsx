import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
      aria-label="Toggle language"
    >
      <Globe size={16} />
      <span className="font-semibold">{language === 'fr' ? 'FR' : 'EN'}</span>
    </button>
  );
};