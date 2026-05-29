import React from 'react';
import { motion } from 'framer-motion';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-[#030014]">
      {/* Geometric Grid Pattern */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial overlay to vignette the grid at the corners */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_20%,#030014_100%)] pointer-events-none" />

      {/* Ambient Drifting Glowing Orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-purple-600/10 glow-blur pointer-events-none"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[65vw] h-[65vw] rounded-full bg-blue-600/10 glow-blur pointer-events-none"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-[35%] left-[25%] w-[45vw] h-[45vw] rounded-full bg-emerald-600/5 glow-blur pointer-events-none"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
