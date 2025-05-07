import { useState } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 64; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img src="/logo.png" alt="SoftSell Logo" className="h-9 w-9 mr-2 rounded-md shadow-sm" />
            <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              SoftSell
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button 
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}