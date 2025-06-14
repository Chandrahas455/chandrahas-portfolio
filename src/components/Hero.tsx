import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1
            variants={textVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-tight"
          >
            Hi, I'm <br />
            <span className="relative">
              Chandrahas Chigullapalli
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-2 left-0 h-1 bg-black"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={subtitleVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Visual Designer & Storyteller with 4+ years of experience 
            crafting compelling visual narratives through design
          </motion.p>

          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={scrollVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-black"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <div className="w-0.5 h-8 bg-black"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
