import React, { useRef, useState, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * BorderGlow Component
 * Creates a cursor-following border glow effect.
 * Only active in dark mode.
 * 
 * @param {React.ReactNode} children - The content to wrap
 * @param {string} className - Classes for the inner content wrapper
 * @param {string} containerClassName - Classes for the outer container
 * @param {string} glowColor - Color of the glow effect (CSS color string)
 * @param {number} size - Radius of the glow effect in pixels
 * @param {string} borderRadius - Border radius of the component
 */
export default function BorderGlow({ 
  children, 
  className = "", 
  containerClassName = "",
  glowColor = "rgba(139, 92, 246, 0.5)",
  size = 300,
  borderRadius = "1.875rem" // default matching rounded-3xl (30px)
}) {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  // In light mode, just render the content normally without the glow wrapper
  if (theme !== 'dark') {
    return (
      <div 
        className={containerClassName}
        style={{ borderRadius: borderRadius, overflow: 'hidden' }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-[1.5px] overflow-hidden ${containerClassName}`}
      style={{
        borderRadius: borderRadius,
      }}
    >
      {/* Glow Layer (The "Spotlight") */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${size}px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 80%)`,
        }}
      />
      
      {/* Inner Content Wrapper */}
      <div 
        className={`relative z-10 w-full h-full overflow-hidden ${className}`}
        style={{
          borderRadius: `calc(${borderRadius} - 1.5px)`,
          // If the child is a glass-panel, it will handle its own background.
          // We just provide the container that allows the glow to peek through the 1.5px padding.
        }}
      >
        {children}
      </div>
    </div>
  );
}
