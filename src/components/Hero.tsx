import React from 'react';
import { motion } from 'framer-motion';
import { FloatingShapes } from './ui/floating-shapes';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-32">
      {/* Animated Background */}
      <FloatingShapes />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
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
            <motion.span 
              className="relative cursor-pointer group"
              whileHover={{ 
                scale: 1.05,
                color: "#eab308",
                transition: { duration: 0.3 }
              }}
            >
              Chandrahas Chigullapalli
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-2 left-0 h-1 bg-black group-hover:bg-yellow-500 transition-colors duration-300"
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
            </motion.span>
          </motion.h1>

          <motion.p
            variants={subtitleVariants}
            className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto"
          >
            Visual Designer & Storyteller
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

          <motion.div
            variants={scrollVariants}
            className="pt-16"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
