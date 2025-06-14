
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'fanart', name: 'Creative Fanart' },
    { id: 'posters', name: 'Poster Campaigns' },
    { id: 'thumbnails', name: 'Thumbnails' },
    { id: 'social', name: 'Social Media' },
    { id: 'logos', name: 'Logo Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Echo Campaign',
      category: 'posters',
      description: 'A bold poster series exploring sound visualization',
      image: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?w=500&h=600&fit=crop',
      tools: ['Photoshop', 'Illustrator']
    },
    {
      id: 2,
      title: 'Marvel Heroes Reimagined',
      category: 'fanart',
      description: 'Contemporary take on classic superhero designs',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop',
      tools: ['Photoshop', 'Procreate']
    },
    {
      id: 3,
      title: 'Tech Startup Brand',
      category: 'logos',
      description: 'Minimalist logo design for emerging tech company',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=600&fit=crop',
      tools: ['Illustrator', 'After Effects']
    },
    {
      id: 4,
      title: 'YouTube Series Thumbnails',
      category: 'thumbnails',
      description: 'Eye-catching thumbnails that increased CTR by 40%',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=600&fit=crop',
      tools: ['Photoshop', 'Canva']
    },
    {
      id: 5,
      title: 'Instagram Campaign',
      category: 'social',
      description: 'Cohesive social media design system',
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=500&h=600&fit=crop',
      tools: ['Photoshop', 'Figma']
    },
    {
      id: 6,
      title: 'Movie Poster Series',
      category: 'posters',
      description: 'Alternative movie posters with modern aesthetic',
      image: 'https://images.unsplash.com/photo-1489599735734-79b4fc8fbb7a?w=500&h=600&fit=crop',
      tools: ['Photoshop', 'Cinema 4D']
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated collection of projects showcasing visual storytelling 
            and creative problem-solving across multiple disciplines
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-black/20 transition-all duration-300">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full"
                    >
                      View Project
                    </motion.div>
                  </div>
                </div>
                
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-black group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
