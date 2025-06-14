
import React from 'react';
import { motion } from 'framer-motion';

const TopographyBackground = () => {
  // Generate topographic lines with varying heights and animations
  const lines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    duration: 20 + i * 2,
    opacity: 0.03 + i * 0.01,
    scale: 1 + i * 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient for subtle depth */}
          <radialGradient id="topoGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
          </radialGradient>
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
              strokeWidth="1"
              className="text-gray-400"
            />
            
            {/* Additional curved lines for complexity */}
            <path
              d={`M ${100 + line.id * 60} ${400 + line.id * 30}
                  Q ${350 + line.id * 40} ${150 + line.id * 60} ${700 + line.id * 30} ${300 + line.id * 40}
                  Q ${800 + line.id * 20} ${600 + line.id * 50} ${500 + line.id * 40} ${750 + line.id * 30}`}
              fill="none"
              stroke="url(#topoGradient)"
              strokeWidth="0.5"
              className="text-gray-300"
            />
          </motion.g>
        ))}
        
        {/* Floating particles for additional texture */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={100 + (i * 80) % 900}
            cy={150 + (i * 120) % 800}
            r="1"
            fill="currentColor"
            className="text-gray-300"
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{ opacity: 0.05 }}
          />
        ))}
      </svg>
      
      {/* Additional overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-gray-50/[0.01]" />
    </div>
  );
};

export default TopographyBackground;
