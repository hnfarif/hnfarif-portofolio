import React from 'react';
import Header from './components/Header';
import GridBackground from './components/GridBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import TechMarquee from './sections/TechMarquee';
import Timeline from './sections/Timeline';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import AIChatWidget from './components/AIChatWidget';

export default function App() {
  return (
    <div className="relative min-h-screen text-gray-200 selection:bg-violet-600/30 selection:text-white">
      {/* Ambient Visual Canvas Background */}
      <GridBackground />
      
      {/* Navigation Header */}
      <Header />
      
      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <TechMarquee />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      
      {/* Floating AI Chat Assistant */}
      <AIChatWidget />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
