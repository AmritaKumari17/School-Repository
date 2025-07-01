import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-amber-50 to-orange-50 py-6 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
            className="flex items-center mb-4 lg:mb-0"
          >
            <img 
  src="/img/logo.png" 
  alt="Graduation" 
  className="h-40 w-40 mr-4 object-contain" 
/>

          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center lg:text-left flex-1"
          >
            <motion.h4 
              className="text-lg font-medium text-gray-800 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              विद्यां ददाति विनय विनयाद् पात्रताम् || पात्रत्वात् धनमाप्रोति धनात् धर्म ततः सुखम् ।।
            </motion.h4>
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2"
              whileHover={{ scale: 1.02 }}
            >
              Gyan Jyoti Public School
            </motion.h1>
            <motion.p 
              className="text-gray-700 text-lg"
              whileHover={{ scale: 1.02 }}
            >
              CLASS-NUR.TO VIIIth Based on C.B.S.E. Pattern
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
