import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageSquare } from "lucide-react";

const CTA = () => {
  const openDemoCall = () => {
    window.open('https://calendly.com/muhammadmustafaarif088', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join hundreds of businesses already using AI to automate their operations, generate more leads, and never miss an opportunity again.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <Phone className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Free Consultation</h3>
              <p className="text-gray-400 text-sm">15-minute call to discuss your needs</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <MessageSquare className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Live Demo</h3>
              <p className="text-gray-400 text-sm">Test our AI chatbot & voice agent</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <Calendar className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Quick Setup</h3>
              <p className="text-gray-400 text-sm">Launch in 1-2 weeks maximum</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={openDemoCall}
              size="lg" 
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Demo Call
            </Button>
            <Button 
              onClick={openDemoCall}
              variant="outline" 
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get Custom Quote
            </Button>
          </div>
          
          <div className="text-center text-gray-400">
            <p className="mb-2">
              📞 <strong className="text-cyan-400">Next Steps:</strong>
            </p>
            <p className="text-sm">
              Free 15-minute call → Live demo → Custom package recommendation → Quick setup
            </p>
          </div>
          
          <div className="border-t border-gray-700/50 pt-8 mt-12">
            <p className="text-gray-500 text-sm">
              AlphaWave AI • Affordable AI solutions • Transform your business with intelligent automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
