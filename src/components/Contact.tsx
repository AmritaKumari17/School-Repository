import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface NewsletterFormData {
  email: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const { register: registerContact, handleSubmit: handleContactSubmit, reset: resetContact, formState: { errors: contactErrors } } = useForm<ContactFormData>();
  const { register: registerNewsletter, handleSubmit: handleNewsletterSubmit, reset: resetNewsletter, formState: { errors: newsletterErrors } } = useForm<NewsletterFormData>();

  const onContactSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([data]);

      if (error) throw error;

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      resetContact();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onNewsletterSubmit = async (data: NewsletterFormData) => {
    setIsSubscribing(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([data]);

      if (error) throw error;

      toast.success('Successfully subscribed to our newsletter!');
      resetNewsletter();
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['123 Education Street', 'Knowledge City, India'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+91 12345 67890', '+91 98765 43210'],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@gyanjyotischool.com', 'admissions@gyanjyotischool.com'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday: 8:00 AM - 4:00 PM', 'Sunday: Closed'],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 shadow-xl"
          >
            <motion.h4 
              className="text-2xl font-bold text-gray-800 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Send us a Message
            </motion.h4>
            
            <form onSubmit={handleContactSubmit(onContactSubmit)} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  {...registerContact('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                />
                {contactErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{contactErrors.name.message}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  {...registerContact('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
                {contactErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{contactErrors.email.message}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  {...registerContact('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter subject"
                />
                {contactErrors.subject && (
                  <p className="text-red-500 text-sm mt-1">{contactErrors.subject.message}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  {...registerContact('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Enter your message"
                />
                {contactErrors.message && (
                  <p className="text-red-500 text-sm mt-1">{contactErrors.message.message}</p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h4>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`p-3 rounded-full bg-gradient-to-r ${info.color}`}>
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h5>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white"
            >
              <h5 className="text-xl font-bold mb-3">Newsletter</h5>
              <p className="mb-4">Subscribe to our newsletter to get latest updates and news about our school.</p>
              
              <form onSubmit={handleNewsletterSubmit(onNewsletterSubmit)} className="flex space-x-2">
                <input
                  {...registerNewsletter('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
                  placeholder="Your Email"
                />
                <motion.button
                  type="submit"
                  disabled={isSubscribing}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubscribing ? '...' : 'Subscribe'}
                </motion.button>
              </form>
              {newsletterErrors.email && (
                <p className="text-red-200 text-sm mt-2">{newsletterErrors.email.message}</p>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;