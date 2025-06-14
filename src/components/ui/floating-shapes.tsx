
"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
  const shapes = [
    // Circles
    { type: 'circle', size: 120, x: '10%', y: '20%', duration: 20, color: 'border-black' },
    { type: 'circle', size: 80, x: '85%', y: '30%', duration: 25, color: 'border-gray-600' },
    { type: 'circle', size: 60, x: '20%', y: '70%', duration: 18, color: 'border-black' },
    { type: 'circle', size: 100, x: '90%', y: '80%', duration: 22, color: 'border-gray-700' },
    { type: 'circle', size: 45, x: '5%', y: '55%', duration: 28, color: 'border-gray-500' },
    { type: 'circle', size: 75, x: '75%', y: '5%', duration: 19, color: 'border-black' },
    { type: 'circle', size: 90, x: '50%', y: '85%', duration: 24, color: 'border-gray-600' },
    
    // Squares
    { type: 'square', size: 40, x: '15%', y: '45%', duration: 16, color: 'border-gray-800' },
    { type: 'square', size: 60, x: '80%', y: '15%', duration: 24, color: 'border-black' },
    { type: 'square', size: 35, x: '5%', y: '85%', duration: 19, color: 'border-gray-700' },
    { type: 'square', size: 50, x: '65%', y: '40%', duration: 21, color: 'border-gray-600' },
    { type: 'square', size: 30, x: '45%', y: '15%', duration: 17, color: 'border-black' },
    { type: 'square', size: 55, x: '30%', y: '90%', duration: 23, color: 'border-gray-500' },
    
    // Triangles
    { type: 'triangle', size: 50, x: '70%', y: '60%', duration: 21, color: 'rgba(0, 0, 0, 0.2)' },
    { type: 'triangle', size: 30, x: '25%', y: '10%', duration: 17, color: 'rgba(0, 0, 0, 0.15)' },
    { type: 'triangle', size: 40, x: '55%', y: '75%', duration: 26, color: 'rgba(107, 114, 128, 0.2)' },
    { type: 'triangle', size: 35, x: '10%', y: '35%', duration: 20, color: 'rgba(0, 0, 0, 0.18)' },
    { type: 'triangle', size: 45, x: '85%', y: '50%', duration: 18, color: 'rgba(75, 85, 99, 0.2)' },
    
    // Diamonds (rotated squares)
    { type: 'diamond', size: 40, x: '40%', y: '25%', duration: 22, color: 'border-gray-600' },
    { type: 'diamond', size: 50, x: '15%', y: '65%', duration: 25, color: 'border-black' },
    { type: 'diamond', size: 35, x: '75%', y: '85%', duration: 19, color: 'border-gray-700' },
  ];

  const renderShape = (shape: any, index: number) => {
    const baseClasses = "absolute opacity-15";
    const animationDelay = index * 0.3;
    
    if (shape.type === 'circle') {
      return (
        <motion.div
          key={index}
          className={`${baseClasses} rounded-full border-2 ${shape.color}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            animationDelay: `${animationDelay}s`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 50, 0],
            rotate: [0, 360, 720],
            scale: [1, 1.8, 0.6, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: animationDelay,
          }}
        />
      );
    }
    
    if (shape.type === 'square') {
      return (
        <motion.div
          key={index}
          className={`${baseClasses} border-2 ${shape.color}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            animationDelay: `${animationDelay}s`,
          }}
          animate={{
            y: [0, 70, -30, 0],
            x: [0, -60, 40, 0],
            rotate: [0, 180, 360, 540, 720],
            scale: [1, 0.4, 1.6, 0.8, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: animationDelay,
          }}
        />
      );
    }
    
    if (shape.type === 'diamond') {
      return (
        <motion.div
          key={index}
          className={`${baseClasses} border-2 ${shape.color}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            transform: 'rotate(45deg)',
            animationDelay: `${animationDelay}s`,
          }}
          animate={{
            y: [0, -60, 40, 0],
            x: [0, 30, -20, 0],
            rotate: [45, 405, 765, 1125],
            scale: [1, 2.0, 0.3, 1.4, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: animationDelay,
          }}
        />
      );
    }
    
    if (shape.type === 'triangle') {
      return (
        <motion.div
          key={index}
          className={`${baseClasses}`}
          style={{
            left: shape.x,
            top: shape.y,
            width: 0,
            height: 0,
            borderLeft: `${shape.size / 2}px solid transparent`,
            borderRight: `${shape.size / 2}px solid transparent`,
            borderBottom: `2px solid ${shape.color}`,
            borderTop: `${shape.size}px solid transparent`,
            animationDelay: `${animationDelay}s`,
          }}
          animate={{
            y: [0, -50, 30, 0],
            x: [0, 25, -35, 0],
            rotate: [0, 240, 480, 720],
            scale: [1, 2.2, 0.2, 1.5, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: animationDelay,
          }}
        />
      );
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => renderShape(shape, index))}
      
      {/* Enhanced gradient overlay with more depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/10 to-gray-100/20" />
      <div className="absolute inset-0 bg-gradient-to-tl from-gray-50/10 via-transparent to-gray-50/15" />
    </div>
  );
}
