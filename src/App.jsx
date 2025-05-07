import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import { FiArrowUp } from 'react-icons/fi';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    // Listen for scroll events
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <Footer />
        <ChatWidget />
        
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-20 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors z-40"
          >
            <FiArrowUp size={20} />
          </button>
        )}
      </div>
    </div>
  );
}