import React, { useEffect, useState } from 'react';
import { ArrowDown, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import heroBgImage from '../assets/images/hero_career_drift_1790314273961.jpg';
import { MagneticButton } from './MagneticButton';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
  isReady?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onExploreServices,
  isReady = true,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => setMounted(true), 150);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden">
      {/* Background Image Container with Fallback */}
      <div className="absolute inset-0 bg-[#321C04]">
        <img
          src={heroBgImage}
          alt="Calm, sunlit modern architectural studio desk"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"
        />
        {/* Mandated black overlay */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Measured gradient scrim for WCAG AA text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
      </div>

      {/* Content Container - Bottom Aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pb-16 sm:pb-24 pt-40">
        <div className="max-w-4xl">
          {/* Trust kicker */}
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#FFF9F2] mb-6 transition-all duration-700 ease-out ${
              mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-3'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F6E4CF]" />
            <span className="tracking-wide">Calm, 1-on-1 Guidance for Critical Career Moves</span>
          </div>

          {/* Staggered Heading */}
          <h1 className="text-[#FFF9F2] font-semibold tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[96px] leading-[1.03] mb-6 text-balance overflow-hidden">
            {/* 1: "Your career deserves" appears first */}
            <span
              className={`block transition-all duration-700 ease-out ${
                mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Your career deserves
            </span>

            {/* 2: "more than guesswork" slides upward afterward */}
            <span
              className={`font-editorial text-[#F6E4CF] font-normal italic block transition-all duration-700 ease-out delay-250 ${
                mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              more than guesswork.
            </span>
          </h1>

          {/* 3: Subtitle appears slightly later */}
          <p
            className={`text-[#FFF9F2]/90 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed max-w-2xl mb-10 text-balance transition-all duration-700 ease-out delay-500 ${
              mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Personalized career consultation to help you understand your options,
            strengthen your skills, and move toward the right opportunity with
            confidence.
          </p>

          {/* 4: Magnetic CTA buttons appear last */}
          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8 transition-all duration-700 ease-out delay-700 ${
              mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <MagneticButton
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFF9F2] text-[#321C04] font-semibold text-base hover:bg-white active:scale-[0.98] transition-colors duration-200 shadow-xl whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#321C04]" />
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#321C04] transition-transform duration-300 group-hover:translate-x-1.5" />
            </MagneticButton>

            <MagneticButton
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF9F2] border border-white/20 font-medium text-base backdrop-blur-xs transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowDown className="w-4 h-4 text-[#FFF9F2]/80 transition-transform duration-300 group-hover:translate-y-1" />
            </MagneticButton>
          </div>

          {/* Small Trust Statement */}
          <div
            className={`flex items-center gap-2 text-xs sm:text-sm text-[#FFF9F2]/75 font-normal tracking-wide transition-all duration-700 ease-out delay-900 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span>Career guidance</span>
            <span className="text-[#F6E4CF]">•</span>
            <span>Resume support</span>
            <span className="text-[#F6E4CF]">•</span>
            <span>Interview preparation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

