'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDownIcon } from './Icons';
import { ThemeMode } from '../types';

interface HeroProps {
  theme: ThemeMode;
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  const characterImage = theme === 'dark' ? '/porto/hello.png' : '/porto/hellolight.png';

  return (
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center py-6 md:py-8 px-4 sm:px-8 lg:px-12 overflow-hidden bg-grid-pattern">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[480px] h-[480px] bg-[#ff2b85]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Content Container - 2-Column Balanced Layout */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 z-10 my-auto px-2 lg:px-6">
        
        {/* Left Side: Headline Enlarged by 20% & Subtitle */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl my-auto">
          
          {/* Main Title - 20% Larger Single Line ("Hi, I'm Gabby") */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-none whitespace-nowrap">
            Hi, I&apos;m <span className="pink-gradient-text">Gabby</span>
          </h1>

          {/* Subtitle ("a full-stack web and android developer") */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-zinc-600 dark:text-zinc-400">
            a full-stack web and android developer
          </p>

          {/* Action Buttons directly below subtitle */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#ff2b85] hover:bg-[#e01f70] text-white font-extrabold text-base shadow-md shadow-[#ff2b85]/20 transition-all duration-200 text-center transform hover:scale-105 active:scale-95"
            >
              Let&apos;s Talk
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 hover:border-[#ff2b85] hover:text-[#ff2b85] dark:hover:text-[#ff2b85] font-extrabold text-base text-zinc-800 dark:text-zinc-200 transition-all duration-200 text-center backdrop-blur-md transform hover:scale-105 active:scale-95"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Right Side: Character Image Shifted Rightward */}
        <div className="flex-1 flex justify-center lg:justify-end items-center relative w-full max-w-lg lg:max-w-xl my-auto lg:translate-x-6">
          <div className="relative w-[340px] sm:w-[440px] md:w-[480px] lg:w-[540px] h-[370px] sm:h-[480px] md:h-[520px] lg:h-[580px]">
            <Image
              src={characterImage}
              alt="Gabby Hero Character Illustration"
              fill
              sizes="(max-width: 768px) 100vw, 540px"
              priority
              className="object-contain filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_6px_12px_rgba(255,43,133,0.06)]"
            />
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="flex justify-center pt-2 pb-2 z-10">
        <a
          href="#about"
          className="p-2 rounded-full text-zinc-400 hover:text-[#ff2b85] transition-colors animate-bounce"
          aria-label="Scroll to About section"
        >
          <ArrowDownIcon className="w-4 h-4" />
        </a>
      </div>

    </section>
  );
};
