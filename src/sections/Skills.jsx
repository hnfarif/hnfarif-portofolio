import React from 'react';
import { Cpu, Server, Layout, Database, Send, Terminal } from 'lucide-react';
import Section from '../components/Section';
import { cvData } from '../data/cvData';

export default function Skills() {
  const getIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <Terminal className="w-5 h-5 text-violet-400" />;
      case 'Backend Development':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Frontend Development':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Infrastructure & DevOps':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Messaging & Integration':
        return <Send className="w-5 h-5 text-purple-400" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <Section 
      id="skills" 
      badge="Technical Expertise" 
      title="Professional Capabilities" 
      subtitle="A curated suite of programming languages, framework stacks, database nodes, and DevOps automation."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cvData.skills.map((skillGroup, idx) => (
          <div 
            key={idx} 
            className="glass-panel p-8 rounded-3xl relative overflow-hidden group glass-panel-hover"
          >
            {/* Ambient glow on card hover */}
            <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-violet-600/0 group-hover:bg-violet-600/10 glow-blur transition-all duration-500 pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:border-violet-500/30 transition-colors duration-300">
                {getIcon(skillGroup.category)}
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                {skillGroup.category}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/5 text-gray-300 border border-white/5 hover:border-white/10 hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
