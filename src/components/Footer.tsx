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
    { href: 'https://forms.gle/JuKwmSFCedhuguqw8', label: 'Primary Classes' },
    { href: 'https://forms.gle/JuKwmSFCedhuguqw8', label: 'Upper Primary Classes' },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h5 className="text-xl font-bold mb-4">About Gyan Jyoti</h5>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We are committed to providing quality education that nurtures the intellectual, physical, emotional, and spiritual development of our students.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
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
            <h5 className="text-xl font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">▶</span>
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
            <h5 className="text-xl font-bold mb-4">Programs</h5>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={program.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">▶</span>
                    {program.label}
                    <ExternalLink className="h-3 w-3 ml-1" />
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
            <h5 className="text-xl font-bold mb-4">Contact Info</h5>
            <div className="space-y-3 text-gray-300">
              <p>📍 123 Education Street, Knowledge City, India</p>
              <p>📞 +91 12345 67890</p>
              <p>✉️ info@gyanjyotischool.com</p>
              <p>🕒 Mon-Sat: 8:00 AM - 4:00 PM</p>
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
        className="border-t border-gray-700 py-6"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2025 Gyan Jyoti Public School. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;