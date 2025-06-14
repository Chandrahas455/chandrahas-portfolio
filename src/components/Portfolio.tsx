import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StarBorder } from './ui/star-border';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('posters');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'posters', name: 'Poster Campaigns' },
    { id: 'thumbnails', name: 'Thumbnails' },
    { id: 'social', name: 'Social Media' },
    { id: 'logos', name: 'Logo Design' },
    { id: 'fanart', name: 'Creative Fanart' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Businessman Movie',
      category: 'fanart',
      description: 'An alternative poster for Businessman',
      image: '/lovable-uploads/1f8780db-b1e2-4fae-a41e-87be65ff13af.png',
      tools: ['Photoshop', 'Illustrator']
    },
    {
      id: 2,
      title: 'Saripodha Sanivaaram Movie',
      category: 'fanart',
      description: 'Creative poster for the movie',
      image: '/lovable-uploads/f6d0edf5-abcf-47f5-99cc-265fc79554a8.png',
      tools: ['Photoshop', 'After Effects']
    },
    {
      id: 3,
      title: 'Jennifer Lopez Sketch Song',
      category: 'fanart',
      description: 'Artistic sketch for the song',
      image: '/lovable-uploads/55479121-de2b-48c5-8fd6-331de8661ec4.png',
      tools: ['Photoshop', 'Illustrator']
    },
    {
      id: 4,
      title: 'Double Engine Movie',
      category: 'fanart',
      description: 'Cinematic poster for the film',
      image: '/lovable-uploads/2d535abc-951b-4122-8428-55753dcfb4a8.png',
      tools: ['Photoshop', 'Cinema 4D']
    },
    {
      id: 5,
      title: 'Okkadu Movie',
      category: 'fanart',
      description: 'Atmospheric poster design',
      image: '/lovable-uploads/d62b8490-8d88-4d21-aab7-52d2cf596b54.png',
      tools: ['Photoshop', 'Illustrator']
    },
    {
      id: 6,
      title: 'IPL Fanart',
      category: 'fanart',
      description: 'Creative IPL-themed artwork',
      image: '/lovable-uploads/a734c8d8-ea49-43fc-a4bd-7f629785202d.png',
      gallery: [
        '/lovable-uploads/a734c8d8-ea49-43fc-a4bd-7f629785202d.png',
        '/lovable-uploads/ea3b228c-c13e-438f-9f89-ec5f30946ad3.png',
        '/lovable-uploads/f448c1e7-ad49-4bf4-9d26-a0b61aff974a.png'
      ],
      tools: ['Photoshop', 'Digital Art', 'Compositing']
    },
    {
      id: 7,
      title: 'Avasarama Ahankaarama - Independent Film',
      category: 'posters',
      description: 'Poster campaign for independent film',
      image: '/lovable-uploads/36cd6122-4c97-488d-a0e1-493d7a567469.png',
      gallery: [
        '/lovable-uploads/36cd6122-4c97-488d-a0e1-493d7a567469.png',
        '/lovable-uploads/7d525526-eba4-4047-9b31-5a85c157c4fa.png',
        '/lovable-uploads/8535b2c7-1bbe-40df-b283-f23bc425a095.png',
        '/lovable-uploads/3cb53bb6-b876-4aca-b5d6-891b9ae908a7.png',
        '/lovable-uploads/51be2a4f-4c2c-4748-872a-40879d030ea2.png'
      ],
      tools: ['Photoshop', 'Illustrator', 'Typography', 'Branding']
    },
    {
      id: 8,
      title: 'Anthe - Shortfilm',
      category: 'posters',
      description: 'Poster series for short film',
      image: '/lovable-uploads/fc689b67-098d-41ce-880c-f2504727bc08.png',
      gallery: [
        '/lovable-uploads/fc689b67-098d-41ce-880c-f2504727bc08.png',
        '/lovable-uploads/6ae0cf40-1af5-4dd2-a0c1-ba30791b0c93.png',
        '/lovable-uploads/f7f90f4a-0e9d-4e8c-a3ae-b8a7c6c67177.png',
        '/lovable-uploads/85d5b3ab-2051-4094-ad81-04edc6d8bee1.png'
      ],
      tools: ['Photoshop', 'Typography', 'Color Grading', 'Compositing']
    },
    {
      id: 9,
      title: 'Society Housefull - Shortfilm',
      category: 'posters',
      description: 'Poster series for social commentary film',
      image: '/lovable-uploads/3e2c8d49-7880-4dfb-a3b8-419fc5d659b6.png',
      gallery: [
        '/lovable-uploads/3e2c8d49-7880-4dfb-a3b8-419fc5d659b6.png',
        '/lovable-uploads/f17d265d-128c-4d54-bc76-3b6fc04ed93d.png',
        '/lovable-uploads/e9663f6c-b639-4e21-bcf3-94abdf00de3a.png'
      ],
      tools: ['Photoshop', 'Typography', 'Digital Art', 'Compositing']
    },
    {
      id: 10,
      title: 'Pariksha - Shortfilm',
      category: 'posters',
      description: 'Atmospheric poster for educational drama',
      image: '/lovable-uploads/7f1653c5-95b8-4c2a-b592-ec2b65c4c937.png',
      tools: ['Photoshop', 'Digital Art', 'Compositing', 'Typography']
    },
    {
      id: 11,
      title: 'Echo Campaign',
      category: 'posters',
      description: 'Bold poster series exploring sound visualization',
      image: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?w=500&h=600&fit=crop',
      tools: ['Photoshop', 'Illustrator']
    },
    {
      id: 12,
      title: 'YouTube Series Thumbnails',
      category: 'thumbnails',
      description: 'Eye-catching thumbnails that increased CTR by 40%',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=600&fit=crop',
      tools: ['Photoshop', 'Canva']
    },
    {
      id: 13,
      title: 'Festive Marketing',
      category: 'social',
      description: 'Creative festive marketing campaigns',
      image: '/lovable-uploads/beec4505-b11b-4491-abe5-cbbadefe27e5.png',
      gallery: [
        '/lovable-uploads/beec4505-b11b-4491-abe5-cbbadefe27e5.png',
        '/lovable-uploads/ac7e4aff-b90c-41e7-8293-2c75b3d9914b.png',
        '/lovable-uploads/4940a8fe-3215-44c1-94e9-db1ec041cd2c.png'
      ],
      tools: ['Photoshop', 'Illustrator', 'Typography', 'Social Media Design']
    },
    {
      id: 14,
      title: 'Onam - Event',
      category: 'social',
      description: 'Festival celebration event promotion',
      image: '/lovable-uploads/d2998c71-9d75-46d0-9cb0-3a0a61362c31.png',
      gallery: [
        '/lovable-uploads/d2998c71-9d75-46d0-9cb0-3a0a61362c31.png',
        '/lovable-uploads/295a2739-ebaa-41a5-9d17-7b8341d65384.png'
      ],
      tools: ['Photoshop', 'Digital Art', 'Event Design', 'Social Media']
    }
  ];

  const filteredProjects = projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
        duration: 0.6
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
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-black mb-6 relative cursor-pointer group inline-block"
            whileHover={{ 
              scale: 1.05,
              color: "#eab308",
              transition: { duration: 0.3 }
            }}
          >
            Showcase
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 h-1 bg-black group-hover:bg-yellow-500 transition-colors duration-300"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{ 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.2 }
              }}
              className="absolute -inset-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 blur-xl rounded-lg"
            />
          </motion.h2>
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
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project)}
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
                      {project.gallery ? `View Gallery (${project.gallery.length})` : 'View Project'}
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

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Portfolio;
