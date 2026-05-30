import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import Section from '../components/Section';
import BorderGlow from '../components/BorderGlow';
import { cvData } from '../data/cvData';

export default function Timeline() {
  return (
    <Section 
      id="experience" 
      badge="Career Journey" 
      title="Work Experience" 
      subtitle="A detailed breakdown of my full-time roles, software initiatives, and financial backend engineering achievements."
    >
      <div className="relative border-l border-black/10 dark:border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 flex flex-col gap-16 py-4">
        {cvData.experience.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Point */}
            <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-[25px] h-[25px] rounded-full border-4 border-slate-50 dark:border-[#030014] bg-white dark:bg-[#0b0521] flex items-center justify-center group-hover:border-violet-500 transition-colors duration-300">
              <div className="w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.6)] group-hover:scale-125 transition-transform duration-300" />
            </div>

            {/* Experience Panel */}
            <BorderGlow>
              <div className="glass-panel p-6 md:p-8 relative overflow-hidden glass-panel-hover h-full">
                {/* Highlight first item (most recent) */}
                {idx === 0 && (
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-violet-600/5 glow-blur pointer-events-none" />
                )}

                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-violet-400 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-start sm:items-end gap-1.5 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Details Bullet List */}
                <ul className="flex flex-col gap-3">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60 mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BorderGlow>
          </div>
        ))}
      </div>
    </Section>
  );
}
