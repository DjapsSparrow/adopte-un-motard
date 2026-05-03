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
  const baseStyles = "inline-flex items-center justify-center font-bold text-base px-8 py-4 rounded-[100px] transition-colors focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:ring-offset-2 focus:ring-offset-paper";
  
  const variants = {
    primary: "bg-electric-cyan text-deep-charcoal",
    secondary: "bg-transparent text-deep-charcoal border border-carbon-grey/30 hover:border-carbon-grey"
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href } : {};

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ 
        scale: 1.02,
        boxShadow: variant === 'primary' ? "0 0 20px rgba(168, 230, 226, 0.5)" : "none" 
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...linkProps}
      {...props as any}
    >
      {children}
      {Icon && <Icon className="ml-2 w-5 h-5" />}
    </Component>
  );
};
