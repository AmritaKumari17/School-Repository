import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Shield, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { icon: Users, text: 'Qualified Teachers' },
    { icon: Award, text: 'Modern Facilities' },
    { icon: BookOpen, text: 'Holistic Development' },
    { icon: Shield, text: 'Safe Environment' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg"
              alt="School Building"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Excellence in Education Since 2007</h3>
            
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Gyan Jyoti Public School is dedicated to providing high-quality education that nurtures the intellectual, physical, emotional, and spiritual development of our students. Our curriculum follows the C.B.S.E. pattern with a focus on holistic education.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Our motto <strong>"विद्यां ददाति विनय विनयाद् पात्रताम् || पात्रत्वात् धनमाप्रोति धनात् धर्म ततः सुखम् ।।"</strong> guides our educational philosophy. This Sanskrit verse emphasizes that knowledge brings humility, from humility comes worthiness, from worthiness one gains wealth, from wealth comes righteousness, and from righteousness comes happiness.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <feature.icon className="h-6 w-6 text-orange-600" />
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;