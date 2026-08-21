'use client';

import React from 'react';
import Image from 'next/image';
import { TECH_STACK, PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface AboutProps {
  theme: ThemeMode;
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  const characterImage = theme === 'dark' ? '/porto/gabbybox.png' : '/porto/gabbyboxlight.png';

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-[#ff2b85]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 z-10 relative">
        
        {/* LEFT SIDE (UNBOXED): Enlarged gabbybox character */}
        <div className="w-full lg:w-5/12 flex justify-center items-center">
          <div className="relative w-[340px] sm:w-[440px] md:w-[500px] lg:w-[560px] h-[360px] sm:h-[460px] md:h-[520px] lg:h-[580px]">
            <Image
              src={characterImage}
              alt="Gabby About Character Illustration"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 560px"
              className="object-contain filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_6px_12px_rgba(255,43,133,0.06)]"
            />
          </div>
        </div>

        {/* RIGHT SIDE: About Text & Tech Stack Grid */}
        <div className="w-full lg:w-7/12 space-y-6 text-left">
          
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
              About
            </h2>
            <p className="text-lg sm:text-xl font-medium text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Tech Stack Grid using public/icon PNG images */}
          <div className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.id}
                  className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white dark:bg-[#141022] border border-zinc-200/80 dark:border-zinc-800/80 hover:border-[#ff2b85] dark:hover:border-[#ff2b85] shadow-sm hover:shadow-md transition-all duration-200 group cursor-default"
                >
                  <div className="relative w-12 h-12 flex items-center justify-center p-1 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 group-hover:scale-110 transition-transform duration-200">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={44}
                      height={44}
                      className="object-contain max-h-11 max-w-11"
                    />
                  </div>
                  <span className="mt-3 text-sm font-extrabold text-zinc-800 dark:text-zinc-200 group-hover:text-[#ff2b85] dark:group-hover:text-[#ff2b85] transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
