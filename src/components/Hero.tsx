import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div 
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl lg:text-6xl font-bold mb-6"
        >
          Welcome to{' '}
          <motion.span 
            className="text-yellow-300"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255, 255, 0, 0.5)',
                '0 0 30px rgba(255, 255, 0, 0.8)',
                '0 0 20px rgba(255, 255, 0, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Gyan Jyoti Public School
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl lg:text-2xl mb-8 font-light"
        >
          Nurturing young minds to build a brighter future
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Visit
          </motion.a>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full"
      ></motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 right-10 w-12 h-12 bg-yellow-300/30 rounded-full"
      ></motion.div>
    </section>
  );
};

export default Hero;