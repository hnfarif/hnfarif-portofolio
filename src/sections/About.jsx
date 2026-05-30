import React from "react";
import { GraduationCap, Award, MapPin, Briefcase } from "lucide-react";
import Section from "../components/Section";
import BorderGlow from "../components/BorderGlow";
import { cvData } from "../data/cvData";

export default function About() {
  return (
    <Section
      id="about"
      badge="About Me"
      title="My Journey in Software Engineering"
      subtitle="Bridging resilient backend core platforms with scalable full-stack capabilities."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bio & Core Philosophy */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <BorderGlow>
            <div className="glass-panel p-8 relative overflow-hidden h-full">
              {/* Visual glow element inside the card */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-violet-600/5 glow-blur pointer-events-none" />

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-violet-400" />
                Professional Background
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light">
                {cvData.personal.bio}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5">
                  <h4 className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                    Based in
                  </h4>
                  <p className="text-gray-900 dark:text-white text-sm font-semibold flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-violet-400" />
                    {cvData.personal.location}
                  </p>
                </div>
                <div className="p-4 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5">
                  <h4 className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                    Code Quality
                  </h4>
                  <p className="text-gray-900 dark:text-white text-sm font-semibold flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-violet-400" />
                    SonarQube Checked
                  </p>
                </div>
              </div>
            </div>
          </BorderGlow>

          <BorderGlow>
            <div className="glass-panel p-8 relative overflow-hidden h-full">
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-blue-600/5 glow-blur pointer-events-none" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Core Engineering Pillars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">01</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      High Availability
                    </h4>
                    <p className="text-xs mt-1 font-light leading-relaxed">
                      System designs emphasizing horizontal scalability,
                      microservices, and active redundancies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">02</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Event-Driven Flow
                    </h4>
                    <p className="text-xs mt-1 font-light leading-relaxed">
                      Decoupled systems utilizing Apache Kafka and Redis for
                      low-latency transaction processing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">03</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Reliable Integrations
                    </h4>
                    <p className="text-xs mt-1 font-light leading-relaxed">
                      Connecting external platforms using REST endpoints,
                      webMethods, and custom gateway middleware.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">04</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">CI/CD & DevOps</h4>
                    <p className="text-xs mt-1 font-light leading-relaxed">
                      Automated testing, SonarQube quality gates, and container
                      deployments on OpenShift and TKGI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>

        {/* Right Column: Education & Training */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <BorderGlow>
            <div className="glass-panel p-8 relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-emerald-600/5 glow-blur pointer-events-none" />

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                Education
              </h3>

              <div className="relative pl-6 border-l border-emerald-500/20 flex flex-col gap-4">
                <div>
                  <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                    {cvData.education.degree}
                  </h4>
                  <p className="text-sm text-emerald-500 dark:text-emerald-400 font-semibold mt-1">
                    {cvData.education.institution}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                    <span>{cvData.education.date}</span>
                    <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
                      GPA: {cvData.education.gpa}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-xs mt-4 leading-relaxed font-light">
                {cvData.education.details}
              </p>
            </div>
          </BorderGlow>

          <BorderGlow>
            <div className="glass-panel p-8 relative overflow-hidden h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-violet-400" />
                Bootcamps & Credentials
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-300">
                    <Award className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Fullstack Developer Bootcamp
                    </h4>
                    <p className="text-xs text-violet-400 font-semibold">
                      Metrodata Academy
                    </p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Sep 2023 - Dec 2023 | Surabaya, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-300">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Fullstack Developer Virtual Intern
                    </h4>
                    <p className="text-xs text-blue-400 font-semibold">
                      Investree x Rakamin Academy
                    </p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      May 2023 - Jun 2023 | Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>
    </Section>
  );
}
