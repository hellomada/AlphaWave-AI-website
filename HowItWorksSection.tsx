import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Cog, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const openDemoCall = () => {
    window.open('https://calendly.com/muhammadmustafaarif088', '_blank', 'noopener,noreferrer');
  };

  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "Understanding Your Needs",
      details: "We analyze your current processes, identify bottlenecks, and understand your specific requirements to design the perfect AI solution for your business."
    },
    {
      icon: Cog,
      title: "Custom Design & Development",
      description: "System Development Demo",
      details: "Our team creates a tailored AI system specifically for your business, then demonstrates how it works with your actual data and workflows."
    },
    {
      icon: CheckCircle,
      title: "Final Integration",
      description: "Go Live with Your AI",
      details: "We seamlessly integrate the AI solution into your existing systems, provide training, and ensure everything runs smoothly from day one."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven 3-step process gets you from consultation to full AI implementation in record time
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <Card className="w-80 bg-gradient-to-br from-gray-800/50 to-gray-900/80 border-gray-700/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-white mb-2">
                    {step.title}
                  </div>
                  <div className="text-cyan-400 font-medium mb-4">
                    {step.description}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.details}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block mx-4">
                  <ArrowRight className="w-8 h-8 text-cyan-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={openDemoCall}
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Start Your AI Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
