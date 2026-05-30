import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import Button from "../components/Button";
import BorderGlow from "../components/BorderGlow";
import { cvData } from "../data/cvData";

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden">
      {/* Top ambient glow light */}
      <div className="absolute top-[-10%] left-[50%] -translate-x-[50%] w-[80vw] h-[50vh] rounded-full bg-violet-600/10 glow-blur pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <BorderGlow borderRadius="9999px">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel border border-black/5 dark:border-white/5 text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-300 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Active Backend Engineer
            </div>
          </BorderGlow>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 max-w-4xl"
        >
          Building Resilient,{" "}
          <span className="text-gradient">Enterprise-Scale</span> Systems
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-600 dark:text-gray-400 max-w-2xl text-base sm:text-lg md:text-xl font-light mb-10 leading-relaxed"
        >
          Hi, I'm{" "}
          <strong className="text-gray-900 dark:text-white font-semibold">
            {cvData.personal.name}
          </strong>
          , Most of my professional experience comes from backend development,
          particularly APIs, integrations, and application architecture. I also
          have experience working across the full stack and enjoy collaborating
          on frontend features when needed 😄
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center items-center mb-12"
        >
          <Button
            variant="primary"
            icon={ArrowRight}
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Projects
          </Button>
          <a
            href="/CV_ATS_Hanif_Arif_2026_updated.pdf"
            download="CV_ATS_Hanif_Arif_2026.pdf"
          >
            <Button variant="secondary" icon={Download}>
              Download Resume
            </Button>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex gap-6 mb-16">
          <a
            href={cvData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={cvData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${cvData.personal.email}`}
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            aria-label="Email Hanif"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div variants={itemVariants} className="w-full max-w-4xl">
          <BorderGlow>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-panel border border-black/5 dark:border-white/5 bg-white/10 dark:bg-slate-950/20">
              {cvData.personal.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 md:border-r border-black/5 dark:border-white/5 last:border-0"
                >
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </BorderGlow>
        </motion.div>
      </motion.div>
    </section>
  );
}
