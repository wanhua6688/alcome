'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Users, Award, Calendar, FileText, TrendingUp, Globe, Target } from 'lucide-react';

export default function OverviewSection() {
  const { t, language } = useLanguage();

  // 公司核心价值观
  const coreValues = [
    {
      title: language === 'en' ? 'Excellence' : '卓越',
      description: language === 'en' 
        ? 'We strive for excellence in all aspects of our work, delivering high-quality results that exceed expectations.' 
        : '私たちは仕事のあらゆる側面で卓越性を追求し、期待を超える高品質の結果を提供します。',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: language === 'en' ? 'Integrity' : '誠実さ',
      description: language === 'en'
        ? 'We conduct our business with the highest standards of integrity, transparency, and accountability.' 
        : '私たちは最高水準の誠実さ、透明性、説明責任を持ってビジネスを行います。',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: language === 'en' ? 'Innovation' : '革新',
      description: language === 'en'
        ? 'We embrace innovative thinking and creative approaches to solve complex business challenges.' 
        : '私たちは革新的な思考と創造的なアプローチで複雑なビジネス課題を解決します。',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: language === 'en' ? 'Collaboration' : '協力',
      description: language === 'en'
        ? 'We believe in the power of collaboration, working closely with our clients as true partners.' 
        : '私たちは協力の力を信じ、クライアントと真のパートナーとして緊密に連携します。',
      icon: <Users className="w-6 h-6" />
    }
  ];

  // 里程碑成就
  const achievements = [
    {
      year: '2018',
      milestone: language === 'en' ? 'Company Founded in Tokyo' : '東京で会社設立'
    },
    {
      year: '2020',
      milestone: language === 'en' ? 'Expanded to 50+ Consultants' : '50人以上のコンサルタントに拡大'
    },
    {
      year: '2021',
      milestone: language === 'en' ? 'Opened Singapore Office' : 'シンガポールオフィス開設'
    },
    {
      year: '2023',
      milestone: language === 'en' ? 'Reached 100+ Enterprise Clients' : '100社以上の企業クライアントを獲得'
    },
    {
      year: '2025',
      milestone: language === 'en' ? 'Established Digital Transformation Practice' : 'デジタルトランスフォーメーション部門を設立'
    }
  ];

  return (
    <section id="overview" className="py-24 relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 z-0"></div>
      <div className="absolute bottom-40 -left-32 w-64 h-64 rounded-full bg-ycp-primary/5 blur-3xl"></div>
      <div className="absolute top-40 -right-32 w-80 h-80 rounded-full bg-ycp-secondary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* 左侧内容区域 */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10"
            >
              <div className="inline-block mb-4">
                <span className="text-sm text-ycp-primary font-medium bg-ycp-primary/10 py-1 px-3 rounded-full">
                  {language === 'en' ? 'About Us' : '会社概要'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-ycp-primary to-ycp-secondary bg-clip-text text-transparent">
                {t('overview.title')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-ycp-primary to-ycp-secondary mb-8"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <p className="text-gray-700 leading-relaxed">
                {t('overview.paragraph1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('overview.paragraph2')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('overview.paragraph3')}
              </p>
            </motion.div>
            
            {/* 按钮 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-8"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center bg-ycp-primary hover:bg-ycp-primary/90 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                {language === 'en' ? 'Get in Touch' : 'お問い合わせ'}
                <Target className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
            
            {/* 公司里程碑 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Calendar className="mr-2 w-5 h-5 text-ycp-primary" />
                {language === 'en' ? 'Our Journey' : '私たちの歩み'}
              </h3>
              
              <div className="relative pl-8 border-l-2 border-dashed border-gray-200 space-y-6">
                {achievements.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-ycp-primary/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-ycp-primary"></div>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-lg font-bold text-ycp-primary mr-4">{item.year}</span>
                      <span className="text-gray-700">{item.milestone}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* 右侧内容区域 */}
          <div className="lg:w-1/2">
            {/* 主图形象 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative mb-16"
            >
              <div className="relative h-[480px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/home.jpeg"
                  alt="Tokyo business district"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {language === 'en' ? 'Headquartered in Tokyo' : '東京に本社を置く'}
                    </h3>
                    <p className="text-white/80">
                      {language === 'en' 
                        ? 'Strategic location in the heart of Japan\'s business district' 
                        : '日本のビジネス街の中心にある戦略的なロケーション'
                      }
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 装饰元素 */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-8 border-ycp-primary/10 rounded-xl z-[-1]"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 border-8 border-ycp-secondary/10 rounded-xl z-[-1]"></div>
            </motion.div>
            
            {/* 核心价值观 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-xl shadow-xl p-8 relative z-10"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {language === 'en' ? 'Our Core Values' : '私たちの中心的価値観'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-10 h-10 rounded-full bg-ycp-primary/10 flex items-center justify-center text-ycp-primary">
                        {value.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* 公司统计数据 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-ycp-primary to-ycp-secondary p-1">
            <div className="bg-white rounded-xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                  {t('overview.stats.title')}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ycp-primary/10 text-ycp-primary mb-4 mx-auto">
                      <FileText className="w-6 h-6" />
                    </div>
                    <p className="text-3xl lg:text-4xl font-bold text-ycp-primary mb-1">
                      {t('overview.stats.projects_count')}
                    </p>
                    <p className="text-sm text-gray-500">{t('overview.stats.projects')}</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ycp-primary/10 text-ycp-primary mb-4 mx-auto">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <p className="text-3xl lg:text-4xl font-bold text-ycp-primary mb-1">
                      {t('overview.stats.years_count')}
                    </p>
                    <p className="text-sm text-gray-500">{t('overview.stats.years')}</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ycp-primary/10 text-ycp-primary mb-4 mx-auto">
                      <Globe className="w-6 h-6" />
                    </div>
                    <p className="text-3xl lg:text-4xl font-bold text-ycp-primary mb-1">
                      {t('overview.stats.clients_count')}
                    </p>
                    <p className="text-sm text-gray-500">{t('overview.stats.clients')}</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ycp-primary/10 text-ycp-primary mb-4 mx-auto">
                      <Users className="w-6 h-6" />
                    </div>
                    <p className="text-3xl lg:text-4xl font-bold text-ycp-primary mb-1">
                      {t('overview.stats.experts_count')}
                    </p>
                    <p className="text-sm text-gray-500">{t('overview.stats.experts')}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
