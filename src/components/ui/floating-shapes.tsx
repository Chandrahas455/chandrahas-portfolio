
"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
  const shapes = [
    // Circles
    { type: 'circle', size: 120, x: '10%', y: '20%', duration: 20 },
    { type: 'circle', size: 80, x: '85%', y: '30%', duration: 25 },
    { type: 'circle', size: 60, x: '20%', y: '70%', duration: 18 },
    { type: 'circle', size: 100, x: '90%', y: '80%', duration: 22 },
    
    // Squares
    { type: 'square', size: 40, x: '15%', y: '45%', duration: 16 },
    { type: 'square', size: 60, x: '80%', y: '15%', duration: 24 },
    { type: 'square', size: 35, x: '5%', y: '85%', duration: 19 },
    
    // Triangles
    { type: 'triangle', size: 50, x: '70%', y: '60%', duration: 21 },
    { type: 'triangle', size: 30, x: '25%', y: '10%', duration: 17 },
  ];

  const renderShape = (shape: any, index: number) => {
    const baseClasses = "absolute opacity-10";
    
    if (shape.type === 'circle') {
      return (
        <motion.div
          key={index}
          className={`${baseClasses} rounded-full bg-black`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      );
    }
    
    if (shape.type === 'square') {
      return (
        <motion.div
          key={index}
          className={`${baseClasses} bg-gray-800`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
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
            borderBottom: `${shape.size}px solid rgba(0, 0, 0, 0.1)`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 120, 240, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      );
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => renderShape(shape, index))}
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/20 to-transparent" />
    </div>
  );
}
