import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-amber-50 to-orange-50 py-4 md:py-6 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-0 md:flex-row md:justify-between md:text-left">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
            className="flex items-center justify-center md:justify-start"
          >
            <img 
              src="/img/logo.png" 
              alt="Graduation" 
              className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 object-contain" 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex-1 md:ml-4"
          >
            <motion.h4 
              className="text-xs sm:text-sm md:text-lg font-medium text-gray-800 mb-2 leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              विद्यां ददाति विनय विनयाद् पात्रताम् || पात्रत्वात् धनमाप्रोति धनात् धर्म ततः सुखम् ।।
            </motion.h4>
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-2"
              whileHover={{ scale: 1.02 }}
            >
              Gyan Jyoti Public School
            </motion.h1>
            <motion.p 
              className="text-gray-700 text-sm sm:text-base md:text-lg"
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