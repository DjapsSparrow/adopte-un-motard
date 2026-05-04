import React from 'react';
import { motion } from 'framer-motion';
import { IconBrandYoutube } from '@tabler/icons-react';

export const YouTubeWidget: React.FC = () => {
  return (
    <motion.a
      href="https://www.youtube.com/@AdopteUnMotard/featured"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 md:bottom-24 left-4 md:left-6 z-50 flex items-center gap-3 group pointer-events-auto"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-[#FF0000] rounded-full shadow-[0_0_20px_rgba(255,0,0,0.3)] group-hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all duration-300">
        <IconBrandYoutube size={24} className="text-white" />
      </div>

      <div className="bg-deep-charcoal/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        <span className="text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap">Chaine YouTube</span>
      </div>
    </motion.a>
  );
};
