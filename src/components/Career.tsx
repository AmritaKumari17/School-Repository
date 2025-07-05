import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink } from 'lucide-react';

const Career: React.FC = () => {
  const benefits = [
    'Competitive salary package',
    'Professional development opportunities',
    'Supportive work environment',
    'Modern teaching facilities'
  ];

  return (
    <section id="career" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Become a Teacher
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-6 md:mb-8 text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join our team of dedicated educators and make a difference in the lives of young learners. We are looking for passionate teachers who believe in our educational philosophy.
            </motion.p>

            <div className="space-y-3 sm:space-y-4 mb-6 md:mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://forms.gle/yGYdX2unHzRBasJA7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg"
            >
              Apply Now
              <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.img
              src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
              alt="Teacher"
              className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Career;