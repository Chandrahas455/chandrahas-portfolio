
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StarBorder } from './ui/star-border';

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
      title: 'Businessman Movie',
      category: 'fanart',
      description: 'Alternative movie poster design with bold typography and compelling visual storytelling',
      image: '/lovable-uploads/1f8780db-b1e2-4fae-a41e-87be65ff13af.png',
      tools: ['Photoshop', 'Illustrator']
    },
    {
      id: 2,
      title: 'Saripodha Sanivaaram Movie',
      category: 'fanart',
      description: 'Creative interpretation with dramatic composition and thematic design elements',
      image: '/lovable-uploads/f6d0edf5-abcf-47f5-99cc-265fc79554a8.png',
      tools: ['Photoshop', 'After Effects']
    },
    {
      id: 3,
      title: 'Jennifer Lopez Sketch Song',
      category: 'fanart',
      description: 'Artistic sketch design showcasing creative typography and visual composition',
      image: '/lovable-uploads/55479121-de2b-48c5-8fd6-331de8661ec4.png',
      tools: ['Photoshop', 'Illustrator']
    },
    {
      id: 4,
      title: 'Double Engine Movie',
      category: 'fanart',
      description: 'Cinematic poster design with strong visual narrative and atmospheric elements',
      image: '/lovable-uploads/2d535abc-951b-4122-8428-55753dcfb4a8.png',
      tools: ['Photoshop', 'Cinema 4D']
    },
    {
      id: 5,
      title: 'Echo Campaign',
      category: 'posters',
      description: 'A bold poster series exploring sound visualization',
      image: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?w=500&h=600&fit=crop',
      tools: ['Photoshop', 'Illustrator']
    },
    {
      id: 6,
      title: 'YouTube Series Thumbnails',
      category: 'thumbnails',
      description: 'Eye-catching thumbnails that increased CTR by 40%',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=600&fit=crop',
      tools: ['Photoshop', 'Canva']
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
        ease: "easeOut"
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
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StarBorder
                as="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
                color={selectedCategory === category.id ? "hsl(0, 0%, 0%)" : "hsl(0, 0%, 50%)"}
              >
                {category.name}
              </StarBorder>
            </motion.div>
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
              <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-xl hover:border-black/20 transition-all duration-300">
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
