'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CaseStudiesSection() {
  const { t, language } = useLanguage();

  const caseStudies = [
    {
      id: 1,
      title: language === 'en' 
        ? "Economic Impact Assessment for Water Technology Solutions" 
        : "水技術ソリューションの経済的影響評価",
      client: language === 'en' 
        ? "Leading Japanese water technology provider" 
        : "日本の先進的な水技術プロバイダー",
      area: language === 'en' ? "Japan" : "日本",
      expertise: language === 'en' 
        ? "Economic Impact Quantification, Cost Structure Analysis" 
        : "経済的影響の定量化、コスト構造分析",
      summary: language === 'en'
        ? "We conducted an economic impact assessment, which included high-resolution quantification of factors such as fiscal status, water cost structures, and economic value creation from the government's profit and loss perspective. We also evaluated the economic impact compared to alternative solutions."
        : "財政状況、水コスト構造、政府の損益観点からの経済的価値創造などの要素を高解像度で定量化した経済的影響評価を実施しました。また、代替ソリューションと比較した経済的影響も評価しました。"
    },
    {
      id: 2,
      title: language === 'en' 
        ? "Strategic Partner Identification for Animation Production" 
        : "アニメーション制作のための戦略的パートナー特定",
      client: language === 'en' 
        ? "Japanese animation studio expanding to Southeast Asia" 
        : "東南アジアに拡大する日本のアニメーションスタジオ",
      area: language === 'en' ? "Thailand, Vietnam, Indonesia" : "タイ、ベトナム、インドネシア",
      expertise: language === 'en' 
        ? "Partner Identification, Outsourcing Strategy" 
        : "パートナー特定、アウトソーシング戦略",
      summary: language === 'en'
        ? "We assisted a Japanese animation studio in identifying outsourcing partners for 2D animation production across Southeast Asia. We developed an extensive list of potential partners, facilitated meetings with qualified candidates, and successfully identified partners that met all requirements."
        : "東南アジア全域で2Dアニメーション制作のアウトソーシングパートナーを特定するために日本のアニメーションスタジオを支援しました。潜在的なパートナーの詳細なリストを作成し、適格な候補者とのミーティングを促進し、すべての要件を満たすパートナーを特定することに成功しました。"
    },
    {
      id: 3,
      title: language === 'en' 
        ? "Market Entry Strategy for Consumer Electronics" 
        : "家電製品の市場参入戦略",
      client: language === 'en' 
        ? "Global consumer electronics manufacturer" 
        : "グローバル家電メーカー",
      area: language === 'en' ? "Japan, South Korea" : "日本、韓国",
      expertise: language === 'en' 
        ? "Market Analysis, Competitive Positioning, Entry Strategy" 
        : "市場分析、競争的ポジショニング、参入戦略",
      summary: language === 'en'
        ? "We developed a comprehensive market entry strategy for a global electronics firm entering the Japanese high-end consumer market. Our work included competitive analysis, consumer behavior research, and distribution channel optimization, resulting in a successful product launch."
        : "日本の高級消費者市場に参入するグローバル電子機器企業のための包括的な市場参入戦略を開発しました。競合分析、消費者行動調査、流通チャネルの最適化を含む当社の取り組みにより、製品の発売は成功しました。"
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
            {t('casestudies.title')}
          </h2>
          <div className="w-20 h-1 bg-ycp-lightBlue mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            {t('casestudies.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={`case-study-${study.id}`}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-ycp-blue p-6 md:p-8 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-sm uppercase text-white/90 mb-1">{t('casestudies.client')}</h4>
                      <p className="text-white/80">{study.client}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase text-white/90 mb-1">{t('casestudies.area')}</h4>
                      <p className="text-white/80">{study.area}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase text-white/90 mb-1">{t('casestudies.expertise')}</h4>
                      <p className="text-white/80">{study.expertise}</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6 md:p-8">
                  <h4 className="font-bold text-sm uppercase text-ycp-blue mb-3">{t('casestudies.summary')}</h4>
                  <p className="text-gray-700 mb-6 leading-relaxed">{study.summary}</p>
                  
                  {/* <button className="flex items-center text-ycp-blue font-medium hover:text-ycp-darkBlue transition-colors">
                    {t('casestudies.readmore')}
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* <button className="px-6 py-3 bg-ycp-blue text-white rounded-md hover:bg-ycp-darkBlue transition-colors font-medium">
            {t('casestudies.viewall')}
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
