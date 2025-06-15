import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StarBorder } from './ui/star-border';
import DisplayCards from './ui/display-cards';
import { ThreeDPhotoCarousel } from './ui/3d-carousel';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('featured');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'featured', name: 'Featured' },
    { id: 'posters', name: 'Poster Campaigns' },
    { id: 'social', name: 'Social Media' },
    { id: 'fanart', name: 'Creative Fanart' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Businessman Movie',
      category: 'fanart',
      categories: ['featured', 'fanart'],
      description: 'An alternative poster for Businessman',
      image: '/lovable-uploads/1f8780db-b1e2-4fae-a41e-87be65ff13af.png',
      tools: ['Movie Poster', 'Alternative Design', 'Character Art']
    },
    {
      id: 2,
      title: 'Saripodha Sanivaaram Movie',
      category: 'fanart',
      description: 'Creative poster for the movie',
      image: '/lovable-uploads/f6d0edf5-abcf-47f5-99cc-265fc79554a8.png',
      tools: ['Movie Poster', 'Creative Design', 'Visual Effects']
    },
    {
      id: 3,
      title: 'Jennifer Lopez Sketch Song',
      category: 'fanart',
      description: 'Artistic sketch for the song',
      image: '/lovable-uploads/55479121-de2b-48c5-8fd6-331de8661ec4.png',
      tools: ['Portrait Art', 'Sketch Style', 'Music Visual']
    },
    {
      id: 4,
      title: 'Double Engine Movie',
      category: 'fanart',
      description: 'Cinematic poster for the film',
      image: '/lovable-uploads/2d535abc-951b-4122-8428-55753dcfb4a8.png',
      tools: ['Cinematic Design', '3D Elements', 'Action Theme']
    },
    {
      id: 5,
      title: 'Okkadu Movie',
      category: 'fanart',
      description: 'Atmospheric poster design',
      image: '/lovable-uploads/d62b8490-8d88-4d21-aab7-52d2cf596b54.png',
      tools: ['Atmospheric Design', 'Movie Poster', 'Dramatic Lighting']
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
      tools: ['Sports Design', 'Cricket Theme', 'Team Graphics', 'Fan Art']
    },
    {
      id: 7,
      title: 'Avasarama Ahankaarama - Independent Film',
      category: 'posters',
      categories: ['featured', 'posters'],
      description: 'Poster campaign for independent film',
      image: '/lovable-uploads/36cd6122-4c97-488d-a0e1-493d7a567469.png',
      gallery: [
        '/lovable-uploads/36cd6122-4c97-488d-a0e1-493d7a567469.png',
        '/lovable-uploads/7d525526-eba4-4047-9b31-5a85c157c4fa.png',
        '/lovable-uploads/8535b2c7-1bbe-40df-b283-f23bc425a095.png',
        '/lovable-uploads/3cb53bb6-b876-4aca-b5d6-891b9ae908a7.png',
        '/lovable-uploads/51be2a4f-4c2c-4748-872a-40879d030ea2.png'
      ],
      tools: ['Independent Film', 'Poster Campaign', 'Typography Design', 'Brand Identity']
    },
    {
      id: 8,
      title: 'Forever - Shortfilm',
      category: 'posters',
      description: 'Emotional poster series for musical short film exploring themes of permanence and love',
      image: '/lovable-uploads/0420724f-fa68-47dd-9da0-8823360ddd9f.png',
      gallery: [
        '/lovable-uploads/0420724f-fa68-47dd-9da0-8823360ddd9f.png',
        '/lovable-uploads/c030711b-a6b7-4047-8794-c6c220b4d0d5.png'
      ],
      tools: ['Short Film', 'Emotional Design', 'Musical Theme', 'Love Story']
    },
    {
      id: 9,
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
      tools: ['Short Film', 'Poster Series', 'Color Grading', 'Visual Storytelling']
    },
    {
      id: 10,
      title: 'Society Housefull - Shortfilm',
      category: 'posters',
      description: 'Poster series for social commentary film',
      image: '/lovable-uploads/3e2c8d49-7880-4dfb-a3b8-419fc5d659b6.png',
      gallery: [
        '/lovable-uploads/3e2c8d49-7880-4dfb-a3b8-419fc5d659b6.png',
        '/lovable-uploads/f17d265d-128c-4d54-bc76-3b6fc04ed93d.png',
        '/lovable-uploads/e9663f6c-b639-4e21-bcf3-94abdf00de3a.png'
      ],
      tools: ['Social Commentary', 'Short Film', 'Poster Series', 'Social Issues']
    },
    {
      id: 11,
      title: 'Pariksha - Shortfilm',
      category: 'posters',
      description: 'Atmospheric poster for educational drama',
      image: '/lovable-uploads/7f1653c5-95b8-4c2a-b592-ec2b65c4c937.png',
      tools: ['Educational Drama', 'Atmospheric Design', 'Short Film', 'Drama Theme']
    },
    {
      id: 12,
      title: 'Strike 4 - Series',
      category: 'posters',
      description: 'Intense poster series for action thriller web series featuring dramatic weapon imagery',
      image: '/lovable-uploads/1cd9c56a-b8ba-48e8-b8cf-5b086617c2b1.png',
      gallery: [
        '/lovable-uploads/1cd9c56a-b8ba-48e8-b8cf-5b086617c2b1.png',
        '/lovable-uploads/e6eded0d-deb7-45b7-a010-60388e1ae5ba.png',
        '/lovable-uploads/77002782-a46b-4f84-8fa1-4181df4acaa0.png'
      ],
      tools: ['Web Series', 'Action Thriller', 'Intense Design', 'Dramatic Imagery']
    },
    {
      id: 13,
      title: 'Ext Cinema',
      category: 'posters',
      description: 'Dramatic poster design featuring cinematic elements with elegant typography and atmospheric composition',
      image: '/lovable-uploads/7aa62918-1e0b-488e-8e79-25b9a02e85e3.png',
      tools: ['Cinematic Design', 'Elegant Typography', 'Atmospheric Composition', 'Dramatic Elements']
    },
    {
      id: 14,
      title: 'Anveshna Creatorship',
      category: 'social',
      description: 'Creative recruitment campaign design with striking animal imagery',
      image: '/lovable-uploads/165002ef-78d3-4be3-ade4-e1b61cf9ef86.png',
      tools: ['Recruitment Campaign', 'Creative Design', 'Animal Imagery', 'Striking Visual']
    },
    {
      id: 15,
      title: 'Festive Marketing',
      category: 'social',
      description: 'Creative festive marketing campaigns',
      image: '/lovable-uploads/beec4505-b11b-4491-abe5-cbbadefe27e5.png',
      gallery: [
        '/lovable-uploads/beec4505-b11b-4491-abe5-cbbadefe27e5.png',
        '/lovable-uploads/ac7e4aff-b90c-41e7-8293-2c75b3d9914b.png',
        '/lovable-uploads/4940a8fe-3215-44c1-94e9-db1ec041cd2c.png'
      ],
      tools: ['Festive Campaign', 'Marketing Design', 'Social Media', 'Celebration Theme']
    },
    {
      id: 16,
      title: 'Onam - Event',
      category: 'social',
      categories: ['featured', 'social'],
      description: 'Festival celebration event promotion',
      image: '/lovable-uploads/d2998c71-9d75-46d0-9cb0-3a0a61362c31.png',
      gallery: [
        '/lovable-uploads/d2998c71-9d75-46d0-9cb0-3a0a61362c31.png',
        '/lovable-uploads/295a2739-ebaa-41a5-9d17-7b8341d65384.png'
      ],
      tools: ['Festival Design', 'Event Promotion', 'Cultural Celebration', 'Traditional Theme']
    },
    {
      id: 17,
      title: 'Nandotsav - Event',
      category: 'social',
      description: 'Traditional Krishna Janmashtami celebration event design featuring vibrant golden tones and cultural elements',
      image: '/lovable-uploads/81b8112f-e84e-4b1f-9257-1cc2daf3e86b.png',
      gallery: [
        '/lovable-uploads/81b8112f-e84e-4b1f-9257-1cc2daf3e86b.png',
        '/lovable-uploads/5684acf9-f7b4-4f49-a957-78302d08f187.png'
      ],
      tools: ['Krishna Janmashtami', 'Traditional Design', 'Cultural Event', 'Golden Theme', 'Religious Festival']
    },
    {
      id: 18,
      title: 'Pramana - Event',
      category: 'social',
      description: 'Multi-day cultural event featuring live music performances with diverse artists including Elyzium Band, Harika Narayan, Lost Stories, Sreerama Chandra and auditions',
      image: '/lovable-uploads/c90e2439-e65e-4c7a-a110-73d727def84d.png',
      gallery: [
        '/lovable-uploads/c90e2439-e65e-4c7a-a110-73d727def84d.png',
        '/lovable-uploads/38be1f78-8547-4bf6-b388-81dfda2821d2.png',
        '/lovable-uploads/8d9bd272-e0dd-45b1-b144-f6bc2ce48301.png',
        '/lovable-uploads/6cbb59ab-22d7-4e25-a0d0-c1afbed20737.png',
        '/lovable-uploads/1851fd77-bf79-46d9-9352-9d133f224a15.png'
      ],
      tools: ['Multi-day Event', 'Live Music', 'Cultural Festival', 'Artist Collaboration', 'Music Performance', 'Event Branding']
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (selectedCategory === 'featured') {
      return project.categories?.includes('featured');
    }
    return project.category === selectedCategory || project.categories?.includes(selectedCategory);
  });

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Create display cards for featured projects in specific order
  const createFeaturedCards = () => {
    // Get specific projects in the requested order: Businessman, Avasarama, Onam
    const businessmanProject = projects.find(p => p.title === 'Businessman Movie');
    const avasaramaProject = projects.find(p => p.title === 'Avasarama Ahankaarama - Independent Film');
    const onamProject = projects.find(p => p.title === 'Onam - Event');
    
    const orderedProjects = [businessmanProject, avasaramaProject, onamProject].filter(Boolean);
    
    return orderedProjects.map((project, index) => ({
      title: project.title,
      description: project.description,
      date: project.tools.join(', '),
      image: project.image,
      className: index === 0 
        ? "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 cursor-pointer"
        : index === 1
        ? "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 cursor-pointer"
        : "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10 cursor-pointer",
      onClick: () => handleProjectClick(project),
      project: project
    }));
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
            A curated selection of visual stories told across different styles and formats.
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

        {selectedCategory === 'featured' ? (
          <motion.div
            key="featured-cards"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center min-h-[400px] py-8"
          >
            <div className="w-full max-w-4xl">
              <DisplayCards cards={createFeaturedCards().map(card => ({
                title: card.title,
                description: card.description,
                date: card.date,
                image: card.image,
                className: card.className,
                onClick: card.onClick
              }))} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-[500px] py-8"
          >
            <ThreeDPhotoCarousel 
              projects={filteredProjects}
              onProjectClick={handleProjectClick}
            />
          </motion.div>
        )}
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
