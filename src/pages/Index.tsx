import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <ServicesGrid />
      <ProcessSection />
      <PortfolioGallery />
      <TestimonialSlider />
      <CTASection />
      <ContactForm />
      <Footer />
      <WhatsAppBubble />
    </>
  );
};

export default Index;
