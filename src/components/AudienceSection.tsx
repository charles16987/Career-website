import React from 'react';
import {
  GraduationCap,
  Award,
  Target,
  TrendingUp,
  Shuffle,
  Laptop,
  ArrowRight,
} from 'lucide-react';
import audienceBgImage from '../assets/images/audience_career_studio_1790314286260.jpg';
import { useInView } from '../hooks/useInView';

interface AudienceSectionProps {
  onSelectAudience: (audience: string) => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({
  onSelectAudience,
}) => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const audiences = [
    {
      title: 'Students',
      description: 'Not sure which career path or skills to choose?',
      icon: GraduationCap,
    },
    {
      title: 'Fresh Graduates',
      description: 'Need help moving from education into your first job?',
      icon: Award,
    },
    {
      title: 'Job Seekers',
      description: 'Applying everywhere but struggling to get interviews?',
      icon: Target,
    },
    {
      title: 'Working Professionals',
      description: 'Want to grow, switch roles or move into a better opportunity?',
      icon: TrendingUp,
    },
    {
      title: 'Career Changers',
      description: 'Thinking about moving into a completely different field?',
      icon: Shuffle,
    },
    {
      title: 'Freelancers',
      description: 'Want to build a stronger freelance career and find better opportunities?',
      icon: Laptop,
    },
  ];

  return (
    <section
      id="career-paths"
      ref={ref}
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 overflow-hidden bg-[#F6E4CF] scroll-mt-20"
    >
      {/* Visual Background with Calm Studio Photography */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply">
        <img
          src={audienceBgImage}
          alt="Warm minimalist consultation lounge background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          {/* Heading - 0ms delay */}
          <div
            className={`transition-all duration-700 ease-out delay-0 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-xs uppercase tracking-widest font-semibold text-[#321C04]/60 mb-3 block">
              Who This Is For
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#321C04] leading-tight text-balance">
              Not sure what's next?{' '}
              <span className="font-editorial italic font-normal text-[#321C04]">
                Start here.
              </span>
            </h2>
          </div>

          {/* Description - 100ms delay */}
          <p
            className={`mt-4 text-base sm:text-lg text-[#321C04]/75 max-w-xl leading-relaxed transition-all duration-700 ease-out delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Wherever you are in your professional journey, you don't need to navigate the uncertainty by yourself.
          </p>
        </div>

        {/* Audience Cards Grid - 200ms delay */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                onClick={() => onSelectAudience(item.title)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectAudience(item.title);
                  }
                }}
                tabIndex={0}
                role="button"
                className={`group relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-[#321C04]/10 shadow-xs hover:shadow-xl hover:-translate-y-2 hover:bg-white transition-all duration-300 cursor-pointer flex flex-col justify-between text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#321C04] ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 70}ms` }}
              >
                <div>
                  {/* Top: Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#F6E4CF] flex items-center justify-center text-[#321C04] mb-6 group-hover:bg-[#321C04] group-hover:text-[#FFF9F2] transition-colors">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#321C04] mb-2.5 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#321C04]/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Arrow Indicator */}
                <div className="mt-8 pt-4 border-t border-[#321C04]/10 flex items-center justify-between text-xs font-semibold text-[#321C04]">
                  <span>Explore guidance for {item.title.toLowerCase()}</span>
                  <div className="w-7 h-7 rounded-full bg-[#F6E4CF] flex items-center justify-center group-hover:bg-[#321C04] group-hover:text-[#FFF9F2] transition-all">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
