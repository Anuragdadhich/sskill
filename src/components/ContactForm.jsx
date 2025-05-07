// components/ContactForm.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiAlertCircle } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.licenseType) newErrors.licenseType = 'Please select a license type';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 " +
    "bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 " +
    "focus:border-transparent transition-colors duration-200";

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
            Ready to sell your software licenses? Fill out the form below and we'll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`${inputClasses} ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm flex items-center">
                  <FiAlertCircle className="mr-1" /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm flex items-center">
                  <FiAlertCircle className="mr-1" /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className={inputClasses}
              />
            </div>

            <div>
              <select
                value={formData.licenseType}
                onChange={(e) => setFormData({ ...formData, licenseType: e.target.value })}
                className={`${inputClasses} ${errors.licenseType ? 'border-red-500' : ''}`}
              >
                <option value="">Select License Type *</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Adobe">Adobe</option>
                <option value="Autodesk">Autodesk</option>
                <option value="Oracle">Oracle</option>
                <option value="Other">Other</option>
              </select>
              {errors.licenseType && (
                <p className="mt-1 text-red-500 text-sm flex items-center">
                  <FiAlertCircle className="mr-1" /> {errors.licenseType}
                </p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Your Message *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="4"
                className={`${inputClasses} ${errors.message ? 'border-red-500' : ''}`}
              />
              {errors.message && (
                <p className="mt-1 text-red-500 text-sm flex items-center">
                  <FiAlertCircle className="mr-1" /> {errors.message}
                </p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
                       hover:bg-blue-700 transition-colors duration-200 flex items-center 
                       justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <FiSend className="inline-block" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
