import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Experience', target: 'experience' },
    { name: 'Projects', target: 'projects' },
    { name: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/70 dark:bg-[#030014]/75 backdrop-blur-md border-b border-black/5 dark:border-white/5 shadow-lg' 
          : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-900 dark:text-white font-extrabold text-lg tracking-tight select-none flex items-center gap-2 group"
          >
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-xs text-white font-black shadow-[0_0_10px_rgba(124,58,237,0.4)] group-hover:scale-105 transition-transform duration-200">H</span>
            <span>Hanif Arif</span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-500 dark:text-gray-400">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="/CV_ATS_Hanif_Arif_2026_updated.pdf" download="CV_ATS_Hanif_Arif_2026.pdf">
              <Button variant="secondary" className="px-4 py-2 text-xs" icon={Download}>
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-[#030014]/95 backdrop-blur-xl pt-28 px-6 flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-5 text-xl font-bold text-gray-600 dark:text-gray-300">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className="text-left py-2 hover:text-gray-900 dark:hover:text-white border-b border-black/5 dark:border-white/5"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <a href="/CV_ATS_Hanif_Arif_2026_updated.pdf" download="CV_ATS_Hanif_Arif_2026.pdf" className="mt-4">
              <Button variant="primary" className="w-full py-4 text-sm font-semibold" icon={Download}>
                Download Resume
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
