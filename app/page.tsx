'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeMode } from './types';

export default function Home() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('gabby-portfolio-theme') as ThemeMode | null;
    if (savedTheme === 'light') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('gabby-portfolio-theme', nextTheme);

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Intersection Observer for active section navigation link highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-200"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* Header Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main className="flex-1 space-y-12 sm:space-y-20">
        <Hero theme={theme} />
        <About theme={theme} />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}
