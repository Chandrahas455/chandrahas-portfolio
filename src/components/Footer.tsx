import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-black mb-2">Chandrahas Chigullapalli</h3>
            <p className="text-gray-600">Visual Designer & Storyteller</p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#home" className="text-gray-600 hover:text-black transition-colors">Home</a>
            <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Portfolio</a>
            <a href="#about" className="text-gray-600 hover:text-black transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Chandrahas Chigullapalli. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
