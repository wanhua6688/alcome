'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center justify-center px-3 py-1 bg-transparent hover:bg-ycp-blue/10 rounded-md text-ycp-blue transition-colors"
      aria-label={`Switch to ${language === 'en' ? 'Japanese' : 'English'}`}
    >
      <span className="text-sm font-medium">
        {language === 'en' ? '日本語' : 'English'}
      </span>
    </button>
  );
}
