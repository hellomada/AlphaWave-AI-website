import { Bot, Phone, Target, BarChart3, Clock, Zap, Settings, Mail, Users, HeartHandshake, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const coreServices = [
    {
      icon: Bot,
      title: "AI Chatbot",
      description: "24/7 customer support on website & social media",
      type: "core"
    },
    {
      icon: Phone,
      title: "AI Voice Agent",
      description: "Human-like call handling & appointment booking",
      type: "core"
    },
    {
      icon: Target,
      title: "Cold Lead Generation",
      description: "Find & contact new prospects automatically",
      type: "core"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track performance with detailed reporting",
      type: "core"
    },
    {
      icon: Clock,
      title: "24/7 Operation",
      description: "Never miss a lead, even outside business hours",
      type: "core"
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get started quickly with our streamlined process",
      type: "core"
    }
  ];


  const specializedServices = [
    {
      icon: Bot,
      title: "AI Sales Closer Agent",
      description: "AI calls leads, handles objections, qualifies prospects, and books meetings",
      features: [
        "Trained with company-specific info, pricing, and offer strategy",
        "Can follow up automatically 3–5x with personalized responses",
        "Replaces a sales assistant or SDR"
      ],
      value: "Easily worth $1,000–2,000/month in saved salaries and new deals",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: Settings,
      title: "AI Operations Manager",
      description: "Automatically updates project timelines, assigns tasks, follows up with staff",
      features: [
        "Can sync with ClickUp, Trello, Slack, or Asana",
        "Alerts owner when tasks are delayed or budget is off",
        "Saves 10+ hours/week in micromanagement"
      ],
      value: "Used by agencies, construction, SaaS, etc.",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: Mail,
      title: "Hyper-Personalized AI Email Marketer",
      description: "Generates, tests, and sends email campaigns personalized for each customer segment",
      features: [
        "Writes subject lines, tests variations, optimizes delivery timing",
        "3x more effective than Mailchimp + manual copy",
        "Replaces email copywriter + strategist"
      ],
      value: "Great for e-commerce, real estate, B2B, etc.",
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: Users,
      title: "AI Hiring Assistant",
      description: "Sources, screens, and ranks job applicants",
      features: [
        "Conducts initial chatbot interviews or video screening",
        "Sends only qualified candidates to the business owner",
        "Cuts hiring time by 70%"
      ],
      value: "Especially valuable for fast-scaling businesses",
      gradient: "from-teal-600 to-cyan-600"
    },
    {
      icon: HeartHandshake,
      title: "Client Success & Upsell Bot",
      description: "After service is delivered, bot checks in, handles issues, and offers upsells automatically",
      features: [
        "Tracks satisfaction, offers loyalty bonuses, books repeat jobs",
        "Works 24/7 on WhatsApp, SMS, or email",
        "Improves retention & increases LTV"
      ],
      value: "Ideal for service businesses like agencies, coaching, real estate",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  const openDemoCall = () => {
    window.open('https://calendly.com/muhammadmustafaarif088', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our AI Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions from core automation to specialized business functions
          </p>
        </div>

        {/* Core Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              Core AI Services
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Essential AI solutions included in our main packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
                >
                  <div className="bg-gradient-to-r from-cyan-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white">{service.title}</h4>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>


        {/* Specialized Services */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-full px-6 py-2 mb-6">
              <DollarSign className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">High-ROI Specialized Services</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Specialized AI Services
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced custom AI implementations for specific business functions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 border-gray-700/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
                >
                  <CardHeader className="pb-4">
                    <div className={`bg-gradient-to-r ${service.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">{service.title}</CardTitle>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className="text-green-400 text-sm mt-1">✅</span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t border-gray-700/50 pt-4">
                      <div className="flex items-start gap-2 mb-4">
                        <span className="text-yellow-400 text-sm mt-1">💸</span>
                        <span className="text-yellow-300 text-sm font-medium">{service.value}</span>
                      </div>
                      
                      <Button 
                        onClick={openDemoCall}
                        className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300`}
                      >
                        Discuss This Service
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            From core automation to specialized AI services, we have solutions for every business need. Let's discuss which services are right for you.
          </p>
          <Button 
            onClick={openDemoCall}
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More - Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
