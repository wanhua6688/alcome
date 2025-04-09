'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ycp-blue mb-4">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-ycp-lightBlue mx-auto"></div>
        </motion.div>

        {/* History */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center gap-8 mb-12"
          >
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-ycp-blue mb-4">{t('about.history.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('about.history.content')}
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/company-history.jpg"
                alt="Company History"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row-reverse items-center gap-8"
          >
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-ycp-blue mb-4">{t('about.international.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('about.international.content')}
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/global-business.jpg"
                alt="Global Business"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Vision and Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gray-50 p-8 rounded-lg shadow-md mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold text-ycp-blue mb-4">{t('about.vision.title')}</h3>
              <p className="text-gray-700">
                {t('about.vision.content')}
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold text-ycp-blue mb-4">{t('about.mission.title')}</h3>
              <p className="text-gray-700">
                {t('about.mission.content')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Creating Miracles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-ycp-blue text-white p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">{t('about.miracles.title')}</h3>
          <p className="leading-relaxed">
            {t('about.miracles.content')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
