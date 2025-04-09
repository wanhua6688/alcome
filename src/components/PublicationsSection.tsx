'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PublicationsSection() {
  const { t, language } = useLanguage();

  const publications = [
    {
      id: 1,
      title: language === 'en' 
        ? "Supply Chain Optimization in the Japanese Market" 
        : "日本市場におけるサプライチェーンの最適化",
      description: language === 'en'
        ? "Analysis of recent environmental changes and future demand forecasts in Japan's supply chain infrastructure."
        : "日本のサプライチェーンインフラにおける最近の環境変化と将来の需要予測の分析。",
      category: language === 'en' ? "Market Analysis" : "市場分析",
      date: "2023-10-15",
      image: "/images/publications/publication1.jpg"
    },
    {
      id: 2,
      title: language === 'en' 
        ? "Technology Utilization in Safety Management" 
        : "安全管理におけるテクノロジーの活用",
      description: language === 'en'
        ? "Key challenges and innovative approaches to safety management through technology integration."
        : "テクノロジー統合による安全管理への主な課題と革新的なアプローチ。",
      category: language === 'en' ? "Technology" : "テクノロジー",
      date: "2023-09-22",
      image: "/images/publications/publication2.jpg"
    },
    {
      id: 3,
      title: language === 'en' 
        ? "Investment Trends in Japanese Startups" 
        : "日本のスタートアップへの投資トレンド",
      description: language === 'en'
        ? "A comprehensive look at the emerging trends and opportunities in Japan's startup ecosystem."
        : "日本のスタートアップエコシステムにおける新興トレンドと機会に関する包括的な分析。",
      category: language === 'en' ? "Investment" : "投資",
      date: "2023-08-30",
      image: "/images/publications/publication3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ycp-blue mb-4">
            {t('publications.title')}
          </h2>
          <div className="w-20 h-1 bg-ycp-lightBlue mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t('publications.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {publications.map((publication, index) => (
            <motion.div
              key={`publication-${publication.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-52 w-full">
                <Image
                  src={publication.image}
                  alt={publication.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3 bg-ycp-blue/90 text-white text-xs font-medium px-2 py-1 rounded">
                  {publication.category}
                </div>
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {publication.date}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-ycp-blue font-semibold text-lg mb-2 group-hover:text-ycp-darkBlue transition-colors">
                  {publication.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {publication.description}
                </p>
                <div className="flex justify-end">
                  <button className="text-sm text-ycp-blue group-hover:text-ycp-darkBlue font-medium transition-colors flex items-center">
                    {t('publications.readmore')} 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
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
          <button className="px-6 py-3 border border-ycp-blue text-ycp-blue rounded-md hover:bg-ycp-blue hover:text-white transition-colors font-medium">
            {t('publications.viewall')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
