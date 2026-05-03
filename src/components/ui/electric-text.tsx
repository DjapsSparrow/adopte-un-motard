"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ElectricText = ({ 
  text, 
  className 
}: { 
  text: string; 
  className?: string 
}) => {
  return (
    <span className={cn("relative inline-block", className)}>
      {/* Glow effect layer */}
      <motion.span
        initial={{ opacity: 0.5, filter: "blur(4px)" }}
        animate={{ 
          opacity: [0.4, 0.8, 0.4],
          filter: ["blur(4px)", "blur(6px)", "blur(4px)"],
          textShadow: [
            "0 0 8px rgba(168, 230, 226, 0.6)",
            "0 0 16px rgba(168, 230, 226, 0.8)",
            "0 0 8px rgba(168, 230, 226, 0.6)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 text-electric-cyan select-none pointer-events-none"
      >
        {text}
      </motion.span>

      {/* Main text with flickering */}
      <motion.span
        animate={{
          opacity: [1, 0.9, 1, 0.8, 1],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: Math.random() * 2
        }}
        className="relative z-10"
      >
        {text}
      </motion.span>

      {/* Random "bolts" or sparks can be added as absolute elements if needed */}
    </span>
  );
};
