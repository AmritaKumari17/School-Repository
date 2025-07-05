import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#classes', label: 'Classes' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#contact', label: 'Contact Us' },
  ];

  const programs = [
    { href: 'https://forms.gle/JuKwmSFCedhuguqw8', label: 'Nursery Admission' },
    { href: 'https://forms.gle/JuKwmSFCedhuguqw8', label: 'Primary Classes Admission' },
    { href: 'https://forms.gle/JuKwmSFCedhuguqw8', label: 'Upper Primary Classes Admission' },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h5 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">About Gyan Jyoti</h5>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              We are committed to providing quality education that nurtures the intellectual, physical, emotional, and spiritual development of our students.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h5 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h5>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center text-sm sm:text-base"
                  >
                    <span className="mr-2 text-xs">▶</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Programs</h5>
            <ul className="space-y-1 sm:space-y-2">
              {programs.map((program, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={program.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center text-sm sm:text-base"
                  >
                    <span className="mr-2 text-xs">▶</span>
                    <span className="flex-1">{program.label}</span>
                    <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h5 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Info</h5>
            <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <p className="flex items-start">
                <span className="mr-2 flex-shrink-0">📍</span>
                <span>123 Education Street, Knowledge City, India</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+91 12345 67890</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <span className="break-all">info@gyanjyotischool.com</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">🕒</span>
                <span>Mon-Sat: 8:00 AM - 4:00 PM</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-gray-700 py-4 sm:py-6"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            © 2025 Gyan Jyoti Public School. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;