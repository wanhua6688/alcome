'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, ChevronRight, Layers, Globe, ExternalLink } from 'lucide-react';

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { t, language } = useLanguage();

  const industries = [
    {
      title: t('industries.aerospace_defense'),
      icon: <Globe className="w-6 h-6" />,
      image: '/Industries/1.png',
      description: language === 'en' 
        ? "Strategic consulting for aerospace and defense companies navigating complex market dynamics, compliance challenges, and technological shifts."
        : "航空宇宙・防衛企業向けの戦略コンサルティング。複雑な市場動向、コンプライアンス課題、技術変革に対応します。",
      stats: [
        { value: "26%", label: language === 'en' ? "Industry Growth" : "産業成長率" },
        { value: "40+", label: language === 'en' ? "Projects" : "プロジェクト数" }
      ],
      link: '#aerospace-defense'
    },
    {
      title: t('industries.automotive_mobility'),
      icon: <Layers className="w-6 h-6" />,
      image: '/Industries/2.png',
      description: language === 'en'
        ? "Helping automotive and mobility companies address electrification, autonomous driving, and evolving consumer expectations."
        : "自動車・モビリティ企業の電動化、自動運転、変化する消費者ニーズへの対応を支援します。",
      stats: [
        { value: "45%", label: language === 'en' ? "Digital Adoption" : "デジタル導入率" },
        { value: "35+", label: language === 'en' ? "Companies" : "支援企業数" }
      ],
      link: '#automotive-mobility'
    },
    {
      title: t('industries.energy_natural_resources'),
      icon: <Layers className="w-6 h-6" />,
      image: '/Industries/3.png',
      description: language === 'en'
        ? "Supporting energy transition strategies, sustainability initiatives, and operational excellence for resource companies."
        : "エネルギー企業の転換戦略、持続可能性イニシアチブ、および運用効率化を支援します。",
      stats: [
        { value: "30%", label: language === 'en' ? "Efficiency Gain" : "効率性向上" },
        { value: "20+", label: language === 'en' ? "Projects" : "プロジェクト数" }
      ],
      link: '#energy-natural-resources'
    },
    {
      title: t('industries.construction_infrastructure'),
      icon: <Layers className="w-6 h-6" />,
      image: '/Industries/4.png',
      description: language === 'en'
        ? "Advising construction and infrastructure companies on digital transformation, sustainable building practices, and project management excellence."
        : "建設・インフラ企業のデジタルトランスフォーメーション、持続可能な建築実践、プロジェクト管理の卓越性について助言します。",
      stats: [
        { value: "40%", label: language === 'en' ? "Cost Reduction" : "コスト削減" },
        { value: "25+", label: language === 'en' ? "Clients" : "クライアント数" }
      ],
      link: '#construction-infrastructure'
    },
    {
      title: t('industries.consumer_retail'),
      icon: <Layers className="w-6 h-6" />,
      image: '/Industries/5.png',
      description: language === 'en'
        ? "Developing customer-centric strategies, omnichannel capabilities, and supply chain resilience for consumer and retail businesses."
        : "消費者・小売業向けの顧客中心戦略、オムニチャネル機能、サプライチェーンの強靭性を開発します。",
      stats: [
        { value: "50%", label: language === 'en' ? "Digital Growth" : "デジタル成長率" },
        { value: "30+", label: language === 'en' ? "Brands" : "ブランド数" }
      ],
      link: '#consumer-retail'
    },
    {
      title: t('industries.financial_services'),
      icon: <Layers className="w-6 h-6" />,
      image: '/Industries/6.png',
      description: language === 'en'
        ? "Guiding financial institutions through digital transformation, regulatory compliance, and innovative service development."
        : "金融機関のデジタルトランスフォーメーション、規制遵守、革新的なサービス開発をサポートします。",
      stats: [
        { value: "60%", label: language === 'en' ? "Process Automation" : "プロセス自動化" },
        { value: "45+", label: language === 'en' ? "Implementations" : "実装数" }
      ],
      link: '#financial-services'
    },
    {
      title: t('industries.healthcare'),
      icon: <Layers className="w-6 h-6" />,
      image: '/Industries/7.png',
      description: language === 'en'
        ? "Optimizing healthcare delivery, patient experience, and operational efficiency for providers and life sciences organizations."
        : "医療提供者とライフサイエンス組織のための医療提供、患者体験、運用効率の最適化を行います。",
      stats: [
        { value: "35%", label: language === 'en' ? "Cost Efficiency" : "コスト効率" },
        { value: "50+", label: language === 'en' ? "Facilities" : "施設数" }
      ],
      link: '#healthcare'
    },
    {
      title: t('industries.industrials'),
      icon: <Layers className="w-6 h-6" />,
      image: '/Industries/8.png',
      description: language === 'en'
        ? "Enhancing manufacturing excellence, supply chain resilience, and digital operations for industrial companies."
        : "産業企業の製造卓越性、サプライチェーンの強靭性、デジタル運用の強化を支援します。",
      stats: [
        { value: "45%", label: language === 'en' ? "Productivity Boost" : "生産性向上" },
        { value: "35+", label: language === 'en' ? "Solutions" : "ソリューション数" }
      ],
      link: '#industrials'
    },
    {
      title: t('industries.private_equity_principal_investment'),
      icon: <Layers className="w-6 h-6" />,
      image: '/Industries/9.png',
      description: language === 'en'
        ? "Supporting investment decisions, portfolio company performance, and value creation strategies for private equity firms."
        : "プライベートエクイティ企業の投資判断、ポートフォリオ企業のパフォーマンス、価値創造戦略をサポートします。",
      stats: [
        { value: "28%", label: language === 'en' ? "ROI Improvement" : "ROI改善" },
        { value: "60+", label: language === 'en' ? "Transactions" : "取引数" }
      ],
      link: '#private-equity-principal-investment'
    },
    {
      title: t('industries.public_sector'),
      icon: <Layers className="w-6 h-6" />,
      image: '/Industries/10.png',
      description: language === 'en'
        ? "Advancing public service delivery, digital government initiatives, and organizational effectiveness in the public sector."
        : "公共部門における公共サービスの提供、デジタル政府イニシアチブ、組織の有効性の向上を促進します。",
      stats: [
        { value: "40%", label: language === 'en' ? "Service Improvement" : "サービス改善" },
        { value: "25+", label: language === 'en' ? "Agencies" : "機関数" }
      ],
      link: '#public-sector'
    },
    {
      title: t('industries.transportation_logistics'),
      icon: <Layers className="w-6 h-6" />,
      image: '/Industries/11.png',
      description: language === 'en'
        ? "Optimizing logistics networks, transportation systems, and supply chain visibility for enhanced performance and sustainability."
        : "パフォーマンスと持続可能性を高めるための物流ネットワーク、輸送システム、サプライチェーンの可視性を最適化します。",
      stats: [
        { value: "32%", label: language === 'en' ? "Efficiency Gain" : "効率性向上" },
        { value: "40+", label: language === 'en' ? "Networks" : "ネットワーク数" }
      ],
      link: '#transportation-logistics'
    },
    {
      title: t('industries.technology_media_telecommunications'),
      icon: <Layers className="w-6 h-6" />,
      image: '/Industries/12.png',
      description: language === 'en'
        ? "Enabling innovation, growth strategies, and digital business models for technology, media, and telecommunications companies."
        : "技術、メディア、通信企業のイノベーション、成長戦略、デジタルビジネスモデルを促進します。",
      stats: [
        { value: "65%", label: language === 'en' ? "Digital Transformation" : "デジタル変革" },
        { value: "50+", label: language === 'en' ? "Companies" : "企業数" }
      ],
      link: '#technology-media-telecommunications'
    }
  ];

  // Feature section for the selected industry
  const renderIndustryFeature = () => {
    const industry = industries[activeTab];
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-ycp-primary">{industry.title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
          
          <div className="flex space-x-8 mb-6">
            {industry.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-ycp-secondary">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <Link href={industry.link} className="inline-flex items-center text-ycp-primary hover:text-ycp-secondary transition-colors font-medium group mt-2">
            {language === 'en' ? 'Learn more' : '詳細を見る'}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl overflow-hidden h-80 lg:h-full"
        >
          <Image
            src={industry.image}
            alt={industry.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center text-white">
              <span className="bg-ycp-primary/80 backdrop-blur-sm rounded-full p-2 mr-3">
                {industry.icon}
              </span>
              <h4 className="text-xl font-semibold">{industry.title}</h4>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section id="our-industries" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-ycp-primary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-ycp-secondary/5 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ycp-primary to-ycp-secondary">
              {t('industries.title')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ycp-primary to-ycp-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('industries.description')}
          </p>
        </motion.div>

        {/* 行业选择器 - 平板和桌面版 */}
        <div className="hidden md:block mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {industries.slice(0, 6).map((industry, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === index 
                    ? 'bg-ycp-primary text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {industry.title}
              </motion.button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {industries.slice(6, 12).map((industry, index) => (
              <motion.button
                key={index + 6}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (index + 6) * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setActiveTab(index + 6)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === index + 6
                    ? 'bg-ycp-primary text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {industry.title}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* 行业选择器 - 移动版 */}
        <div className="md:hidden mb-8">
          <select 
            value={activeTab} 
            onChange={(e) => setActiveTab(Number(e.target.value))}
            className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700 focus:ring-ycp-primary focus:border-ycp-primary"
          >
            {industries.map((industry, index) => (
              <option key={index} value={index}>
                {industry.title}
              </option>
            ))}
          </select>
        </div>

        {/* 所选行业的特色展示 */}
        {renderIndustryFeature()}
        
        {/* 行业卡片展示 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.slice(0, 6).map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ycp-primary/90 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-2 mb-3">{industry.description}</p>
                    {/* <Link href={industry.link} className="inline-flex items-center text-white/90 hover:text-white transition-colors text-sm opacity-0 group-hover:opacity-100">
                      {language === 'en' ? 'Explore' : '詳細'} <ChevronRight className="ml-1 w-4 h-4" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 text-center"
        >
          <Link href="#industries-all" className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 hover:border-ycp-primary text-ycp-primary rounded-full shadow-sm hover:shadow transition-all">
            {language === 'en' ? 'View all industries' : 'すべての業界を見る'} <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}
