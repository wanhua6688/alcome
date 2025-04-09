'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ExpertsSection() {
  const { t, language } = useLanguage();

  const experts = [
    {
      id: 1,
      name: language === 'en' ? "Satoshi Yamamoto" : "山本 聡",
      title: {
        en: "Managing Partner, Strategy Division",
        ja: "マネージングパートナー、戦略部門"
      },
      education: {
        en: "M.B.A., Keio University",
        ja: "慶應義塾大学経営学修士(MBA)"
      },
      image: "/avact/1.png"
    },
    {
      id: 2,
      name: language === 'en' ? "Yuki Ishida" : "石田 優希",
      title: {
        en: "Group CEO, Managing Partner",
        ja: "グループCEO、マネージングパートナー"
      },
      education: {
        en: "Masters in Engineering, University of Tokyo",
        ja: "東京大学工学修士"
      },
      image: "/avact/2.png"
    },
    {
      id: 3,
      name: language === 'en' ? "Ken Tanaka" : "田中 健",
      title: {
        en: "Partner, Finance Advisory",
        ja: "パートナー、財務アドバイザリー"
      },
      education: {
        en: "M.B.A., Waseda University",
        ja: "早稲田大学経営学修士(MBA)"
      },
      image: "/avact/3.png"
    },
    {
      id: 4,
      name: language === 'en' ? "Haruka Nakamura" : "中村 遥",
      title: {
        en: "Partner, International Business",
        ja: "パートナー、国際ビジネス"
      },
      education: {
        en: "B.A. in Economics, Kyoto University",
        ja: "京都大学経済学学士"
      },
      image: "/avact/4.png"
    }
  ];

  return (
    <section id="experts" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ycp-blue mb-4">
            {t('experts.title')}
          </h2>
          <div className="w-20 h-1 bg-ycp-lightBlue mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t('experts.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={`expert-${expert.id}`}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative h-48 w-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-ycp-blue/10">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-ycp-blue">{expert.name}</h3>
              <p className="text-gray-700 mb-3">{expert.title[language]}</p>
              <p className="text-gray-500 text-sm italic">{expert.education[language]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
