'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Mail, MapPin, Phone, Send, ExternalLink, ChevronUp } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟订阅过程
    console.log('Subscribing email:', email);
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-ycp-primary to-ycp-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 公司信息 */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">{t('footer.company')}</h3>
            <p className="text-white/80 mb-4 max-w-md leading-relaxed">
              {t('footer.company_description')}
            </p>
            
            <div className="flex items-center text-white/80 hover:text-white transition-colors">
              <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
              <a href="mailto:contact@alcome-consulting.com" className="hover:underline">
                contact@alcome-consulting.com
              </a>
            </div>
          </div>
          
          {/* 快速链接 */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#overview" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  {t('nav.overview')}
                </Link>
              </li>
              <li>
                <Link href="#strategies" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  {t('nav.strategies')}
                </Link>
              </li>
              <li>
                <Link href="#clients" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  {t('nav.clients')}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 社交媒体 */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.follow_us')}</h3>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* 版权区域 */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              {currentYear} Alcome Group. {t('footer.all_rights_reserved')}
            </p>
            
            <div className="flex space-x-4 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">{t('footer.privacy_policy')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.terms_of_service')}</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* 回到顶部按钮 */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-ycp-primary hover:bg-ycp-primary/90 text-white p-3 rounded-full shadow-lg transition-all"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
