import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatbotWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const toggleChatbot = () => {
    setIsExpanded(!isExpanded);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Tooltip */}
      {showTooltip && !isExpanded && (
        <div className="absolute bottom-full left-0 mb-3 px-4 py-2 bg-white text-gray-800 rounded-lg shadow-lg border animate-bounce">
          <div className="text-sm font-medium">👋 Hi! I'm Nova</div>
          <div className="text-xs text-gray-600">Ask me about our AI solutions!</div>
          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      )}

      {/* Chatbot Icon */}
      <button
        onClick={toggleChatbot}
        className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        aria-label="Open chat with Nova AI"
      >
        {/* Pulsing ring effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-ping"></div>
        
        <img
          src="/lovable-uploads/66d3bdf0-c455-4ac0-bc24-acf5934efc4c.png"
          alt="Nova AI Chatbot"
          className="w-full h-full rounded-full object-cover"
        />
        
        {/* Close icon when expanded */}
        {isExpanded && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <X className="w-4 h-4 text-white" />
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isExpanded && (
        <div className="absolute bottom-20 left-0 w-80 h-96 bg-white rounded-lg shadow-2xl border animate-scale-in overflow-hidden">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/66d3bdf0-c455-4ac0-bc24-acf5934efc4c.png"
                alt="Nova"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <div className="font-semibold">Nova AI</div>
                <div className="text-xs opacity-80">Online • Ready to help</div>
              </div>
            </div>
          </div>
          
          <iframe
            src="https://www.stack-ai.com/chat/685711b3f28010643d73fa5b-53CehRTnoojZiL20HYWdFb"
            className="w-full h-80 border-0"
            title="Nova AI Chatbot"
            allow="microphone; camera"
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
