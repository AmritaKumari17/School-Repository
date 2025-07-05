import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#classes', label: 'Classes' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#teachers', label: 'Administration' },
    { href: '#contact', label: 'Contact Us' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          <motion.div 
            className="text-lg md:text-xl font-bold text-orange-600"
            whileHover={{ scale: 1.05 }}
          >
            GJPS
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 relative group text-sm xl:text-base"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors z-50 relative"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden z-50 overflow-y-auto"
            >
              <div className="p-6 pt-20">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="block py-4 px-4 text-lg font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300 border-b border-gray-100 last:border-b-0"
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
                
                {/* Mobile Menu Footer */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-6 border-t border-gray-200"
                >
                  <p className="text-sm text-gray-500 text-center">
                    Gyan Jyoti Public School
                  </p>
                  <p className="text-xs text-gray-400 text-center mt-1">
                    Excellence in Education
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;