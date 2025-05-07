// components/HeroSection.js
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Turn Your Unused Software Licenses Into Cash
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            SoftSell helps you sell your unused software licenses quickly and securely. 
            Get the best value for your investments.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold 
                     shadow-lg hover:shadow-xl transition-all duration-300 flex items-center 
                     justify-center gap-2 mx-auto"
          >
            Sell My Licenses
            <FiArrowRight className="inline-block" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
  