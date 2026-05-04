import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const SlideToJoin: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  // Opacity of the background text based on drag position
  const opacity = useTransform(x, [0, 200], [1, 0]);
  const bgColor = useTransform(x, [0, 250], ["rgba(255, 255, 255, 0.05)", "rgba(0, 163, 255, 0.2)"]);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 200) {
      setIsSuccess(true);
      window.location.href = '#tarifs';
      // Reset after a delay
      setTimeout(() => {
        setIsSuccess(false);
        x.set(0);
      }, 2000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div 
        ref={containerRef}
        style={{ backgroundColor: bgColor }}
        className="relative h-20 rounded-2xl border border-white/10 overflow-hidden flex items-center p-2"
      >
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-white/30 ml-8">
            Glisser pour rejoindre
          </span>
        </motion.div>

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 300 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="relative z-10 h-full aspect-square bg-accent rounded-xl flex items-center justify-center cursor-grab active:cursor-grabbing shadow-[0_0_20px_rgba(0,163,255,0.4)]"
        >
          <ChevronRight className="text-bg w-8 h-8" />
        </motion.div>

        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-accent flex items-center justify-center z-20"
          >
            <span className="text-bg font-black uppercase tracking-widest text-sm">PRÉPARATION DU VIRAGE...</span>
          </motion.div>
        )}
      </motion.div>
      
      <p className="mt-4 text-[10px] text-text-secondary uppercase tracking-[0.2em] font-bold opacity-50">
        AUCUN ENGAGEMENT • DISPONIBILITÉ IMMÉDIATE
      </p>
    </div>
  );
};
