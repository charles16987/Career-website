import React from 'react';
import { useInView } from '../hooks/useInView';

export const HowItWorksSection: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const steps = [
    {
      number: '01',
      title: 'Understand',
      description:
        'We learn about your current situation, experience, goals and challenges.',
    },
    {
      number: '02',
      title: 'Identify',
      description:
        'We identify possible career paths, skill gaps and opportunities.',
    },
    {
      number: '03',
      title: 'Plan',
      description:
        'We create practical next steps based on your goals.',
    },
    {
      number: '04',
      title: 'Move',
      description:
        'You leave with a clearer direction and an actionable plan.',
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="bg-[#FFF9F2] text-[#321C04] py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-[#321C04]/5 relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          {/* Heading - 0ms delay */}
          <div
            className={`transition-all duration-700 ease-out delay-0 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-xs uppercase tracking-widest font-semibold text-[#321C04]/60 mb-3 block">
              The Consultation Process
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#321C04] leading-tight text-balance">
              One conversation can change your next step.
            </h2>
          </div>

          {/* Description - 100ms delay */}
          <p
            className={`mt-4 text-base sm:text-lg text-[#321C04]/75 max-w-xl leading-relaxed transition-all duration-700 ease-out delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            A calm, four-stage approach designed to reduce anxiety and produce actionable clarity without fatigue.
          </p>
        </div>

        {/* Decorative Horizontal Divider */}
        <div
          className={`relative mb-14 hidden md:block transition-all duration-700 ease-out delay-150 ${
            isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-95'
          }`}
        >
          <div className="h-[1px] w-full bg-[#321C04]/15" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#321C04]" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#321C04]/40" />
        </div>

        {/* 4-Step Grid (Horizontal on Desktop, Vertical on Mobile) - 200ms delay */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col relative transition-all duration-700 ease-out ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 90}ms` }}
            >
              {/* Step Number in Dark Brown */}
              <div className="mb-4">
                <span className="font-editorial text-6xl sm:text-7xl lg:text-8xl text-[#321C04] leading-none select-none tracking-tight block transition-transform duration-300 hover:scale-105">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#321C04] mb-3 tracking-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#321C04]/80 leading-relaxed">
                {step.description}
              </p>

              {/* Mobile separator */}
              {index < steps.length - 1 && (
                <div className="w-12 h-px bg-[#321C04]/15 mt-8 md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
