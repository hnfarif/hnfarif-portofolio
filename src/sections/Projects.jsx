import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, CheckCircle, Activity, Settings } from "lucide-react";
import Section from "../components/Section";
import BorderGlow from "../components/BorderGlow";
import { cvData } from "../data/cvData";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = cvData.projects[activeIndex];

  return (
    <Section
      id="projects"
      badge="Work Showcase"
      title="Enterprise Systems Built"
      subtitle="Click through the sidebar items to inspect system architectures, backend design decisions, and core project contributions."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Project Navigator Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-2 max-h-125 overflow-y-auto pr-2 custom-scrollbar">
          {cvData.projects.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <BorderGlow key={idx} borderRadius="1rem" containerClassName="w-full">
                <button
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full h-full text-left p-4 md:p-5 transition-all duration-300 relative group overflow-hidden ${
                    isActive
                      ? "glass-panel border-violet-500/40 bg-violet-600/5 shadow-[0_0_20px_rgba(124,58,237,0.15)]"
                      : "border-black/5 dark:border-white/5 bg-transparent hover:border-black/10 dark:hover:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-indigo-500"
                    />
                  )}

                  <div className="flex justify-between items-start gap-2">
                    <span
                      className={`text-[10px] uppercase tracking-widest font-semibold ${isActive ? "text-violet-400" : "text-gray-500"}`}
                    >
                      {project.company.replace("PT ", "").split(" ")[0]}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">
                      {project.duration.split(" – ").pop() || project.duration}
                    </span>
                  </div>

                  <h4
                    className={`text-sm md:text-base font-bold mt-1.5 leading-snug transition-colors duration-200 ${isActive ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200"}`}
                  >
                    {project.title}
                  </h4>
                </button>
              </BorderGlow>
            );
          })}
        </div>

        {/* Right Side: Interactive Project Dashboard */}
        <div className="lg:col-span-8 flex">
          <BorderGlow containerClassName="w-full">
            <div className="glass-panel w-full p-6 md:p-8 relative overflow-hidden flex flex-col justify-between h-full">
              {/* Ambient Background Grid inside panel */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-violet-600/5 glow-blur pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="flex-grow flex flex-col justify-between"
                >
                  <div>
                    {/* Title Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-4 mb-6">
                      <div>
                        <span className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full">
                          {activeProject.company}
                        </span>
                        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mt-2 tracking-tight">
                          {activeProject.title}
                        </h3>
                      </div>

                      {activeProject.metrics && (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                          <Activity className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[10px] sm:text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                            {activeProject.metrics}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Summary Text */}
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-light">
                      {activeProject.description}
                    </p>

                    {/* Achievements and Contributions */}
                    <div className="mb-6">
                      <h4 className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-3.5 flex items-center gap-2">
                        <Settings className="w-3.5 h-3.5 text-violet-400" />
                        Engineering Scope
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {activeProject.details.map((detail, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-start gap-2.5 bg-black/[0.01] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 p-3.5 rounded-2xl hover:border-black/10 dark:hover:border-white/10 transition-colors duration-200"
                          >
                            <CheckCircle className="w-4 h-4 text-violet-500/80 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Tagging */}
                  <div className="border-t border-black/5 dark:border-white/5 pt-5 mt-6">
                    <h4 className="text-[9px] font-semibold text-gray-500 uppercase tracking-widest mb-2.5 flex items-center gap-2">
                      <Layers className="w-3 h-3 text-violet-400" />
                      Stack Deployment
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tech.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-violet-600/10 text-violet-600 dark:text-violet-300 border border-violet-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </BorderGlow>
        </div>
      </div>
    </Section>
  );
}
