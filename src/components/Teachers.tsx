import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Teachers: React.FC = () => {
  const staff = [
    {
      name: 'Mr. Sharma',
      position: 'Principal',
      description: 'With over 20 years in education, Mr. Sharma leads the school with vision and dedication. He promotes holistic learning, academic excellence, and a nurturing environment for all students.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    },
    {
      name: 'Mrs. Gupta',
      position: 'Vice Principal',
      description: 'With 15+ years in education, Mrs. Gupta supports the school\'s mission with a commitment to excellence. Her focus on fostering a supportive learning environment ensures every student thrives.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg'
    },
    {
      name: 'Shree RamKishor Gyan Samajh Seva',
      position: 'Education Charitable Trust',
      description: 'The trust is dedicated to fostering an inclusive learning environment that promotes creativity, critical thinking, and personal growth. Through initiatives like scholarships and mentorship programs.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
    }
  ];

  return (
    <section id="teachers" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">School Administration</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {staff.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-4 sm:p-6 text-center">
                <motion.h5 
                  className="text-xl sm:text-2xl font-bold text-gray-800 mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  {member.name}
                </motion.h5>
                <motion.p 
                  className="text-orange-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                >
                  {member.position}
                </motion.p>
                <motion.p 
                  className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {member.description}
                </motion.p>
                
                <div className="flex justify-center space-x-3 sm:space-x-4">
                  {[Facebook, Twitter, Linkedin].map((Icon, iconIndex) => (
                    <motion.a
                      key={iconIndex}
                      href="#"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors duration-300"
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;