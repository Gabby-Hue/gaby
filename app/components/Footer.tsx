'use client';

import React from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpIcon, GithubIcon, InstagramIcon, WhatsappIcon } from './Icons';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const characterImage = theme === 'dark' ? '/porto/box.png' : '/porto/boxlight.png';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-16 pb-12 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-[#0b0914]/70 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Footer Main Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Left Column: Nav Links */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <a href="#hero" className="text-base font-extrabold text-zinc-700 dark:text-zinc-300 hover:text-[#ff2b85] transition-colors">
              Home
            </a>
            <a href="#about" className="text-base font-extrabold text-zinc-700 dark:text-zinc-300 hover:text-[#ff2b85] transition-colors">
              About
            </a>
            <a href="#projects" className="text-base font-extrabold text-zinc-700 dark:text-zinc-300 hover:text-[#ff2b85] transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-base font-extrabold text-zinc-700 dark:text-zinc-300 hover:text-[#ff2b85] transition-colors">
              Contact
            </a>
          </div>

          {/* Center Column: Character box image (box.png) with minimized aura */}
          <div className="flex justify-center items-center">
            <div className="relative w-56 sm:w-72 h-56 sm:h-72 group cursor-pointer" onClick={scrollToTop}>
              <Image
                src={characterImage}
                alt="Gabby Box Character Illustration"
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className="object-contain filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_6px_12px_rgba(255,43,133,0.06)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Column: Social Links & Credit */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center space-x-3">
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-[#ff2b85] dark:hover:text-[#ff2b85] hover:border-[#ff2b85]/50 transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-[#ff2b85] dark:hover:text-[#ff2b85] hover:border-[#ff2b85]/50 transition-colors"
                aria-label="WhatsApp Contact"
              >
                <WhatsappIcon className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-[#ff2b85] dark:hover:text-[#ff2b85] hover:border-[#ff2b85]/50 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="text-xs text-zinc-500 dark:text-zinc-400 space-y-1 text-center md:text-right font-medium">
              <p>© {PERSONAL_INFO.copyrightYear} {PERSONAL_INFO.name}. All rights reserved.</p>
            </div>
          </div>

        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-[#ff2b85] dark:hover:text-[#ff2b85] hover:border-[#ff2b85]/50 transition-colors shadow-sm hover:shadow-md cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUpIcon className="w-5 h-5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
