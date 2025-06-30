import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Monitor, FlaskConical, TreePine } from 'lucide-react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: 'Modern Library',
      description: 'Extensive collection of books, resources, and digital learning materials.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
    },
    {
      icon: Monitor,
      title: 'Computer Lab',
      description: 'State-of-the-art computer facilities with latest educational software.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
    },
    {
      icon: FlaskConical,
      title: 'Science Labs',
      description: 'Well-equipped physics, chemistry, and biology labs for practical learning.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg'
    },
    {
      icon: TreePine,
      title: 'Playground',
      description: 'Spacious playground for sports and outdoor activities.',
      image: 'https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg'
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">School Facilities</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <motion.div
                  className="absolute top-4 left-4 bg-orange-600 p-3 rounded-full"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <facility.icon className="h-6 w-6 text-white" />
                </motion.div>
              </div>
              
              <div className="p-6">
                <motion.h5 
                  className="text-xl font-bold text-gray-800 mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  {facility.title}
                </motion.h5>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {facility.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;