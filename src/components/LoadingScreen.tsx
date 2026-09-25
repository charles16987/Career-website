import React from 'react';

interface LoadingScreenProps {
  isVisible: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F6E4CF] text-[#321C04] transition-opacity duration-700 ease-out px-6 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isVisible}
    >
      <div className="flex flex-col items-center text-center max-w-md w-full">
        {/* Logo mark */}
        <div className="w-12 h-12 rounded-full border border-[#321C04]/20 flex items-center justify-center mb-6 shadow-xs">
          <div className="w-4 h-4 rounded-full bg-[#321C04]" />
        </div>

        {/* Brand name */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#321C04] mb-3">
          CareerDrift<span className="text-[#321C04]/60">.</span>
        </h1>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-[#321C04]/80 font-medium tracking-wide mb-10">
          Find direction. Build confidence. Move forward.
        </p>

        {/* 3 dots animated loader */}
        <div className="flex items-center justify-center gap-2.5 mb-6" aria-label="Loading">
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#321C04] animate-pulse"
            style={{ animationDuration: '1.2s', animationDelay: '0ms' }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#321C04] animate-pulse"
            style={{ animationDuration: '1.2s', animationDelay: '200ms' }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#321C04] animate-pulse"
            style={{ animationDuration: '1.2s', animationDelay: '400ms' }}
          />
        </div>

        {/* Status text */}
        <p className="text-xs text-[#321C04]/70 tracking-widest uppercase font-medium">
          Preparing your career path...
        </p>
      </div>
    </div>
  );
};
