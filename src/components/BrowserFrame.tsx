'use client';

import { ReactNode } from 'react';

interface BrowserFrameProps {
  children: ReactNode;
  className?: string;
}

export default function BrowserFrame({ children, className = '' }: BrowserFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* THE GLOW EFFECT (Behind the window) */}
      <div 
        className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-70 dark:opacity-50 pointer-events-none" 
        aria-hidden="true"
      />
      
      {/* THE BROWSER WINDOW */}
      <div className="relative rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden">
        
        {/* Window Header (The Dots) */}
        <div className="h-8 md:h-10 bg-neutral-100 dark:bg-neutral-800/50 border-b border-black/5 dark:border-white/5 flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          
          <div className="ml-4 flex-1 max-w-xs h-5 rounded bg-black/5 dark:bg-white/5 hidden sm:block" />
        </div>

        {/* Video Content Goes Here */}
        <div className="relative w-full">
          {children}
        </div>
      </div>
    </div>
  );
}