import React from 'react';
import { motion } from 'framer-motion';

const TopographyBackground = () => {
  // Generate topographic lines with varying heights and animations
  const lines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    duration: 20 + i * 2,
    opacity: 0.08 + i * 0.02, // Increased base opacity
    scale: 1 + i * 0.1,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient for subtle depth */}
          <radialGradient id="topoGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
          </radialGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.05" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        
        {lines.map((line) => (
          <motion.g
            key={line.id}
            initial={{ rotate: 0, scale: line.scale }}
            animate={{ 
              rotate: 360,
              scale: [line.scale, line.scale * 1.1, line.scale]
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              ease: "linear",
              delay: line.delay,
            }}
            style={{
              transformOrigin: "500px 500px",
              opacity: line.opacity,
            }}
          >
            {/* Organic topographic shapes */}
            <path
              d={`M ${200 + line.id * 50} ${300 + line.id * 40} 
                  Q ${400 + line.id * 30} ${200 + line.id * 50} ${600 + line.id * 40} ${350 + line.id * 30}
                  Q ${750 + line.id * 20} ${500 + line.id * 40} ${650 + line.id * 30} ${650 + line.id * 50}
                  Q ${450 + line.id * 40} ${750 + line.id * 30} ${250 + line.id * 50} ${600 + line.id * 40}
                  Q ${150 + line.id * 30} ${450 + line.id * 50} ${200 + line.id * 50} ${300 + line.id * 40} Z`}
              fill="none"
              stroke="url(#topoGradient)"
              strokeWidth="1.5"
              className="text-gray-500"
            />
            
            {/* Additional curved lines for complexity */}
            <path
              d={`M ${100 + line.id * 60} ${400 + line.id * 30}
                  Q ${350 + line.id * 40} ${150 + line.id * 60} ${700 + line.id * 30} ${300 + line.id * 40}
                  Q ${800 + line.id * 20} ${600 + line.id * 50} ${500 + line.id * 40} ${750 + line.id * 30}`}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="text-gray-400"
            />
          </motion.g>
        ))}
        
        {/* Floating particles for additional texture */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={100 + (i * 80) % 900}
            cy={150 + (i * 120) % 800}
            r="1.5"
            fill="currentColor"
            className="text-gray-400"
            initial={{ opacity: 0.2 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Additional contour lines */}
        {Array.from({ length: 5 }, (_, i) => (
          <motion.ellipse
            key={`contour-${i}`}
            cx={300 + i * 100}
            cy={400 + i * 80}
            rx={150 + i * 50}
            ry={100 + i * 30}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-gray-300"
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 25 + i * 3,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            style={{ transformOrigin: `${300 + i * 100}px ${400 + i * 80}px` }}
          />
        ))}
      </svg>
      
      {/* Additional overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-gray-50/[0.03]" />
    </div>
  );
};

export default TopographyBackground;
