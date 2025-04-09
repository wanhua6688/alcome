'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Clock, Building, Send, CheckCircle, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success state
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        jobTitle: '',
        description: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: t('contact.info.address_title'),
      content: (
        <>
          <p>Alcome Consulting</p>
          <p>Toranomon Tower Office, 23F</p>
          <p>4-1-28 Toranomon, Minato-ku</p>
          <p>Tokyo, Japan 105-0001</p>
        </>
      )
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: t('contact.info.email_title'),
      content: (
        <a href="mailto:contact@alcome-consulting.jp" className="hover:underline">
          Contact@alcome-consulting.com
        </a>
      )
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: t('contact.info.hours_title'),
      content: (
        <>
          <p>{t('contact.info.hours_weekday')}</p>
          <p>{t('contact.info.hours_weekend')}</p>
        </>
      )
    },
  ];

  const services = [
    { name: 'Alcome', description: t('contact.services.ycp') },
    { name: 'Alcome Auctus', description: t('contact.services.auctus') },
    { name: 'Alcome Consus', description: t('contact.services.consus') }
  ];

  return (
    <section id="contact" className="py-20 relative bg-white overflow-hidden">
      {/* 装饰背景元素 */}
      <div className="absolute top-0 left-0 w-full h-64 bg-ycp-primary"></div>
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-ycp-secondary opacity-60 rounded-bl-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-ycp-primary/10 rounded-full"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-ycp-primary/10 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('contact.title')}
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-white/60 rounded-full"></div>
          </motion.h2>
          <motion.p 
            className="text-white/90 text-lg max-w-2xl mx-auto mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* 左侧信息栏 */}
              <div className="lg:col-span-5 bg-ycp-primary text-white p-8 md:p-12 relative">
                {/* 装饰元素 */}
                <div className="absolute -top-16 -left-16 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-xl md:text-2xl mb-8 relative inline-block">
                    {t('contact.get_in_touch')}
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white"></div>
                  </h3>
                  
                  <p className="mb-8 text-white/90 leading-relaxed">
                    {t('contact.company_intro')}
                  </p>
                  
                  {/* 联系信息 */}
                  <ul className="space-y-6 mb-12">
                    {contactInfo.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                        viewport={{ once: true }}
                      >
                        <div className="mr-4 bg-white/10 p-3 rounded-lg text-white">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-1">{item.title}</h4>
                          <div className="text-white/80 text-sm">{item.content}</div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* 我们的服务 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-xl mb-4 relative inline-block">
                    {t('contact.our_services')}
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white"></div>
                  </h3>
                  
                  <ul className="space-y-4">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 text-white">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{service.name}</h4>
                          <p className="text-white/80 text-sm">{service.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            
              {/* 右侧表单 */}
              <div className="lg:col-span-7 p-8 md:p-12">
                {isSubmitted ? (
                  <motion.div 
                    className="h-full flex flex-col items-center justify-center text-center p-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('contact.success.title')}</h3>
                    <p className="text-gray-600 mb-8">{t('contact.success.message')}</p>
                    <p className="text-sm text-gray-500">{t('contact.success.redirect')}</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-6">
                      {t('contact.form.title')}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-700">
                          {t('contact.form.full_name')}*
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ycp-primary focus:border-transparent"
                          placeholder={t('contact.form.full_name_placeholder')}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                          {t('contact.form.email')}*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ycp-primary focus:border-transparent"
                          placeholder={t('contact.form.email_placeholder')}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">
                          {t('contact.form.company')}*
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ycp-primary focus:border-transparent"
                          placeholder={t('contact.form.company_placeholder')}
                        />
                      </div>

                      <div>
                        <label htmlFor="jobTitle" className="block mb-2 text-sm font-medium text-gray-700">
                          {t('contact.form.job_title')}*
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ycp-primary focus:border-transparent"
                          placeholder={t('contact.form.job_title_placeholder')}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">
                        {t('contact.form.description')}*
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ycp-primary focus:border-transparent"
                        placeholder={t('contact.form.description_placeholder')}
                      />
                    </div>

                    <div className="mt-8">
                      <motion.button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-medium text-white bg-ycp-primary rounded-lg shadow-lg hover:bg-ycp-secondary transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t('contact.form.submit')}
                        <Send className="ml-2 w-4 h-4" />
                      </motion.button>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-4 text-center">
                      {t('contact.form.privacy_notice')}
                    </p>
                  </motion.form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
