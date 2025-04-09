'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { Check, ArrowRight, ChevronRight, BarChart, Globe, Database, Users, Zap, Award, PieChart, TrendingUp, Clock } from 'lucide-react';

// 定义ServiceCard组件的props类型
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  index: number;
}

// ServiceCard子组件
function ServiceCard({ title, description, icon, features, image, index }: ServiceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className={`p-8 flex flex-col justify-center ${!isEven ? 'lg:order-2' : ''}`}>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ycp-primary/10 text-ycp-primary mb-5">
            {icon}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          
          <ul className="space-y-3 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2 mt-1 text-ycp-secondary"><Check size={16} /></span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          
         
        </div>
        
        <div className={`relative h-64 lg:h-auto ${!isEven ? 'lg:order-1' : ''}`}>
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ycp-primary/60 to-transparent opacity-70"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-white text-xl font-bold">{title}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 小型服务卡片组件
function ServiceFeatureCard({ title, description, icon, index }: { title: string, description: string, icon: React.ReactNode, index: number }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-ycp-primary/10 text-ycp-primary mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}

// 咨询流程步骤组件
function ProcessStep({ number, title, description, isActive, onClick }: { number: number, title: string, description: string, isActive: boolean, onClick: () => void }) {
  return (
    <motion.div 
      className={`cursor-pointer transition-all duration-300 ${isActive ? 'border-l-4 border-ycp-primary pl-4' : 'pl-5'}`}
      onClick={onClick}
      whileHover={{ x: 5 }}
    >
      <div className="flex items-center mb-2">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${isActive ? 'bg-ycp-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
          {number}
        </div>
        <h4 className={`font-semibold ${isActive ? 'text-ycp-primary' : 'text-gray-700'}`}>{title}</h4>
      </div>
      <div className="ml-11">
        <p className={`text-sm ${isActive ? 'text-gray-700' : 'text-gray-500'}`}>{description}</p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { t, language } = useLanguage();
  const [activeProcess, setActiveProcess] = useState(0);

  // 定义主要服务数据
  const services = [
    {
      title: t('services.strategic.title'),
      description: t('services.strategic.content'),
      icon: <TrendingUp size={24} />,
      image: '/Industries/1.png',
      features: [
        language === 'en' ? 'Comprehensive market analysis and strategic positioning' : '包括市場分析と戦略的位置付け',
        language === 'en' ? 'Competitive landscape assessment' : '競合環境評価',
        language === 'en' ? 'Growth opportunity identification' : '成長機会の特定',
        language === 'en' ? 'Resource optimization strategies' : 'リソース最適化戦略'
      ]
    },
    {
      title: t('services.international.title'),
      description: t('services.international.content'),
      icon: <Globe size={24} />,
      image: '/Industries/2.png',
      features: [
        language === 'en' ? 'Cross-cultural business development' : '異文化間ビジネス開発',
        language === 'en' ? 'Market entry strategy formulation' : '市場参入戦略の策定',
        language === 'en' ? 'Localization planning and execution' : 'ローカライゼーション計画と実行',
        language === 'en' ? 'International partnership development' : '国際的パートナーシップの構築'
      ]
    },
    {
      title: t('services.digital.title'),
      description: t('services.digital.content'),
      icon: <Database size={24} />,
      image: '/Industries/3.png',
      features: [
        language === 'en' ? 'Digital strategy development' : 'デジタル戦略の開発',
        language === 'en' ? 'Technology selection and implementation' : '技術選定と実装',
        language === 'en' ? 'Data-driven decision support' : 'データ駆動型意思決定支援',
        language === 'en' ? 'Digital transformation roadmapping' : 'デジタルトランスフォーメーションのロードマップ作成'
      ]
    },
    {
      title: t('services.organization.title'),
      description: t('services.organization.content'),
      icon: <Users size={24} />,
      image: '/Industries/4.png',
      features: [
        language === 'en' ? 'Leadership development programs' : 'リーダーシップ開発プログラム',
        language === 'en' ? 'Organizational structure optimization' : '組織構造の最適化',
        language === 'en' ? 'Change management implementation' : '変更管理の実施',
        language === 'en' ? 'Cultural transformation support' : '文化的変革支援'
      ]
    }
  ];

  // 专业服务领域
  const specializedServices = [
    {
      title: language === 'en' ? 'Market Research' : '市場調査',
      description: language === 'en' ? 'In-depth analysis of market trends, consumer behavior, and competitive landscape' : '市場動向、消費者行動、競合状況の詳細な分析',
      icon: <PieChart size={18} />
    },
    {
      title: language === 'en' ? 'Business Strategy' : 'ビジネス戦略',
      description: language === 'en' ? 'Development of tailored business strategies to achieve sustainable growth' : '持続可能な成長を達成するためのカスタムビジネス戦略の開発',
      icon: <TrendingUp size={18} />
    },
    {
      title: language === 'en' ? 'Process Optimization' : 'プロセス最適化',
      description: language === 'en' ? 'Streamlining operational processes to enhance efficiency and reduce costs' : '効率を高めコスト削減するための業務プロセス合理化',
      icon: <Zap size={18} />
    },
    {
      title: language === 'en' ? 'Merger & Acquisition' : '合併・買収',
      description: language === 'en' ? 'Expert guidance through M&A processes, from target identification to integration' : '対象特定から統合までのM&Aプロセス全体の専門的ガイダンス',
      icon: <BarChart size={18} />
    },
    {
      title: language === 'en' ? 'Performance Improvement' : 'パフォーマンス改善',
      description: language === 'en' ? 'Identifying and implementing strategic changes to enhance business performance' : 'ビジネスパフォーマンスを向上させるための戦略的変更の特定と実施',
      icon: <Award size={18} />
    },
    {
      title: language === 'en' ? 'Risk Management' : 'リスク管理',
      description: language === 'en' ? 'Comprehensive analysis and mitigation strategies for business risks' : 'ビジネスリスクのための包括的な分析と軽減戦略',
      icon: <Clock size={18} />
    }
  ];

  // 咨询流程步骤
  const consultingProcess = [
    {
      number: 1,
      title: language === 'en' ? 'Initial Assessment' : '初期評価',
      description: language === 'en' 
        ? 'Understanding your needs, objectives, organizational culture and company structure.'
        : 'お客様のニーズ、目標、組織文化、会社構造を理解します。'
    },
    {
      number: 2,
      title: language === 'en' ? 'Project Proposal' : 'プロジェクト提案',
      description: language === 'en'
        ? 'Detailed project plan including objectives, methods, timelines and costs.'
        : '目標、方法、タイムライン、コストを含む詳細なプロジェクト計画を提案します。'
    },
    {
      number: 3,
      title: language === 'en' ? 'Implementation' : '実施',
      description: language === 'en'
        ? 'Forming an expert team and developing customized solutions to advance your project.'
        : '専門家チームを形成し、プロジェクトを前進させるためのカスタマイズされたソリューションを開発します。'
    },
    {
      number: 4,
      title: language === 'en' ? 'Evaluation & Adjustment' : '評価と調整',
      description: language === 'en'
        ? 'Continuous monitoring, measuring results and making necessary adjustments to ensure success.'
        : '継続的なモニタリング、結果の測定、成功を確実にするための必要な調整を行います。'
    },
    {
      number: 5,
      title: language === 'en' ? 'Knowledge Transfer' : '知識移転',
      description: language === 'en'
        ? 'Ensuring your team has the skills and understanding to maintain progress after our engagement.'
        : 'お客様のチームが私たちのエンゲージメント後も進捗を維持するためのスキルと理解を持っていることを確認します。'
    }
  ];

  // 差异化优势
  const differentiators = [
    language === 'en' ? 'A highly specialized team of consultants with deep industry expertise' : '深い業界知識を持つ高度に専門化されたコンサルタントチーム',
    language === 'en' ? 'Dynamic and evolving analysis methodologies tailored to your specific needs' : 'お客様の特定のニーズに合わせた動的かつ進化する分析手法',
    language === 'en' ? 'Solutions focused on your actual situation with highly implementable recommendations' : '高度に実装可能な推奨事項を含む、お客様の実際の状況に焦点を当てたソリューション',
    language === 'en' ? 'Effective bridge between internal stakeholders and external expertise' : '内部関係者と外部の専門知識の間の効果的な架け橋',
    language === 'en' ? 'Continuous support throughout the implementation process' : '実装プロセス全体を通じた継続的なサポート'
  ];

  return (
    <section id="our-services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-ycp-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-ycp-secondary/5 rounded-full blur-3xl"></div>
      
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
              {t('services.title')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ycp-primary to-ycp-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === 'en' 
              ? 'We deliver comprehensive consulting services tailored to your unique business challenges, helping you navigate complex markets and seize growth opportunities.'
              : '私たちはお客様のユニークなビジネス課題に合わせた包括的なコンサルティングサービスを提供し、複雑な市場をナビゲートし、成長機会を捉えるお手伝いをします。'
            }
          </p>
        </motion.div>

        {/* 主要服务卡片 */}
        <div className="space-y-12 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              image={service.image}
              index={index}
            />
          ))}
        </div>
        
        {/* 专业服务领域网格 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {language === 'en' ? 'Specialized Expertise' : '専門的な知識'}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Our additional service areas where we bring specialized industry knowledge and proven methodologies.'
                : '専門的な業界知識と実証済みの方法論を提供する追加サービス分野です。'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => (
              <ServiceFeatureCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </motion.div>
        
        {/* 咨询流程 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('consulting.process.title')}</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              {consultingProcess.map((step, index) => (
                <ProcessStep
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isActive={activeProcess === index}
                  onClick={() => setActiveProcess(index)}
                />
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-ycp-primary/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={activeProcess}
              />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ycp-primary/10 text-ycp-primary mb-4">
                  {activeProcess === 0 ? <Users size={24} /> : 
                   activeProcess === 1 ? <BarChart size={24} /> : 
                   activeProcess === 2 ? <TrendingUp size={24} /> : 
                   activeProcess === 3 ? <PieChart size={24} /> : 
                   <Award size={24} />}
                </div>
                
                <h4 className="text-xl font-bold text-ycp-primary mb-4">
                  {consultingProcess[activeProcess].title}
                </h4>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {consultingProcess[activeProcess].description}
                </p>
                
                <div className="pt-4 border-t border-gray-200">
                  <h5 className="font-medium text-gray-800 mb-2">
                    {language === 'en' ? 'Key Activities:' : '主な活動：'}
                  </h5>
                  <ul className="space-y-2">
                    {activeProcess === 0 && (
                      <>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Stakeholder interviews' : 'ステークホルダーインタビュー'}</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Business needs analysis' : 'ビジネスニーズ分析'}</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Current state assessment' : '現状評価'}</span>
                        </li>
                      </>
                    )}
                    {activeProcess === 1 && (
                      <>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Detailed project planning' : '詳細なプロジェクト計画'}</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Resource allocation' : 'リソース配分'}</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Deliverable definition' : '成果物の定義'}</span>
                        </li>
                      </>
                    )}
                    {activeProcess === 2 && (
                      <>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Team formation' : 'チーム形成'}</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Solution development' : 'ソリューション開発'}</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Progress tracking' : '進捗追跡'}</span>
                        </li>
                      </>
                    )}
                    {activeProcess === 3 && (
                      <>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Performance measurement' : 'パフォーマンス測定'}</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Strategy refinement' : '戦略の改良'}</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Continuous improvement' : '継続的改善'}</span>
                        </li>
                      </>
                    )}
                    {activeProcess === 4 && (
                      <>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Training programs' : 'トレーニングプログラム'}</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Documentation creation' : '文書作成'}</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-ycp-secondary mr-2 mt-1" />
                          <span className="text-gray-600">{language === 'en' ? 'Ongoing support planning' : '継続的サポート計画'}</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* 差异化优势 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-ycp-primary to-ycp-secondary rounded-xl shadow-lg p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6">{t('consulting.difference.title')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 rounded-full p-1 mr-3 mt-0.5">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-white/90">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
