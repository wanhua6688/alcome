'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MediaSection() {
  const { t, language } = useLanguage();

  const mediaLogos = [
    { id: 1, name: "BBC", logo: "/images/media/bbc.png" },
    { id: 2, name: "CNN", logo: "/images/media/cnn.png" },
    { id: 3, name: "Bloomberg", logo: "/images/media/bloomberg.svg" },
    { id: 4, name: "Financial Times", logo: "/images/media/ft.png" },
    { id: 5, name: "Nikkei Asia", logo: "/images/media/nikkei.png" },
    { id: 6, name: "The Japan Times", logo: "/images/media/japantimes.png" },
  ];

  const mediaItems = [
    {
      id: 1,
      image: "/images/media/article1.jpg",
      title: language === 'en' 
        ? "Alcome's Managing Partner discusses Japanese economic outlook on Bloomberg" 
        : "Alcomeのマネージングパートナーがブルームバーグで日本の経済見通しについて語る",
      source: "Bloomberg",
      date: "2023-09-15"
    },
    {
      id: 2,
      image: "/images/media/article2.jpg",
      title: language === 'en' 
        ? "Foreign investment in Japan rises as market becomes more accessible" 
        : "市場がより身近になるにつれて日本への外国投資が増加",
      source: "Nikkei Asia",
      date: "2023-08-22"
    },
    {
      id: 3,
      image: "/images/media/article3.jpg",
      title: language === 'en' 
        ? "Alcome Consulting recognized for excellence in business strategy" 
        : "ビジネス戦略の卓越性でAlcomeコンサルティングが認められる",
      source: "The Japan Times",
      date: "2023-07-10"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ycp-blue mb-4">
            {t('media.title')}
          </h2>
          <div className="w-20 h-1 bg-ycp-lightBlue mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t('media.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {mediaLogos.map((logo, index) => (
            <motion.div
              key={`media-logo-${logo.id}`}
              className="relative h-12 w-24 md:w-32 opacity-80 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Image
                src={logo.logo}
                alt={logo.name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={`media-item-${item.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-3 left-4 text-white text-xs font-medium px-2 py-1 bg-ycp-blue/80 rounded">
                  {item.source}
                </div>
                <div className="absolute bottom-3 right-4 text-white text-xs px-2 py-1 bg-black/50 rounded">
                  {item.date}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-ycp-blue font-semibold text-lg leading-tight mb-3">{item.title}</h3>
                <button className="text-sm text-ycp-blue hover:text-ycp-darkBlue font-medium transition-colors">
                  {t('media.readmore')} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* <button className="px-6 py-3 border border-ycp-blue text-ycp-blue rounded-md hover:bg-ycp-blue hover:text-white transition-colors font-medium">
            {t('media.viewall')}
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
