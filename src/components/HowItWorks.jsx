// components/HowItWorks.js
import { motion } from 'framer-motion';
import { FiUpload, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiUpload className="w-12 h-12" />,
      title: "Upload License",
      description: "Simply upload your software license details and documentation for evaluation."
    },
    {
      icon: <FiDollarSign className="w-12 h-12" />,
      title: "Get Valuation",
      description: "Our AI-powered system provides an instant market-based valuation."
    },
    {
      icon: <FiCheckCircle className="w-12 h-12" />,
      title: "Get Paid",
      description: "Accept the offer and receive payment directly to your account within 24 hours."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Selling your software licenses has never been easier. Follow these three simple steps
            to turn your unused licenses into cash.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl 
                       transition-shadow duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-6 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
  