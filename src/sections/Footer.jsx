import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/5 dark:border-white/5 bg-slate-100/40 dark:bg-slate-950/40 relative overflow-hidden py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div>
          <h3 className="text-gray-900 dark:text-white font-bold text-lg tracking-tight">Hanif Arif</h3>
          <p className="text-gray-500 text-xs mt-1">
            © {new Date().getFullYear()} Hanif Arif. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs font-semibold text-gray-500">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
            className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            About
          </button>
          <button 
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} 
            className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            Skills
          </button>
          <button 
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} 
            className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            Experience
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
            className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            Contact
          </button>
        </div>

        <button 
          onClick={scrollToTop}
          className="p-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 rounded-full transition-all duration-300 group shadow-md"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
