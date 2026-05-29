import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-slate-950/40 relative overflow-hidden py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div>
          <h3 className="text-white font-bold text-lg tracking-tight">Hanif Arif</h3>
          <p className="text-gray-500 text-xs mt-1">
            © {new Date().getFullYear()} Hanif Arif. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs font-semibold text-gray-500">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
            className="hover:text-white transition-colors duration-200"
          >
            About
          </button>
          <button 
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} 
            className="hover:text-white transition-colors duration-200"
          >
            Skills
          </button>
          <button 
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} 
            className="hover:text-white transition-colors duration-200"
          >
            Experience
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
            className="hover:text-white transition-colors duration-200"
          >
            Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </button>
        </div>

        <button 
          onClick={scrollToTop}
          className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 hover:border-white/10 rounded-full transition-all duration-300 group shadow-md"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
