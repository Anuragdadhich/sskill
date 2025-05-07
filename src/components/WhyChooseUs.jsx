// components/WhyChooseUs.js
import { motion } from 'framer-motion';
import { FiShield, FiDollarSign, FiClock, FiCheckCircle } from 'react-icons/fi';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiShield className="w-10 h-10" />,
      title: "Secure & Trusted",
      description: "Industry-leading security measures and trusted by thousands of businesses worldwide."
    },
    {
      icon: <FiDollarSign className="w-10 h-10" />,
      title: "Best Market Value",
      description: "Get the highest possible value for your licenses with our AI-powered pricing system."
    },
    {
      icon: <FiClock className="w-10 h-10" />,
      title: "Quick Process",
      description: "Complete the entire process in minutes, from upload to payment."
    },
    {
      icon: <FiCheckCircle className="w-10 h-10" />,
      title: "Verified Buyers",
      description: "All buyers are thoroughly vetted to ensure safe and legitimate transactions."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Why Choose SoftSell</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're committed to making software license resale simple, secure, and profitable
            for everyone involved.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg 
                       transition-all duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
  