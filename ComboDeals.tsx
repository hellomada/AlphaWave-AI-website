import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Percent, Gift, Zap } from "lucide-react";

const ComboDeals = () => {
  const combos = [
    {
      title: "Smart Combo",
      description: "Choose any 2 packages",
      discount: "10% OFF",
      discountType: "Initial & Monthly Fees",
      icon: Percent,
      popular: false
    },
    {
      title: "Ultimate Bundle",
      description: "All 3 core packages (Chatbot + Voice Agent + Lead Gen)",
      discount: "15% OFF",
      discountType: "Initial & Monthly Fees",
      icon: Gift,
      popular: true
    },
    {
      title: "Flexible Growth",
      description: "Start with any package and upgrade anytime",
      discount: "No Lock-in",
      discountType: "Scale as you grow",
      icon: Zap,
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Combo Discounts & Flexibility
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Save more when you combine packages. Mix and match to create the perfect solution for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo, index) => {
            const IconComponent = combo.icon;
            return (
              <Card 
                key={index}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/80 border-gray-700/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 ${
                  combo.popular ? 'border-2 border-purple-400/50 shadow-xl shadow-purple-400/20' : ''
                }`}
              >
                {combo.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                    Best Value
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">{combo.title}</CardTitle>
                  <p className="text-gray-400 text-sm">{combo.description}</p>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {combo.discount}
                    </div>
                    <p className="text-gray-400 text-sm">{combo.discountType}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg mb-4">
            💡 <strong className="text-cyan-400">Pro Tip:</strong> Start with one package and add others as you see results!
          </p>
          <p className="text-sm text-gray-500">
            All discounts apply to both initial setup fees and ongoing monthly costs
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComboDeals;
