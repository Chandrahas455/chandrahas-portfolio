
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 text-center relative z-10"
      >
        <motion.div variants={textVariants} className="mb-6">
          <span className="text-sm uppercase tracking-wider text-gray-600 font-medium">
            Visual Designer & Storyteller
          </span>
        </motion.div>
        
        <motion.h1
          variants={textVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight"
        >
          Hi, I'm{' '}
          <span className="relative">
            Chandrahas
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-2 left-0 h-1 bg-black"
            ></motion.div>
          </span>
        </motion.h1>
        
        <motion.p
          variants={textVariants}
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Crafting visual experiences that tell stories and inspire action through 
          4+ years of design expertise in Adobe Creative Suite
        </motion.p>
        
        <motion.div
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            View My Work
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-black text-black px-8 py-4 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-200"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-black rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-black rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
