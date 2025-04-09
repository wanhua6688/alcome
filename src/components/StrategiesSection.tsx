'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function StrategiesSection() {
  const { t, language } = useLanguage();
  const [activeStrategy, setActiveStrategy] = useState(0);
  
  const strategies = [
    {
      id: 'market-entry',
      title: t('strategies.items.market_entry.title'),
      description: t('strategies.items.market_entry.description'),
      image: '/Industries/1.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'growth',
      title: t('strategies.items.growth.title'),
      description: t('strategies.items.growth.description'),
      image: '/Industries/2.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 'optimization',
      title: t('strategies.items.optimization.title'),
      description: t('strategies.items.optimization.description'),
      image: '/Industries/3.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'digital',
      title: t('strategies.items.digital.title'),
      description: t('strategies.items.digital.description'),
      image: '/Industries/4.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="strategies" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-ycp-primary to-gray-900">
      {/* 背景装饰元素 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ycp-secondary opacity-10 rounded-bl-[100px] blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white opacity-5 rounded-tr-[100px] blur-2xl"></div>
      <div className="absolute top-1/3 left-1/6 w-24 h-24 border border-white opacity-10 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-white opacity-5 transform rotate-45"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-3">
            <span className="bg-white/10 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
              {t('strategies.subtitle')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('strategies.title')}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            {t('strategies.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* 左侧策略选择器 */}
          <motion.div 
            className="lg:col-span-5 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.id}
                variants={itemVariants}
                className={`p-0.5 rounded-xl cursor-pointer ${
                  activeStrategy === index 
                    ? 'bg-gradient-to-r from-white/30 to-transparent' 
                    : 'bg-transparent hover:bg-white/5'
                }`}
                onClick={() => setActiveStrategy(index)}
              >
                <div className={`p-5 md:p-6 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                  activeStrategy === index 
                    ? 'bg-white/10' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}>
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 p-3 rounded-lg mr-4 ${
                      activeStrategy === index 
                        ? 'bg-white text-ycp-primary' 
                        : 'bg-white/10 text-white'
                    }`}>
                      {strategy.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {strategy.title}
                      </h3>
                      <p className="text-white/70 line-clamp-2">
                        {strategy.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 右侧详情内容 */}
          <motion.div 
            className="lg:col-span-7 relative"
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={strategies[activeStrategy].image || '/images/strategy-default.jpg'}
                alt={strategies[activeStrategy].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ycp-primary/30 mix-blend-multiply"></div>
              
              {/* 叠加内容 */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                <motion.div
                  key={activeStrategy}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {strategies[activeStrategy].title}
                  </h3>
                  <p className="text-white/90 mb-4 max-w-xl">
                    {strategies[activeStrategy].description}
                  </p>
                  {/* <button 
                    className="inline-flex items-center text-white bg-ycp-primary/80 hover:bg-ycp-primary backdrop-blur-sm px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t('strategies.learn_more')}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button> */}
                </motion.div>
              </div>
            </div>

            {/* 指示器 */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {strategies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStrategy(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeStrategy === idx 
                      ? 'bg-white w-8' 
                      : 'bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`View strategy ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
