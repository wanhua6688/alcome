'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section id="overview" className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
      {/* 背景层 */}
      <div className="absolute inset-0 z-0">
        {/* 主背景图 */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/home.jpeg"
            alt="Tokyo skyline"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ycp-primary/60 mix-blend-multiply" />
        </div>
        {/* 装饰图形 */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-ycp-primary opacity-20 rounded-bl-[200px]"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-white opacity-10 rounded-tr-[100px]"></div>
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-white opacity-20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-white opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧文本内容 */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90 mb-6 font-light">
                {t('hero.subtitle')}
              </h2>
            </motion.div>

            <motion.p 
              className="text-white/80 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.button 
                className="bg-white text-ycp-primary hover:bg-white/90 px-8 py-3 rounded-md font-medium text-sm shadow-xl hover:shadow-2xl transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('hero.cta')}
              </motion.button>
              
              <motion.button 
                className="border border-white/40 hover:border-white text-white px-8 py-3 rounded-md font-medium text-sm backdrop-blur-sm hover:bg-white/10 transition-all"
                onClick={() => document.getElementById('our-services')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('hero.learn_more')}
              </motion.button>
            </motion.div>
            
            {/* 客户指标 */}
            <motion.div 
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div>
                <p className="text-white text-3xl md:text-4xl font-bold">2000+</p>
                <p className="text-white/70 text-sm mt-1">{t('hero.stats.clients')}</p>
              </div>
              <div>
                <p className="text-white text-3xl md:text-4xl font-bold">15+</p>
                <p className="text-white/70 text-sm mt-1">{t('hero.stats.years')}</p>
              </div>
              <div>
                <p className="text-white text-3xl md:text-4xl font-bold">100+</p>
                <p className="text-white/70 text-sm mt-1">{t('hero.stats.experts')}</p>
              </div>
              <div>
                <p className="text-white text-3xl md:text-4xl font-bold">95%</p>
                <p className="text-white/70 text-sm mt-1">{t('hero.stats.satisfaction')}</p>
              </div>
            </motion.div>
          </div>

         
        </div>
      </div>
      
      {/* 向下滚动指示器 */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div 
          className="cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2
          }}
          onClick={() => document.getElementById('our-services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
