import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  icon: Icon,
  type = 'button',
  disabled = false
}) {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:opacity-50 disabled:pointer-events-none overflow-hidden group select-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:brightness-110",
    secondary: "glass-panel text-gray-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 border-black/10 dark:border-white/10",
    tertiary: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Hover background reflection */}
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      )}
      
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </motion.button>
  );
}
