'use client';

import React, { useState } from 'react';
import { SunIcon, MoonIcon, GithubIcon, MenuIcon, CloseIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/85 dark:bg-[#0b0914]/85 border-b border-[#ff2b85]/15 transition-colors duration-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Playful Title */}
        <a href="#hero" className="flex items-center space-x-2 group">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-[#ff2b85] transition-colors">
            Gabby
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff2b85] animate-pulse" />
        </a>

        {/* Navigation Links - Desktop Playful Interactive Navigation */}
        <nav className="hidden md:flex items-center space-x-2 bg-zinc-100/60 dark:bg-zinc-900/60 p-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-5 py-2 rounded-full text-base font-extrabold transition-all duration-200 relative transform hover:scale-105 ${
                  isActive
                    ? 'bg-[#ff2b85] text-white shadow-md shadow-[#ff2b85]/30'
                    : 'text-zinc-700 dark:text-zinc-300 hover:text-[#ff2b85] dark:hover:text-[#ff2b85]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Side Actions: GitHub & Theme Toggle (Enlarged) */}
        <div className="flex items-center space-x-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-[#ff2b85] dark:hover:text-[#ff2b85] hover:border-[#ff2b85]/40 transition-all duration-200 transform hover:scale-110 active:scale-95"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-[#ff2b85] dark:hover:text-[#ff2b85] hover:border-[#ff2b85]/40 transition-all duration-200 transform hover:scale-110 hover:rotate-12 active:scale-95 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5 text-amber-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-indigo-500" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-[#ff2b85]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#130f21] border-b border-[#ff2b85]/15 px-6 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-extrabold transition-all ${
                  isActive
                    ? 'bg-[#ff2b85] text-white shadow-md shadow-[#ff2b85]/30'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-[#ff2b85]/10 hover:text-[#ff2b85]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
