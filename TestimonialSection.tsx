import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      text: "We started using the AI-powered lead magnets last quarter, and the results have been nothing short of incredible. Not only did our email opt-ins triple within the first month, but the AI also helped personalize the journey for each user in real-time. It's like having a smart marketing assistant working 24/7. We've never captured leads this efficiently before.",
      author: "Samantha Lee",
      title: "Head of Marketing at GrowthNest"
    },
    {
      text: "Our call volume was overwhelming our team, and response times were starting to slip. Since switching to the AI voice agents, we've seen a 60% drop in human-handled inquiries — without sacrificing quality. The voice AI handles bookings, FAQs, and even complex support issues with natural-sounding responses. Customers are impressed, and so are we.",
      author: "David Chen",
      title: "Operations Manager at SwiftCare Clinics"
    }
  ];

  const openDemoCall = () => {
    window.open('https://calendly.com/muhammadmustafaarif088', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Real results from real businesses using our AI solutions
        </p>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <div
            className={`transition-all duration-500 ${
              isTransitioning ? 'testimonial-fade-out' : 'testimonial-fade-in'
            }`}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 mx-auto max-w-3xl">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-white text-lg">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-cyan-400 text-sm">
                  {testimonials[currentTestimonial].title}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentTestimonial(index);
                  setIsTransitioning(false);
                }, 250);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        <div className="mt-12">
          <Button
            onClick={openDemoCall}
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get Your Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
