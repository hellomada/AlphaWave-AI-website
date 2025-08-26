import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import TestimonialSection from "@/components/TestimonialSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Features from "@/components/Features";
import PricingSection from "@/components/PricingSection";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import ChatbotWidget from "@/components/ChatbotWidget";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <TestimonialSection />
      <HowItWorksSection />
      <Features />
      <PricingSection />
      <Blog />
      <FAQ />
      <CTA />
      <ChatbotWidget />
      <BackToTop />
    </div>
  );
};

export default Index;
