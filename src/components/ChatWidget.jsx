import { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';

const predefinedQuestions = [
  "How do I sell my license?",
  "What types of licenses do you accept?",
  "How long does the process take?",
  "What documents do I need to provide?"
];

const mockResponses = {
  "How do I sell my license?": "To sell your license, simply go to our 'Get a Quote' page, provide details about your software license, and we'll give you a valuation within 24 hours.",
  "What types of licenses do you accept?": "We accept most major software licenses including Microsoft, Adobe, Autodesk, Oracle, and many others. If you're unsure about your specific license, feel free to ask!",
  "How long does the process take?": "Typically, the entire process from valuation to payment takes 2-3 business days. The initial valuation is provided within 24 hours of submission.",
  "What documents do I need to provide?": "You'll need to provide proof of license ownership, which usually includes purchase documentation or license keys. Our team will guide you through the specific requirements based on your license type."
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    const userMessage = { text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      let responseText = "I'm sorry, I don't understand that question. Here are some questions I can help with:";
      let foundResponse = false;
      
      // Check if the question matches any predefined questions
      for (const [question, answer] of Object.entries(mockResponses)) {
        if (inputValue.toLowerCase().includes(question.toLowerCase().replace('?', ''))) {
          responseText = answer;
          foundResponse = true;
          break;
        }
      }
      
      if (!foundResponse) {
        responseText += "\n\n" + predefinedQuestions.join("\n");
      }
      
      const aiMessage = { text: responseText, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handlePredefinedQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white dark:bg-gray-800 rounded-xl shadow-xl flex flex-col border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold dark:text-white">SoftSell Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <FiX size={20} />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">How can I help you today?</p>
                  <div className="space-y-2">
                    {predefinedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handlePredefinedQuestion(question)}
                        className="w-full text-left px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-xs px-4 py-2 rounded-lg ${message.sender === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}
                    >
                      {message.text.split('\n').map((paragraph, i) => (
                        <p key={i} className="mb-2 last:mb-0">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                <FiSend size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          <FiMessageSquare size={24} />
        </button>
      )}
    </div>
  );
}