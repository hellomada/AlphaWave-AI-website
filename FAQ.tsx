
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can you set up my AI system?",
      answer: "Most setups are completed within 1-2 weeks after payment. We provide demo access immediately so you can test the chatbot and voice agent functionality right away."
    },
    {
      question: "What kind of businesses do you work with?",
      answer: "We specialize in service-based businesses like roofing, construction, real estate, healthcare, and professional services. Our AI solutions are perfect for businesses that rely on phone calls and lead generation."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Absolutely! You can upgrade anytime with no penalties. Downgrades are processed at the end of your current billing cycle. We believe in flexibility as your business grows."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a free 15-minute consultation call and demo access. For lead generation packages, we also offer a 1-month pilot with no monthly fee if you pay the initial setup cost."
    },
    {
      question: "What's included in the monthly support?",
      answer: "Monthly support includes hosting, maintenance, system updates, performance monitoring, and email support. Pro and Complete packages include phone support and priority assistance."
    },
    {
      question: "How does the AI voice agent work?",
      answer: "Our AI voice agent sounds completely human and can handle incoming calls 24/7. It can answer questions, book appointments, take messages, and even qualify leads based on your criteria."
    },
    {
      question: "What kind of leads can you generate?",
      answer: "We can target property owners, real estate agents, landlords, and other relevant prospects based on your service area and ideal customer profile. All leads are pre-qualified before being passed to you."
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer: "No long-term contracts required. You can cancel with 30 days notice. However, setup fees are non-refundable as they cover the custom development work for your business."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about our AI automation services
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-lg px-6 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-white hover:text-cyan-400 font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-12">
          <Button 
            onClick={() => window.open('https://calendly.com/muhammadmustafaarif088', '_blank', 'noopener,noreferrer')}
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Still Have Questions? Get Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
