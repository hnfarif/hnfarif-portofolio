import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Copy, Check, Send } from "lucide-react";
import Section from "../components/Section";
import Button from "../components/Button";
import BorderGlow from "../components/BorderGlow";
import { cvData } from "../data/cvData";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import GithubIcon from "../assets/icons/GithubIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate API request send
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <Section
      id="contact"
      badge="Get In Touch"
      title="Start A Conversation"
      subtitle="Ready to build scalable backend systems or integrate enterprise middleware? Leave a message below or connect directly."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Direct channels */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <BorderGlow>
            <div className="glass-panel p-6 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-violet-600/5 glow-blur pointer-events-none" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Direct Channels
              </h3>

              <div className="flex flex-col gap-4">
                {/* Email channel */}
                <div className="flex items-center justify-between p-4 bg-black/[0.01] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-violet-500/10 border border-violet-500/20 rounded-xl text-violet-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${cvData.personal.email}`}
                        className="text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium break-all"
                      >
                        {cvData.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(cvData.personal.email, "email")
                    }
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl border border-transparent hover:border-black/5 dark:hover:border-white/5 transition-all duration-200"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* LinkedIn channel */}
                <div className="flex items-center justify-between p-4 bg-black/[0.01] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">
                        Professional Network
                      </span>
                      <a
                        href={cvData.personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
                      >
                        linkedin.com/in/hnfarif
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <BorderGlow>
            <div className="glass-panel p-6 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-violet-600/5 glow-blur pointer-events-none" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Social Media</h3>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between p-4 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">
                        Social Platform
                      </span>
                      <a
                        href={cvData.personal.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
                      >
                        instagram.com/hnfarif
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <BorderGlow>
            <div className="glass-panel p-6 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-violet-600/5 glow-blur pointer-events-none" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Github</h3>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between p-4 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">
                        Code Repository
                      </span>
                      <a
                        href={cvData.personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
                      >
                        github.com/hnfarif
                      </a>
                    </div>
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
