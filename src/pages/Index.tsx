import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import GallerySection from '@/components/GallerySection';
import CalculatorSection from '@/components/CalculatorSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navigation />
      <HeroSection />
      <AdvantagesSection />
      <ServicesSection />
      <PortfolioSection />
      <GallerySection />
      <CalculatorSection />
      <ReviewsSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
