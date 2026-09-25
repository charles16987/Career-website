import React from 'react';
import {
  Compass,
  FileText,
  MessageCircle,
  Linkedin,
  ArrowRightLeft,
  Search,
  ArrowUpRight,
} from 'lucide-react';
import servicesBgImage from '../assets/images/services_ambient_dark_1790314297647.jpg';
import { useInView } from '../hooks/useInView';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const services = [
    {
      title: 'Career Direction',
      description:
        'Understand your strengths, interests, experience and possible career paths.',
      icon: Compass,
    },
    {
      title: 'Resume & CV Review',
      description:
        'Improve your resume structure, content and positioning for the jobs you want.',
      icon: FileText,
    },
    {
      title: 'Interview Preparation',
      description:
        'Practice common interview questions, improve your answers and build confidence.',
      icon: MessageCircle,
    },
    {
      title: 'LinkedIn Optimization',
      description:
        'Build a stronger professional profile that clearly communicates your experience.',
      icon: Linkedin,
    },
    {
      title: 'Career Transition',
      description:
        'Create a realistic plan for moving from your current role into a new career.',
      icon: ArrowRightLeft,
    },
    {
      title: 'Job Search Strategy',
      description:
        'Learn how to find relevant opportunities and organize your application process.',
      icon: Search,
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-[#321C04] text-[#FFF9F2] py-28 sm:py-36 px-6 sm:px-12 lg:px-20 overflow-hidden scroll-mt-20"
    >
      {/* Subtle Ambient Background Image */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-luminosity">
        <img
          src={servicesBgImage}
          alt="Dark walnut wood architectural backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#321C04] via-transparent to-[#321C04] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          {/* Heading - 0ms delay */}
          <div
            className={`transition-all duration-700 ease-out delay-0 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D9C4AA] mb-3 block">
              Specialized Practice Areas
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FFF9F2] leading-tight text-balance">
              A calmer way to navigate your career.
            </h2>
          </div>

          {/* Description - 100ms delay */}
          <p
            className={`mt-4 text-base sm:text-lg text-[#D9C4AA]/90 max-w-xl leading-relaxed transition-all duration-700 ease-out delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Select a tailored consultation area, or explore how we can blend multiple services into one structured conversation.
          </p>
        </div>

        {/* 6 Service Cards Grid - 200ms delay */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                onClick={() => onSelectService(service.title)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectService(service.title);
                  }
                }}
                tabIndex={0}
                role="button"
                className={`group relative bg-black/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/25 hover:bg-black/35 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 cursor-pointer flex flex-col justify-between text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F6E4CF] ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${200 + index * 60}ms`,
                }}
              >
                <div>
                  {/* Icon & Arrow */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#F6E4CF] group-hover:bg-[#F6E4CF] group-hover:text-[#321C04] transition-colors">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#D9C4AA] group-hover:text-white group-hover:bg-white/15 transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FFF9F2] mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#D9C4AA]/90 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#D9C4AA]/70 group-hover:text-[#F6E4CF] transition-colors">
                  <span>1-on-1 Consultation</span>
                  <span className="font-medium underline underline-offset-4 flex items-center gap-1">
                    <span>Learn details & book</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
