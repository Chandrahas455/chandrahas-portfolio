import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe After Effects',
    'Figma',
    'Sketch',
    'Procreate',
    'Cinema 4D',
    'Canva'
  ];

  const experience = [
    {
      year: '2020',
      title: 'Started Design Journey',
      description: 'Began learning Adobe Creative Suite and design fundamentals'
    },
    {
      year: '2021',
      title: 'First Professional Projects',
      description: 'Started working with local businesses and content creators'
    },
    {
      year: '2022',
      title: 'Expanded Skill Set',
      description: 'Added motion graphics and 3D design to portfolio'
    },
    {
      year: '2024',
      title: 'Design Specialist',
      description: 'Now specializing in visual storytelling and brand identity'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
              About Me
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                I'm a passionate visual designer with over 4 years of experience 
                creating compelling graphics that tell stories and drive engagement. 
                My expertise spans across various design disciplines, from creative 
                fanart to professional brand campaigns.
              </p>
              
              <p>
                What sets me apart is my ability to blend technical proficiency 
                with creative vision, always staying current with design trends 
                while maintaining a timeless aesthetic approach. Every project 
                is an opportunity to push creative boundaries and deliver 
                exceptional results.
              </p>
              
              <p>
                When I'm not designing, I'm exploring new techniques, studying 
                visual trends, and finding inspiration in everything from 
                architecture to nature.
              </p>
            </div>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Download Resume
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Tools & Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center font-medium text-gray-800"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Journey</h3>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.year}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-black mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
