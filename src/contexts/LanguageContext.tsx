'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 创建翻译类型接口
interface TranslationDict {
  [key: string]: string;
}

interface Translations {
  en: TranslationDict;
  ja: TranslationDict;
}

// 翻译数据
const translations: Translations = {
  en: {
    // 导航
    'nav.overview': 'Overview',
    'nav.services': 'Our Services',
    'nav.about': 'About Us',
    'nav.industries': 'Industries',
    'nav.strategies': 'Key Strategies',
    'nav.clients': 'Our Clients',
    'nav.contact': 'Contact Us',
    
    // 首页英雄区
    'hero.title': 'Strategic Consulting for Japanese Business',
    'hero.subtitle': 'Navigate the Global Market with Confidence',
    'hero.description': 'Alcome provides comprehensive consulting services to help Japanese companies expand globally and international companies enter the Japanese market.',
    'hero.cta': 'Contact Us',
    'hero.learn_more': 'Learn More',
    'hero.stats.clients': 'Satisfied Clients',
    'hero.stats.years': 'Years Experience',
    'hero.stats.experts': 'Expert Consultants',
    'hero.stats.satisfaction': 'Client Satisfaction',
    'hero.card.title': 'Expert Business Solutions',
    'hero.card.subtitle': 'Tailored to your needs',
    
    // 概述区域
    'overview.title': 'Overview',
    'overview.paragraph1': 'The headquarters of Alcome specializes in management consulting. We have assembled an outstanding team of consultants and a network of experts. Based on professional theories and sophisticated analytical techniques, we provide decision-making support for our clients\' company reforms, planning, and advancement of new business ventures.',
    'overview.paragraph2': 'Choosing Alcome as your partner means you will receive support from a professional team that not only understands the local market environment but also possesses an international perspective. We will work hand in hand with you to overcome complex business challenges and help your company move forward continuously.',
    'overview.paragraph3': 'With over 15 years of experience in the Japanese market, our team has successfully completed numerous projects across various industries, earning the trust and recognition of our clients.',
    'overview.stats.title': 'Alcome in Numbers',
    'overview.stats.projects_count': '300+',
    'overview.stats.projects': 'Successful Projects',
    'overview.stats.years_count': '15+',
    'overview.stats.years': 'Years of Experience',
    'overview.stats.clients_count': '120+',
    'overview.stats.clients': 'Satisfied Clients',
    'overview.stats.experts_count': '35+',
    'overview.stats.experts': 'Industry Experts',
    
    // 关于我们
    'about.title': 'About Us',
    'about.history.title': 'History',
    'about.history.content': 'Alcome was co-founded by several founding members who previously served as senior consultants at Mitsubishi Group and Sumitomo Group, focusing on providing management consulting services to specific enterprises. Alcome excels in economic research related to domestic and global issues, assisting clients in achieving their business goals through strategic planning, market research, and policy recommendations. Currently, Alcome also helps clients expand new ventures globally, identifying political, economic, legal, and other risk factors to provide sound decision-making advice and mitigate risks. Our services are not limited to Japanese clients but have expanded to South Korea, China, and Europe and America. Through customized consulting services, Alcome assists client companies in navigating the ever-changing market environment, further enhancing its specialized capabilities and market insights.',
    'about.international.title': 'International Perspective Consulting Services',
    'about.international.content': 'We have accumulated extensive experience in Japan, supporting Japanese companies in their business expansion and overseas policy formulation with numerous successful cases. Alcome has evolved into a global consulting partner with an international perspective. It is not uncommon for Japanese companies to expand overseas, encompassing clients from various industries and sizes. However, conducting relevant market research independently can be quite challenging for companies looking to expand abroad. Therefore, this service aims to facilitate the smooth expansion of client businesses overseas by helping them formulate business strategies, identify political, economic, legal, and other risk factors, mitigate risks in advance, and adjust and finalize market adaptation strategies.',
    'about.vision.title': 'Our Vision',
    'about.vision.content': 'To enable companies to see the future and create prosperity in the world of tomorrow through our professional expertise.',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'To meet challenges with knowledge and create miracles through professionalism.',
    'about.miracles.title': 'What is Creating Miracles?',
    'about.miracles.content': 'Alcome is dedicated to innovating a new consulting model. This new model delivers creative, sustainable, and customized consulting experiences to clients. At this point, Alcome acts more like a knowledge hub, aggregating expertise from various industries and fields. We hope to hear clients say, "Working with Alcome is a delightful experience." This is because only when clients express their genuine thoughts can we truly perceive them, which becomes the driving force for Alcome to keep moving forward. Regardless of the size or prospects of the client\'s company or industry, we will assemble the best consulting team to address the client\'s needs, using their professional knowledge and experience to provide the best decision-making support.',
    
    // 服务
    'services.title': 'Our Services',
    'services.industries.title': 'Industries',
    'services.industries.items': 'Real Estate, Food, Energy, Finance, Manufacturing, Public Sector',
    'services.offerings.title': 'Services',
    'services.strategic.title': 'Customized Strategic Design',
    'services.strategic.content': 'Customize strategic plans from vision to action by conducting in-depth research on industry trends and market demands to identify growth opportunities and optimize resource allocation. This includes evaluating existing businesses, enhancing competitiveness, exploring new business areas, etc. The goal is to develop a plan that aligns with the company\'s vision and meets market needs, ensuring the company stays competitive and achieves sustainable growth.',
    'services.international.title': 'International Market Expansion Support',
    'services.international.content': 'Assist Japanese companies in entering overseas markets with economic growth potential; conduct thorough analyses of the cultural background, legal environment, and competitive landscape of target markets. Develop risk management strategies, propose market entry strategies, and help clients implement their expansion plans smoothly.',
    'services.digital.title': 'Digital Transformation',
    'services.digital.content': 'Plan and execute digital strategies, including technology selection, data-driven decision support, implementation support, etc.',
    'services.organization.title': 'Organization and Transformation',
    'services.organization.content': 'Provide services such as cultural change, leadership development, employee training, and incentive mechanism design; support enterprises in transitioning smoothly to new working methods, unlocking employee potential, and achieving comprehensive transformation.',
    
    // 咨询
    'consulting.title': 'Consulting',
    'consulting.process.title': 'Consulting Process',
    'consulting.process.step1': 'Initial Communication and Needs Assessment: When we receive your consulting request, we will first conduct an initial communication to fully understand your needs, background, objectives, as well as your organizational culture and company structure.',
    'consulting.process.step2': 'Project Proposal: Based on the results of the initial communication, we will present a detailed project proposal, including clear objectives, implementation methods, timelines, and costs, ensuring both parties have a consistent understanding of the project\'s expectations and steps.',
    'consulting.process.step3': 'Project Execution: Once you agree with our proposal, we will officially form a team of highly skilled and experienced consultants. Combining external expertise and internal accumulated experience, we will begin advancing the project and develop innovative and customized solutions and action plans.',
    'consulting.difference.title': 'What Sets Us Apart from Other Consulting Firms',
    'consulting.difference.item1': 'A highly specialized team of consultants.',
    'consulting.difference.item2': 'Dynamic and evolving analysis approaches.',
    'consulting.difference.item3': 'More focused on clients\' actual situations than any other consulting firm, ensuring our recommendations are highly implementable.',
    'consulting.difference.item4': 'Acting as a bridge for internal communication within client companies and between clients and experts.',
    
    // 行业部分
    'industries.title': 'Our Industries',
    'industries.description': 'We provide consulting services across various industries, helping businesses navigate complex challenges and seize growth opportunities.',
    'industries.real_estate': 'Real Estate',
    'industries.food': 'Food & Agriculture',
    'industries.energy': 'Energy & Resources',
    'industries.finance': 'Financial Services',
    'industries.manufacturing': 'Manufacturing',
    'industries.public_sector': 'Public Sector',
    'industries.aerospace_defense': 'Aerospace & Defense',
    'industries.automotive_mobility': 'Automotive & Mobility',
    'industries.energy_natural_resources': 'Energy & Natural Resources',
    'industries.construction_infrastructure': 'Construction & Infrastructure',
    'industries.consumer_retail': 'Consumer & Retail',
    'industries.financial_services': 'Financial Services',
    'industries.healthcare': 'Healthcare',
    'industries.industrials': 'Industrials',
    'industries.private_equity_principal_investment': 'Private Equity & Investment',
    'industries.transportation_logistics': 'Transportation & Logistics',
    'industries.technology_media_telecommunications': 'Technology & Media',
    
    // 专家部分
    'experts.title': 'Meet Our Experts',
    'experts.subtitle': 'Our team of experts brings years of industry experience and a deep understanding of the Japanese market to deliver exceptional results for our clients.',
    
    // 策略部分
    'strategies.title': 'Key Adaptation Strategies in Japan',
    'strategies.subtitle': 'Navigate the Japanese Market',
    'strategies.description': 'Our consulting expertise provides you with tailored strategies to successfully enter and thrive in the Japanese market.',
    'strategies.learn_more': 'Learn More',
    'strategies.items.market_entry.title': 'Market Entry Strategies',
    'strategies.items.market_entry.description': 'Comprehensive approaches to enter and establish presence in new markets with minimal risk and maximum impact.',
    'strategies.items.growth.title': 'Growth & Expansion',
    'strategies.items.growth.description': 'Tailored strategies to accelerate business growth, increase market share, and scale operations efficiently.',
    'strategies.items.optimization.title': 'Business Optimization',
    'strategies.items.optimization.description': 'Process improvement and operational optimization to enhance efficiency, reduce costs, and maximize profitability.',
    'strategies.items.digital.title': 'Digital Transformation',
    'strategies.items.digital.description': 'Leveraging cutting-edge technologies to transform business models and create competitive advantages.',
    
    'strategies.regulatory.title': 'Regulatory Hurdles for Foreign Businesses in Japan',
    'strategies.regulatory.point1': 'With strict regulations, the Japanese market remains challenging for some, exemplified by the complex compliance landscape according to the Organization for Economic Co-operation and Development (OECD).',
    'strategies.regulatory.point2': 'To overcome these barriers, adequate consultation with local stakeholders can be beneficial; businesses attuned to regulatory norms report smoother market navigation.',
    
    'strategies.costs.title': 'High Operating Costs in Major Japanese Cities',
    'strategies.costs.point1': 'Tokyo and Osaka are among the most expensive cities worldwide, escalating operational expenses as ranked by multiple global cost of living surveys.',
    'strategies.costs.point2': 'Employing cost management strategies, like leveraging government incentive programs, including various economic initiatives, can help mitigate operating costs significantly.',
    
    'strategies.innovation.title': 'Japan\'s Tech and Innovation Industry Leading the Future',
    'strategies.innovation.point1': 'Japan ranks among global leaders with robust investment in R&D, facilitating advancement in robotics, AI, and fintech sectors.',
    'strategies.innovation.point2': 'Engage comprehensively within tech incubators or partner in R&D initiatives to potentially tap into a market poised for significant growth.',
    
    'strategies.export.title': 'Optimized Export Framework for New Market Entrants',
    'strategies.export.point1': 'Japan\'s Free Trade Agreements covering a substantial portion of global GDP open diverse avenues, reducing barriers for entrants into the extensive APAC trade landscape.',
    'strategies.export.point2': 'Foreign firms can benefit enormously from strategic support initiatives with focused measures to streamline market entry and establishment.',
    
    // 客户部分
    'clients.title': 'Our Trusted Partners',
    'clients.subtitle': 'Clients & Partners',
    'clients.description': 'We are proud to work with these leading organizations across various industries in Japan and globally.',
    'clients.testimonials.title': 'Client Success Stories',
    'clients.cta.title': 'Join Our Growing Network of Successful Clients',
    'clients.cta.description': 'Discover how our consulting expertise can help your business achieve its goals in the Japanese market.',
    'clients.cta.button': 'Get Started Today',
    
    // 案例研究部分
    'casestudies.title': 'Results Through Expertise: Case Studies',
    'casestudies.subtitle': 'Learn how we help clients build and implement strategies that drive sustainable growth in today\'s complex business landscape.',
    'casestudies.client': 'Client',
    'casestudies.area': 'Area',
    'casestudies.expertise': 'Expertise Scope',
    'casestudies.summary': 'Project Summary',
    'casestudies.readmore': 'Read Full Case Study',
    'casestudies.viewall': 'View All Case Studies',
    
    // 媒体部分
    'media.title': 'Alcome in Media',
    'media.subtitle': 'Discover our latest media appearances and recognition in industry publications',
    'media.readmore': 'Read Article',
    'media.viewall': 'View All Media Coverage',
    
    // 出版物部分
    'publications.title': 'Publications',
    'publications.subtitle': 'Explore our research papers, whitepapers, and industry analyses',
    'publications.readmore': 'Read Publication',
    'publications.viewall': 'View All Publications',
    
    // 联系我们
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Arrange a session with our experts to explore how Alcome can assist you in addressing your business challenges.',
    'contact.get_in_touch': 'Get In Touch',
    'contact.company_intro': 'Alcome Consulting is a leading professional firm in Japan delivering tailored consulting solutions:',
    'contact.our_services': 'Our Solutions',
    
    'contact.services.ycp': 'Strategy and management consulting',
    'contact.services.auctus': 'Cross-border M&A and investment advisory',
    'contact.services.consus': 'Data-driven market research and insights',
    
    'contact.info.address_title': 'Office Address',
    'contact.info.email_title': 'Email Us',
    'contact.info.hours_title': 'Business Hours',
    'contact.info.hours_weekday': 'Mon-Fri: 9:00 AM - 6:00 PM',
    'contact.info.hours_weekend': 'Closed on Weekends and Holidays',
    
    'contact.form.title': 'Send Us a Message',
    'contact.form.full_name': 'Full Name',
    'contact.form.full_name_placeholder': 'Enter your full name',
    'contact.form.email': 'Email Address',
    'contact.form.email_placeholder': 'Enter your email address',
    'contact.form.company': 'Company',
    'contact.form.company_placeholder': 'Enter your company name',
    'contact.form.job_title': 'Job Title',
    'contact.form.job_title_placeholder': 'Enter your job title',
    'contact.form.description': 'How can we help?',
    'contact.form.description_placeholder': 'Please describe how we can help you',
    'contact.form.submit': 'Submit Request',
    'contact.form.privacy_notice': 'By submitting this form, you agree to our privacy policy and terms of service.',
    
    'contact.success.title': 'Thank You for Contacting Us!',
    'contact.success.message': 'Your message has been successfully submitted. Our team will contact you shortly.',
    'contact.success.redirect': 'This form will reset in a few seconds...',
    
    // 页脚
    'footer.quick_links': 'Quick Links',
    'footer.all_rights_reserved': 'All Rights Reserved.',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.company_description': 'Alcome Consulting is your trusted partner for expanding business in Japan and Asia. We provide strategic advisory and implementation support for companies looking to navigate complex markets.',
    'footer.address': 'Toranomon Tower Office, 23F, 4-1-28 Toranomon, Minato-ku, Tokyo, Japan 105-0001',
    'footer.services_strategy': 'Strategic Planning',
    'footer.services_market': 'Market Entry',
    'footer.services_digital': 'Digital Transformation',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter_description': 'Subscribe to our newsletter to receive the latest updates, insights, and opportunities in the Japanese market.',
    'footer.email_placeholder': 'Enter your email address',
    'footer.subscribe_success': 'Thank you for subscribing! You will receive our updates soon.',
    'footer.follow_us': 'Follow Us',
    'footer.privacy_policy': 'Privacy Policy',
    'footer.terms_of_service': 'Terms of Service',
    'footer.cookies_policy': 'Cookies Policy',
  },
  ja: {
    // 导航
    'nav.overview': 'がいよう',
    'nav.services': 'サービス',
    'nav.about': '会社概要',
    'nav.industries': '業界',
    'nav.strategies': '主要戦略',
    'nav.clients': '取引先',
    'nav.contact': 'お問い合わせ',
    
    // ヒーローセクション
    'hero.title': '日本企業向け戦略コンサルティング',
    'hero.subtitle': '自信を持ってグローバル市場を進む',
    'hero.description': 'Alcome は、日本企業のグローバル展開と外資系企業の日本市場参入を支援する包括的なコンサルティングサービスを提供しています。',
    'hero.cta': 'お問い合わせ',
    'hero.learn_more': '詳細を見る',
    'hero.stats.clients': 'お客様数',
    'hero.stats.years': '経験年数',
    'hero.stats.experts': 'コンサルタント数',
    'hero.stats.satisfaction': '顧客満足度',
    'hero.card.title': '専門的なビジネスソリューション',
    'hero.card.subtitle': 'お客様のニーズに合わせて',
    
    // 概要エリア
    'overview.title': 'がいよう',
    'overview.paragraph1': 'Alcome の本部は、経営管理コンサルティングに特化しています。私たちは優秀なコンサルタントチームと専門家のネットワークを構築しました。専門的な理論と洗練された分析技術に基づき、クライアント企業の改革実施や新事業の経営領域の企画・推進に対する意思決定支援を提供します。',
    'overview.paragraph2': 'Alcome を選んでパートナーとすることで、ローカルの市場環境に精通し、さらに国際的な視野を持つプロフェッショナルチームのサポートが得られます。私たちはあなたと共に複雑なビジネス課題を克服し、企業が継続的に前進できるよう支援します。',
    'overview.paragraph3': '日本市場で15年以上の経験を持つ私たちのチームは、様々な業界で数多くのプロジェクトを成功裏に完了し、クライアントからの信頼と評価を得ています。',
    'overview.stats.title': '数字で見るAlcome',
    'overview.stats.projects_count': '300+',
    'overview.stats.projects': '成功したプロジェクト',
    'overview.stats.years_count': '15+',
    'overview.stats.years': '年の経験',
    'overview.stats.clients_count': '120+',
    'overview.stats.clients': '満足したクライアント',
    'overview.stats.experts_count': '35+',
    'overview.stats.experts': '業界専門家',
    
    // 会社概要
    'about.title': '会社概要',
    'about.history.title': '歴史',
    'about.history.content': 'Alcomeは、三菱グループや住友グループでシニアコンサルタントを務めた創業メンバーによって共同設立され、特定企業向けの経営管理コンサルティングサービスに焦点を当てています。Alcomeは国内および国際的な問題に関する経済研究に強みを持ち、戦略的プランニング、市場調査、政策提言を通じてクライアントが事業目標を達成するのを支援します。現在、Alcomeはクライアントがグローバルな新事業展開を行う際に、政治的、経済的、法的なリスク要因を明確にし、適切な意思決定の助言を提供することでリスクを回避する手助けをしています。私たちのサービスは日本国内のクライアントだけでなく、韓国、中国、そして欧米地域にも広がっています。カスタマイズされたコンサルティングサービスを通じて、Alcomeはクライアント企業が変化する市場環境に対応できるよう支援し、専門的な能力と市場洞察力をさらに向上させています。',
    'about.international.title': '国際的な視点を持つコンサルティングサービス',
    'about.international.content': '私たちは日本国内で豊富な経験を積み、日本の企業の事業拡大や海外政策策定をサポートし、多くの成功事例を持っています。Alcomeは国際的な視野を持つグローバルなコンサルティングパートナーへと進化しました。日本の企業が海外に進出することは珍しくなく、さまざまな業界や規模のお客様が含まれます。しかし、海外進出を考える企業にとって、関連する市場調査を独立して行うことは非常に困難です。そのため、このサービスは、クライアント企業の海外での事業展開を円滑に進めるために、ビジネス戦略の策定、政治的、経済的、法的なリスク要因の特定、リスクの事前回避、および市場適応戦略の調整と確定を支援することを目的としています。',
    'about.vision.title': '私たちのビジョン',
    'about.vision.content': '専門的な知識を通じて、企業が未来を見据え、明日の世界で繁栄を創造できるようにすること。',
    'about.mission.title': '私たちの使命',
    'about.mission.content': '知識で課題に立ち向かい、プロフェッショナリズムで奇跡を創造すること。',
    'about.miracles.title': '奇跡を創り出すとは？',
    'about.miracles.content': 'Alcomeは新しいコンサルティングモデルの革新に取り組んでいます。この新しいモデルは、創造的で持続可能かつカスタマイズされたコンサルティング体験をクライアントに提供します。この時、Alcomeはより知識のハブとして機能し、さまざまな業界や分野からの専門知識を集約します。私たちはクライアントから「Alcomeとの協力は喜びです」という言葉を聞くことを望んでいます。これは、クライアントが自発的な意見を表明したときにのみ、我々が真にそれを感じ取り、それがAlcomeが前進し続ける原動力になるからです。クライアント企業や業界の規模や見通しに関わらず、私たちはクライアントのニーズに対応する最適なコンサルティングチームを編成し、その専門知識と経験を活用して最高の意思決定支援を提供します。',
    
    // サービス
    'services.title': '私たちのサービス',
    'services.industries.title': '業界',
    'services.industries.items': '不動産、食品、エネルギー、金融、製造業、公共部門など',
    'services.offerings.title': 'サービス',
    'services.strategic.title': 'カスタマイズされた戦略設計',
    'services.strategic.content': 'ビジョンから行動までをカスタマイズした戦略計画を作成します。業界動向や市場ニーズに関する深い研究を通じて、成長機会を特定し、リソース配分を最適化します。これには既存事業の評価、競争力の向上、新規事業領域の探索などが含まれます。目標は企業のビジョンに合致し、市場ニーズに対応する計画を作成し、企業が競争力を維持し、持続可能な成長を達成することです。',
    'services.international.title': '国際市場拡大サポート',
    'services.international.content': '日本企業が経済成長の可能性を持つ海外市場に進出するのを支援します。対象市場の文化背景、法的環境、競争状況を詳細に分析します。リスク管理戦略を開発し、市場参入戦略を提案し、クライアントの拡大計画がスムーズに実施されるようにします。',
    'services.digital.title': 'デジタルトランスフォーメーション',
    'services.digital.content': 'デジタル戦略の企画と実行を行います。技術選択、データ駆動の意思決定支援、実装支援などを含みます。',
    'services.organization.title': '組織と変革',
    'services.organization.content': '文化的変革、リーダーシップ開発、従業員研修、インセンティブメカニズムの設計などのサービスを提供します。新しい働き方にスムーズに移行し、従業員の潜在能力を引き出し、全体的な変革を達成するためのサポートを行います。',
    
    // コンサルティング
    'consulting.title': 'コンサルティング',
    'consulting.process.title': 'コンサルティングのプロセス',
    'consulting.process.step1': '初期コミュニケーションとニーズの理解： お客様からのコンサルティング依頼を受けた際、まず初めに初期コミュニケーションを行い、お客様のニーズ、背景、目標、組織文化や会社構造を完全に理解します。',
    'consulting.process.step2': 'プロジェクト提案： 初期コミュニケーションの結果に基づき、明確な目標、実施方法、タイムライン、費用を含む詳細なプロジェクト提案を行います。これにより、双方がプロジェクトの期待と手順について一貫した理解を持つようにします。',
    'consulting.process.step3': 'プロジェクト推進： お客様が私たちの提案に同意された後、高スキルかつ経験豊富なコンサルタントで構成される専門チームを正式に結成します。外部の専門知識と内部で蓄積された経験を組み合わせ、プロジェクトを進め、革新的かつカスタマイズされたソリューションとアクションプランを作成します。',
    'consulting.difference.title': '他のコンサルティング会社との違い',
    'consulting.difference.item1': '高度に専門化されたコンサルタントチーム。',
    'consulting.difference.item2': '動的で進化する分析アプローチ。',
    'consulting.difference.item3': '他のコンサルティング会社よりも、クライアントの実際の状況に焦点を当て、私たちの提案が高い実行可能性を確保します。',
    'consulting.difference.item4': 'クライアント企業内での内部コミュニケーションとクライアントと専門家の間の架け橋としての役割を果たします。',
    
    // 行業部分
    'industries.title': '私たちの業界',
    'industries.description': '私たちは様々な業界でコンサルティングサービスを提供し、企業が複雑な課題を乗り越え、成長の機会を捉えるのを支援します。',
    'industries.real_estate': '不動産',
    'industries.food': '食品・農業',
    'industries.energy': 'エネルギー・資源',
    'industries.finance': '金融サービス',
    'industries.manufacturing': '製造業',
    'industries.public_sector': '公共部門',
    'industries.aerospace_defense': '航空宇宙・防衛',
    'industries.automotive_mobility': '自動車・モビリティ',
    'industries.energy_natural_resources': 'エネルギー・天然資源',
    'industries.construction_infrastructure': '建設・インフラ',
    'industries.consumer_retail': '消費財・小売',
    'industries.financial_services': '金融サービス',
    'industries.healthcare': 'ヘルスケア',
    'industries.industrials': '産業機器',
    'industries.private_equity_principal_investment': 'プライベートエクイティ・投資',
    'industries.transportation_logistics': '運輸・物流',
    'industries.technology_media_telecommunications': 'テクノロジー・メディア',
    
    // 専門家部分
    'experts.title': '専門家のご紹介',
    'experts.subtitle': '私たちの専門家チームは、長年の業界経験と日本市場への深い理解を持ち、クライアントに優れた結果を提供します。',
    
    // 戦略部分
    'strategies.title': '日本における重要な適応戦略',
    'strategies.subtitle': '日本市場をナビゲート',
    'strategies.description': '当社のコンサルティング専門知識により、日本市場に成功して参入し、繁栄するためのカスタマイズされた戦略を提供します。',
    'strategies.learn_more': '詳細を見る',
    'strategies.items.market_entry.title': '市場参入戦略',
    'strategies.items.market_entry.description': 'リスクを最小限に抑え、最大の効果を発揮する、新市場への参入と存在感確立のための総合的アプローチ。',
    'strategies.items.growth.title': '成長と拡大',
    'strategies.items.growth.description': 'ビジネス成長を加速し、市場シェアを拡大し、効率的に事業規模を拡大するためのカスタマイズされた戦略。',
    'strategies.items.optimization.title': 'ビジネス最適化',
    'strategies.items.optimization.description': '効率性を高め、コストを削減し、収益性を最大化するためのプロセス改善と運用最適化。',
    'strategies.items.digital.title': 'デジタルトランスフォーメーション',
    'strategies.items.digital.description': '最先端技術を活用してビジネスモデルを変革し、競争優位性を創出。',
    
    'strategies.regulatory.title': '規制フレームワーク',
    'strategies.regulatory.point1': '厳格な規制により、経済協力開発機構（OECD）によると、日本市場は複雑なコンプライアンス環境のため、一部の企業にとっては参入が難しいままです。',
    'strategies.regulatory.point2': 'これらの障壁を克服するには、地元のステークホルダーとの適切な協議が有益です。規制の規範に精通している企業は、市場ナビゲーションがよりスムーズであると報告しています。',
    
    'strategies.costs.title': '日本の主要都市における高い運営コスト',
    'strategies.costs.point1': '東京と大阪は世界で最も高価な都市の一つであり、複数のグローバルな生活費調査によると運営費用が高騰しています。',
    'strategies.costs.point2': '様々な経済イニシアチブを含む政府の奨励プログラムを活用するなど、コスト管理戦略を採用することで、運営コストを大幅に軽減することができます。',
    
    'strategies.innovation.title': '日本のテクノロジーとイノベーション産業が未来をリード',
    'strategies.innovation.point1': '日本は研究開発への堅固な投資により世界のリーダーの一つであり、ロボット工学、AI、フィンテック分野の進歩を促進しています。',
    'strategies.innovation.point2': '技術インキュベーターに包括的に参加するか、研究開発イニシアチブにパートナーとして参加し、大きな成長が見込まれる市場に参入する可能性があります。',
    
    'strategies.export.title': '新規市場参入者向けの最適化された輸出フレームワーク',
    'strategies.export.point1': '日本の自由貿易協定は世界のGDPの相当部分をカバーし、APAC貿易市場への参入者に多様な道を開き、障壁を減らしています。',
    'strategies.export.point2': '外国企業は、市場参入と確立を合理化するための戦略的支援イニシアチブから大きな恩恵を受けることができます。',
    
    // クライアント部分
    'clients.title': '信頼されるパートナー',
    'clients.subtitle': 'クライアント＆パートナー',
    'clients.description': '日本およびグローバルで様々な業界の有力企業と協力してきました。',
    'clients.testimonials.title': 'クライアントの成功事例',
    'clients.cta.title': '成功するクライアントの成長ネットワークに参加しましょう',
    'clients.cta.description': '当社のコンサルティング専門知識が、日本市場でのビジネス目標達成にどのように役立つかをご覧ください。',
    'clients.cta.button': '今すぐ始める',
    
    // ケーススタディ部分
    'casestudies.title': '専門知識による成果：ケーススタディ',
    'casestudies.subtitle': '今日の複雑なビジネス環境で持続可能な成長を促進する戦略の構築と実施を支援する方法をご覧ください。',
    'casestudies.client': 'クライアント',
    'casestudies.area': '地域',
    'casestudies.expertise': '専門分野',
    'casestudies.summary': 'プロジェクト概要',
    'casestudies.readmore': '詳細を読む',
    'casestudies.viewall': 'すべてのケーススタディを見る',
    
    // メディア部分
    'media.title': 'メディアでのAlcome',
    'media.subtitle': '業界出版物での最新のメディア出演と評価をご覧ください',
    'media.readmore': '記事を読む',
    'media.viewall': 'すべてのメディア掲載を見る',
    
    // 出版物部分
    'publications.title': '出版物',
    'publications.subtitle': '当社の研究論文、ホワイトペーパー、業界分析をご覧ください',
    'publications.readmore': '出版物を読む',
    'publications.viewall': 'すべての出版物を見る',
    
    // お問い合わせ
    'contact.title': 'お問い合わせ',
    'contact.subtitle': '当社の専門家との面談を設定し、Alcomeがどのようにビジネス上の課題解決をサポートできるかをご相談ください。',
    'contact.get_in_touch': 'お問い合わせ先',
    'contact.company_intro': 'Alcomeコンサルティングは、日本をリードするプロフェッショナルファームとして、カスタマイズされたコンサルティングソリューションを提供しています：',
    'contact.our_services': '当社のソリューション',
    
    'contact.services.ycp': '戦略と経営コンサルティング',
    'contact.services.auctus': 'クロスボーダーM&Aおよび投資アドバイザリー',
    'contact.services.consus': 'データドリブンの市場調査と洞察',
    
    'contact.info.address_title': 'オフィス住所',
    'contact.info.email_title': 'メールアドレス',
    'contact.info.hours_title': '営業時間',
    'contact.info.hours_weekday': '月〜金：9:00〜18:00',
    'contact.info.hours_weekend': '土日祝日休業',
    
    'contact.form.title': 'メッセージを送信する',
    'contact.form.full_name': 'お名前',
    'contact.form.full_name_placeholder': 'お名前を入力してください',
    'contact.form.email': 'メールアドレス',
    'contact.form.email_placeholder': 'メールアドレスを入力してください',
    'contact.form.company': '会社名',
    'contact.form.company_placeholder': '会社名を入力してください',
    'contact.form.job_title': '役職',
    'contact.form.job_title_placeholder': '役職を入力してください',
    'contact.form.description': 'お問い合わせ内容',
    'contact.form.description_placeholder': 'お問い合わせ内容を入力してください',
    'contact.form.submit': '送信する',
    'contact.form.privacy_notice': 'このフォームを送信することで、当社のプライバシーポリシーと利用規約に同意したものとみなします。',
    
    'contact.success.title': 'お問い合わせありがとうございます！',
    'contact.success.message': 'メッセージが送信されました。担当者より近日中にご連絡いたします。',
    'contact.success.redirect': 'このフォームは数秒後にリセットされます...',
    
    // フッター
    'footer.quick_links': 'クイックリンク',
    'footer.all_rights_reserved': '無断複写・複製・転載を禁じます。',
    'footer.company': '会社情報',
    'footer.services': 'サービス',
    'footer.company_description': 'Alcomeコンサルティングは、日本とアジアでビジネスを展開する企業の信頼できるパートナーです。複雑な市場をナビゲートしたい企業に戦略的なアドバイスと実施支援を提供しています。',
    'footer.address': '〒105-0001 東京都港区虎ノ門4-1-28 虎ノ門タワーオフィス23F',
    'footer.services_strategy': '戦略的計画',
    'footer.services_market': '市場参入',
    'footer.services_digital': 'デジタルトランスフォーメーション',
    'footer.newsletter': 'ニュースレター',
    'footer.newsletter_description': '日本市場に関する最新の情報、洞察、機会を受け取るには、ニュースレターにご登録ください。',
    'footer.email_placeholder': 'メールアドレスを入力してください',
    'footer.subscribe_success': 'ご登録ありがとうございます！最新情報を近日中にお送りします。',
    'footer.follow_us': 'フォローする',
    'footer.privacy_policy': 'プライバシーポリシー',
    'footer.terms_of_service': '利用規約',
    'footer.cookies_policy': 'Cookieポリシー',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // 在浏览器环境中恢复保存的语言偏好
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ja')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // 切换语言
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ja' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // 翻译函数
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 使用钩子
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
