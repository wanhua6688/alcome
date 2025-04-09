'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function ClientsSection() {
  const { t, language } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const clients = [
    { id: 1, logo: "/clients/1.svg", name: "Sony Corporation" },
    { id: 2, logo: "/clients/2.png", name: "Mitsubishi Group" },
    { id: 3, logo: "/clients/3.svg", name: "Toyota Motor" },
    { id: 4, logo: "/clients/4.png", name: "Hitachi" },
    { id: 5, logo: "/clients/5.png", name: "Panasonic" },
    { id: 6, logo: "/clients/6.png", name: "Toshiba" },
    { id: 7, logo: "/clients/7.png", name: "Canon Inc." },
    { id: 8, logo: "/clients/8.png", name: "Fujitsu" },
  ];

  const testimonials = [
    {
      id: 1,
      text: language === 'en' 
        ? "During our collaboration with Alcome Consulting, we found their team highly capable of supporting our understanding of the Asian market. Their hands-on approach in the marketplace enabled us to gain critical insights beyond just the data. This real-world experience was incredibly valuable for our business strategy."
        : "Alcomeコンサルティングとの協力の中で、彼らのチームはアジア市場の理解をサポートする能力が非常に高いことがわかりました。市場での彼らの実践的なアプローチにより、データだけでなく重要な洞察を得ることができました。この実際の経験は私たちのビジネス戦略にとって非常に価値がありました。",
      author: language === 'en' ? "Global Insights Manager" : "グローバルインサイトマネージャー",
      company: language === 'en' ? "Major Automotive Corporation" : "大手自動車メーカー",
      logo: "/images/clients/testimonial1.png"
    },
    {
      id: 2,
      text: language === 'en'
        ? "I want to thank Alcome for their assistance with our market opportunity study. Their experience in our served markets, thoroughness of research, and practical approach to strategic targeting made for a winning combination. The firm felt like a true extension of our business, something unique compared to other consulting organizations we've worked with."
        : "市場機会調査でのサポートに対してAlcomeに感謝したいと思います。私たちの市場での彼らの経験、調査の徹底さ、そして戦略的なターゲティングへの実践的なアプローチは勝利の組み合わせとなりました。同社は私たちのビジネスの真の拡張のように感じられ、これまで協力してきた他のコンサルティング組織とは異なるユニークなものでした。",
      author: language === 'en' ? "Executive Vice President" : "執行副社長",
      company: language === 'en' ? "Global Industrial Corporation" : "グローバル産業企業",
      logo: "/images/clients/testimonial2.png"
    },
    {
      id: 3,
      text: language === 'en'
        ? "Alcome Consulting provided invaluable support for our Japanese market expansion. Their deep understanding of local business culture and regulatory environment helped us navigate complex challenges with confidence. Their strategic guidance transformed our approach and accelerated our growth significantly."
        : "Alcomeコンサルティングは、日本市場拡大に向けて非常に貴重なサポートを提供してくれました。彼らの地元ビジネス文化と規制環境に対する深い理解により、複雑な課題に自信を持って対処することができました。彼らの戦略的なガイダンスは私たちのアプローチを変革し、成長を大幅に加速しました。",
      author: language === 'en' ? "Director of International Operations" : "国際業務ディレクター",
      company: language === 'en' ? "Tech Innovation Leader" : "テクノロジーイノベーションリーダー",
      logo: "/images/clients/testimonial3.png"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="our-clients" className="py-24 bg-gray-50 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-ycp-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-ycp-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="bg-ycp-primary/10 text-ycp-primary text-sm font-medium px-4 py-1.5 rounded-full">
              {t('clients.subtitle')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ycp-primary mb-4">
            {t('clients.title')}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t('clients.description')}
          </p>
        </motion.div>

        {/* 客户标志 - 平滑滚动版本 */}
        <div className="relative mb-24 mx-auto max-w-5xl overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div 
            ref={sliderRef}
            className="flex items-center space-x-12 animate-scroll-slow"
          >
            {/* 复制两次以确保无限滚动效果 */}
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`client-${client.id}-${index}`}
                className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-md p-4 flex items-center justify-center"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-10 w-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 见证部分 */}
        <div className="px-4 py-8 md:py-12 bg-white rounded-2xl shadow-xl relative mb-16 max-w-5xl mx-auto">
          {/* 装饰元素 */}
          <div className="absolute -top-5 -left-5 w-20 h-20 bg-ycp-primary/10 rounded-full"></div>
          <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-ycp-primary/20 rounded-full"></div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-ycp-primary text-center relative z-10">
            {t('clients.testimonials.title')}
          </h3>
          
          <div className="relative">
            <AnimatePresence mode='wait'>
              <motion.div
                key={`testimonial-${activeTestimonial}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col md:flex-row items-start gap-8"
              >
                <div className="w-full md:w-1/4 flex justify-center md:block">
                  <div className="relative">
                    <div className="w-20 h-20 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={testimonials[activeTestimonial].logo}
                        alt={testimonials[activeTestimonial].company}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="absolute -top-2 -left-2 p-2 bg-ycp-primary rounded-full text-white shadow-lg">
                      <Quote size={16} />
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-3/4">
                  <p className="text-gray-700 italic leading-relaxed mb-6">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-bold text-ycp-primary">{testimonials[activeTestimonial].author}</p>
                    <p className="text-gray-600 text-sm">{testimonials[activeTestimonial].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* 导航控制 */}
            <div className="mt-8 flex justify-center space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white border border-gray-200 text-ycp-primary hover:bg-ycp-primary hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeTestimonial === idx 
                        ? 'bg-ycp-primary w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`View testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white border border-gray-200 text-ycp-primary hover:bg-ycp-primary hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* CTA部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            {t('clients.cta.title')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('clients.cta.description')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-ycp-primary hover:bg-ycp-secondary text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            {t('clients.cta.button')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
