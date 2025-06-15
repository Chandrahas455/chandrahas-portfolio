
"use client";

import { motion } from "framer-motion";

export function ThreeDFloatingElements() {
  const elements = [
    // 3D Cubes
    { 
      type: 'cube', 
      size: 60, 
      x: '15%', 
      y: '25%', 
      duration: 20, 
      color: 'from-gray-200 to-gray-300',
      delay: 0 
    },
    { 
      type: 'cube', 
      size: 45, 
      x: '80%', 
      y: '60%', 
      duration: 25, 
      color: 'from-gray-300 to-gray-400',
      delay: 2 
    },
    { 
      type: 'cube', 
      size: 35, 
      x: '25%', 
      y: '75%', 
      duration: 18, 
      color: 'from-gray-200 to-gray-300',
      delay: 4 
    },
    
    // 3D Spheres
    { 
      type: 'sphere', 
      size: 80, 
      x: '85%', 
      y: '20%', 
      duration: 22, 
      color: 'from-yellow-100 to-yellow-200',
      delay: 1 
    },
    { 
      type: 'sphere', 
      size: 50, 
      x: '5%', 
      y: '50%', 
      duration: 28, 
      color: 'from-gray-100 to-gray-200',
      delay: 3 
    },
    { 
      type: 'sphere', 
      size: 65, 
      x: '70%', 
      y: '85%', 
      duration: 24, 
      color: 'from-yellow-50 to-yellow-100',
      delay: 5 
    },
    
    // 3D Pyramids
    { 
      type: 'pyramid', 
      size: 55, 
      x: '40%', 
      y: '15%', 
      duration: 26, 
      color: 'from-gray-300 to-gray-400',
      delay: 1.5 
    },
    { 
      type: 'pyramid', 
      size: 40, 
      x: '60%', 
      y: '40%', 
      duration: 19, 
      color: 'from-gray-200 to-gray-300',
      delay: 3.5 
    },
  ];

  const renderElement = (element: any, index: number) => {
    const baseClasses = "absolute opacity-20 pointer-events-none";
    
    if (element.type === 'cube') {
      return (
        <motion.div
          key={index}
          className={`${baseClasses} bg-gradient-to-br ${element.color} shadow-lg`}
          style={{
            width: element.size,
            height: element.size,
            left: element.x,
            top: element.y,
            transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg)',
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 30, -20, 0],
            rotateX: [45, 65, 25, 45],
            rotateY: [45, 75, 15, 45],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-black/10 to-transparent"></div>
        </motion.div>
      );
    }
    
    if (element.type === 'sphere') {
      return (
        <motion.div
          key={index}
          className={`${baseClasses} rounded-full bg-gradient-radial ${element.color} shadow-xl`}
          style={{
            width: element.size,
            height: element.size,
            left: element.x,
            top: element.y,
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 50%), linear-gradient(135deg, rgb(229, 231, 235), rgb(156, 163, 175))`,
          }}
          animate={{
            y: [0, -80, 20, 0],
            x: [0, -40, 60, 0],
            scale: [1, 1.3, 0.7, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      );
    }
    
    if (element.type === 'pyramid') {
      return (
        <motion.div
          key={index}
          className={`${baseClasses}`}
          style={{
            left: element.x,
            top: element.y,
            width: 0,
            height: 0,
            borderLeft: `${element.size / 2}px solid transparent`,
            borderRight: `${element.size / 2}px solid transparent`,
            borderBottom: `${element.size}px solid rgba(156, 163, 175, 0.3)`,
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
            transform: 'perspective(1000px) rotateX(30deg)',
          }}
          animate={{
            y: [0, -70, 10, 0],
            x: [0, 45, -30, 0],
            rotateZ: [0, 15, -10, 0],
            scale: [1, 1.4, 0.6, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => renderElement(element, index))}
      
      {/* Enhanced depth with multiple gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-gray-50/10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-yellow-50/5 via-transparent to-white/5" />
    </div>
  );
}
