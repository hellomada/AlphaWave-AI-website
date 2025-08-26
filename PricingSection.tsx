import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      name: "Starter",
      price: "$300",
      setupFee: "$600",
      description: "Perfect for small teams new to AI",
      features: [
        "AI Chatbot for website & social media",
        "Basic Appointment Booking Agent",
        "Email support",
        "Basic analytics dashboard",
        "Monthly updates"
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-700"
    },
    {
      name: "Pro",
      price: "$550",
      setupFee: "$900",
      description: "Full automation for growing businesses",
      features: [
        "Everything in Starter",
        "AI Voice Agent (human-like calls)",
        "Advanced appointment booking",
        "Priority phone support",
        "Custom integration options",
        "Advanced analytics"
      ],
      popular: true,
      gradient: "from-cyan-600 to-purple-600"
    },
    {
      name: "Lead Booster",
      price: "$750",
      setupFee: "$700",
      description: "Aggressive growth & outreach focused",
      features: [
        "Cold Lead Generation system",
        "Lead tracking & management",
        "Monthly performance reports",
        "Target audience research",
        "Email & SMS campaigns",
        "CRM integration"
      ],
      popular: false,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      name: "Complete",
      price: "$899",
      setupFee: "$1,500",
      description: "Full AI-powered sales funnel",
      features: [
        "Everything from all packages",
        "Custom lead nurturing sequences",
        "Priority support & dedicated manager",
        "Advanced automation workflows",
        "Custom integrations",
        "Weekly strategy calls",
        "White-label options"
      ],
      popular: false,
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your Package
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scalable AI solutions that grow with your business. Start small and upgrade anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 border-gray-700/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 ${
                pkg.popular ? 'border-2 border-cyan-400/50 shadow-xl shadow-cyan-400/20' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-white mb-2">{pkg.name}</CardTitle>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-white">
                    {pkg.price}
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-cyan-400">
                    Setup fee: {pkg.setupFee}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${pkg.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300`}
                  onClick={() => window.open('https://calendly.com/muhammadmustafaarif088', '_blank', 'noopener,noreferrer')}
                >
                  Get Free Demo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
