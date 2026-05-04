import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  href?: string;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  href, 
  variant = 'primary', 
  icon: Icon, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-black text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer";
  
  const variants = {
    primary: "bg-accent text-bg shadow-[0_4px_14px_0_rgba(0,163,255,0.39)]",
    secondary: "bg-surface text-text-primary border border-white/10 hover:border-accent/30"
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href } : {};

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'primary' ? "0 0 25px rgba(0, 163, 255, 0.6)" : "0 0 15px rgba(255, 255, 255, 0.1)" 
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
      {...linkProps}
      {...props as any}
    >
      {children}
      {Icon && <Icon className="ml-3 w-4 h-4" />}
    </Component>
  );
};
