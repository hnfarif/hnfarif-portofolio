import React from 'react';
import { motion } from 'framer-motion';

export default function Section({
  children,
  id,
  title,
  subtitle,
  badge,
  className = ''
}) {
  return (
    <section id={id} className={`relative py-20 md:py-32 overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {(title || subtitle || badge) && (
          <div className="flex flex-col items-start text-left mb-12 md:mb-16">
            {badge && (
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full mb-3"
              >
                {badge}
              </motion.span>
            )}
            
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
              >
                {title}
              </motion.h2>
            )}
            
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 max-w-3xl text-sm md:text-base font-light leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
