import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openDemoCall = () => {
    window.open('https://calendly.com/muhammadmustafaarif088', '_blank', 'noopener,noreferrer');
  };

  const openDemoPortal = () => {
    window.open('https://calendly.com/muhammadmustafaarif088/free-ai-consultation', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Top CTA Button */}
        <div className="mb-8">
          <Button 
            onClick={openDemoPortal}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 border border-cyan-400/30"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Get Your FREE AI Demo Portal
          </Button>
          <p className="text-sm text-cyan-400/80 mt-2 font-medium">
            ✨ No signup required • See results in 60 seconds
          </p>
        </div>

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/382fd25c-ba75-45fd-9397-4f4163cf4e3b.png" 
            alt="AlphaWave AI Logo" 
            className="h-80 w-auto logo-glow-enhanced"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
          AlphaWave AI
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Affordable AI solutions that transform your business
        </p>
        
        <div className="space-y-4 mb-12">
          <p className="text-lg text-cyan-400 font-semibold">
            🚀 AI Automation & Lead Generation Solutions
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Never miss a lead again. Our AI-powered chatbots, voice agents, and lead generation systems work 24/7 to grow your business while you focus on what matters most.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            onClick={scrollToPricing}
            size="lg" 
            className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Pricing Plans
          </Button>
          <Button 
            onClick={openDemoCall}
            variant="outline" 
            size="lg"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Free Demo Call
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400 h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
