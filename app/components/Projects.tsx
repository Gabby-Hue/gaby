'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROJECTS } from '../data/portfolioData';
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = PROJECTS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Projects
          </h2>
          <p className="text-[#ff2b85] font-medium mt-2">
            A showcase of things I&apos;ve built
          </p>
        </div>
      </div>

      {/* Main Project Carousel */}
      <div className="relative bg-white dark:bg-[#141022] rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300">
        
        {/* Previous & Next Navigation Buttons */}
        <div className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 z-20">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center justify-center text-zinc-700 dark:text-zinc-200 hover:text-[#ff2b85] dark:hover:text-[#ff2b85] hover:border-[#ff2b85]/50 transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous Project"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 z-20">
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center justify-center text-zinc-700 dark:text-zinc-200 hover:text-[#ff2b85] dark:hover:text-[#ff2b85] hover:border-[#ff2b85]/50 transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next Project"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Content Card */}
        <div className="flex flex-col gap-8">
          
          {/* Project Preview Image */}
          <div className="relative w-full h-[260px] sm:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 group">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay External Link Button */}
            {currentProject.liveUrl && (
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-2xl flex items-center justify-center hover:scale-110 hover:text-[#ff2b85] transition-all duration-200"
                  aria-label="Visit Live Website"
                >
                  <ExternalLinkIcon className="w-6 h-6" />
                </a>
              </div>
            )}
          </div>

          {/* Project Details Footer */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
                  {currentProject.title}
                </h3>
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#ff2b85] transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
              <p className="text-lg font-semibold text-[#ff2b85]">
                {currentProject.tagline}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
                {currentProject.description}
              </p>
            </div>

            {/* Tech Stack Icons — real PNG logos from public/icon/ */}
            <div className="flex flex-wrap items-center gap-3">
              {currentProject.techIcons.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Carousel Dot Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {PROJECTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#ff2b85]'
                  : 'w-2.5 bg-zinc-300 dark:bg-zinc-800 hover:bg-[#ff2b85]/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
};
