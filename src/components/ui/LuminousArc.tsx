import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const LuminousArc: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax: Move the arc slower than the page
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <motion.div 
        style={{ y, opacity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250%] h-[600px] flex items-end justify-center"
      >
        {/* The Main Glowing Arc Line */}
        <svg 
          viewBox="0 0 1000 200" 
          preserveAspectRatio="none" 
          className="w-full h-[400px] drop-shadow-[0_0_30px_rgba(0,163,255,0.8)]"
        >
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="var(--color-accent)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path 
            d="M 0 200 Q 500 0 1000 200" 
            fill="none" 
            stroke="url(#arcGradient)" 
            strokeWidth="3" 
            filter="url(#glow)"
            className="opacity-90"
          />
        </svg>

        {/* Underlying Soft Atmospheric Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[radial-gradient(ellipse_at_bottom,_var(--color-accent)_0%,_transparent_70%)] opacity-30 blur-[80px]"></div>
      </motion.div>
      
      {/* Ground Reflection / Bottom Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
    </div>
  );
};
