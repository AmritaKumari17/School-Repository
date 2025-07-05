import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Users, BookOpen } from 'lucide-react';

const Classes: React.FC = () => {
  const classes = [
    {
      icon: Baby,
      title: 'Nursery',
      description: 'Our foundational program caters to the youngest learners, providing a nurturing environment where children explore, discover, and develop basic skills. Through playful activities and engaging lessons, we focus on early childhood development, including language, motor skills, social interaction, and cognitive abilities.',
      color: 'from-pink-400 to-red-400'
    },
    {
      icon: Users,
      title: 'Primary',
      description: 'Classes 1 to 5 provide a strong foundation in literacy, numeracy, and creative expression. Students in this stage are introduced to a variety of subjects, developing essential skills in reading, writing, mathematics, and the arts. Emphasis is placed on hands-on learning experiences.',
      color: 'from-blue-400 to-purple-400'
    },
    {
      icon: BookOpen,
      title: 'Early Secondary',
      description: 'Classes 6 to 8 focus on building a deeper understanding of core subjects like mathematics, science, languages, and social studies. With an emphasis on critical thinking and problem-solving, students are introduced to more complex concepts.',
      color: 'from-green-400 to-teal-400'
    }
  ];

  return (
    <section id="classes" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Our Classes</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {classes.map((classItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-24 sm:h-32 bg-gradient-to-r ${classItem.color} flex items-center justify-center`}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <classItem.icon className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-white" />
                </motion.div>
              </div>
              
              <div className="p-6 md:p-8">
                <motion.h4 
                  className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 md:mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  {classItem.title}
                </motion.h4>
                <motion.p 
                  className="text-gray-600 leading-relaxed text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {classItem.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;