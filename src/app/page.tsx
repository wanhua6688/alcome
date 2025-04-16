import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import StrategiesSection from '@/components/StrategiesSection';
import ClientsSection from '@/components/ClientsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import MediaSection from '@/components/MediaSection';
import PublicationsSection from '@/components/PublicationsSection';
import ExpertsSection from '@/components/ExpertsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <OverviewSection />
      <ServicesSection />
      <IndustriesSection />
      <StrategiesSection />
      <ClientsSection />
      <CaseStudiesSection />
      {/* <MediaSection /> */}
      {/* <PublicationsSection /> */}
      {/* <ExpertsSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
