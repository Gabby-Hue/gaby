'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff2b85]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 z-10 relative">
        
        {/* Left Side Header matching reference screenshot 1 */}
        <div className="lg:w-5/12 space-y-4">
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Let&apos;s Talk
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Have a project, idea, or question?
          </p>
          <div className="pt-6 space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
            <p className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff2b85]" />
              <span>Direct Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold text-zinc-800 dark:text-zinc-200 hover:text-[#ff2b85]">{PERSONAL_INFO.email}</a></span>
            </p>
          </div>
        </div>

        {/* Right Side Form Card matching reference screenshot 1 */}
        <div className="w-full lg:w-6/12">
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#151124] border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl space-y-6"
          >
            {/* Email Field */}
            <div className="space-y-2 text-left">
              <label htmlFor="email" className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#ff2b85] focus:border-transparent transition-all"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2 text-left">
              <label htmlFor="message" className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project or inquiry..."
                className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#ff2b85] focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Send Button matching reference screenshot 1 */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 rounded-xl bg-[#ff2b85] hover:bg-[#e01f70] active:scale-[0.99] text-white font-bold text-base shadow-lg shadow-[#ff2b85]/30 hover:shadow-[#ff2b85]/50 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
            >
              {status === 'submitting' ? (
                <span>Sending...</span>
              ) : status === 'success' ? (
                <span>Message Sent!</span>
              ) : (
                <span>Send Message</span>
              )}
            </button>

            {status === 'success' && (
              <div className="p-3 rounded-lg bg-[#ff2b85]/10 text-[#ff2b85] text-xs font-semibold text-center">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};
