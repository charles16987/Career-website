import React from 'react';
import {
  Compass,
  FileText,
  MessageCircle,
  Share2,
  ArrowRightLeft,
  Search,
  BookOpen,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { MagneticButton } from './MagneticButton';

interface ConsultationSectionProps {
  onOpenBooking: () => void;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  onOpenBooking,
}) => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const helpItems = [
    { label: 'Career direction', icon: Compass },
    { label: 'Job search strategy', icon: Search },
    { label: 'Resume improvement', icon: FileText },
    { label: 'LinkedIn profile guidance', icon: Share2 },
    { label: 'Interview preparation', icon: MessageCircle },
    { label: 'Skill development planning', icon: BookOpen },
    { label: 'Career transition', icon: ArrowRightLeft },
    { label: 'Freelancing guidance', icon: Briefcase },
  ];

  return (
    <section
      id="consultation"
      ref={ref}
      className="relative bg-[#F6E4CF] text-[#321C04] rounded-t-[25px] -mt-6 z-20 pt-20 sm:pt-28 pb-20 sm:pb-32 px-6 sm:px-12 lg:px-20 transition-all duration-700 ease-out scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Heading at 0ms delay */}
        <div
          className={`max-w-3xl mb-14 sm:mb-20 transition-all duration-700 ease-out delay-0 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-[#321C04]/60 mb-3 block">
            Career Consultation
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#321C04] leading-tight mb-4 text-balance">
            You don't need another complicated career plan.
          </h2>
          <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#321C04]/80 italic">
            You need clarity about what to do next.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Approach - 100ms delay */}
          <div
            className={`lg:col-span-6 flex flex-col justify-between h-full transition-all duration-700 ease-out delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <p className="text-lg sm:text-xl text-[#321C04]/90 leading-relaxed mb-8">
                Career decisions can feel overwhelming when you have too many options and
                not enough clarity. Our consultation helps you understand where you are,
                where you want to go, and which steps can realistically take you there.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#321C04]/10">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#321C04] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-semibold text-[#321C04]">
                      ADHD-Friendly & Cognitive Rest
                    </h4>
                    <p className="text-sm text-[#321C04]/75 mt-0.5 leading-relaxed">
                      Structured into bite-sized priorities. Zero overwhelming 50-page PDFs—just 3 clear actions to focus on next.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#321C04] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-semibold text-[#321C04]">
                      1-on-1 Human Empathy
                    </h4>
                    <p className="text-sm text-[#321C04]/75 mt-0.5 leading-relaxed">
                      No automated generic questionnaires. Real dialogue with seasoned mentors who have navigated career pivots themselves.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiet quote / signature block */}
            <div className="mt-12 p-6 rounded-2xl bg-white/40 border border-[#321C04]/10 backdrop-blur-xs">
              <p className="font-editorial text-xl italic text-[#321C04] mb-2">
                "When mental clutter clears, decisions stop feeling terrifying."
              </p>
              <p className="text-xs uppercase tracking-wider text-[#321C04]/60 font-medium">
                The CareerDrift Philosophy
              </p>
            </div>
          </div>

          {/* Right Column: Rounded Card "What we help with" - 200ms delay for card container */}
          <div
            className={`lg:col-span-6 transition-all duration-700 ease-out delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-[#FFF9F2] rounded-3xl p-8 sm:p-10 shadow-lg border border-[#321C04]/10">
              <h3 className="text-xl sm:text-2xl font-bold text-[#321C04] mb-2 tracking-tight">
                What we help with
              </h3>
              <p className="text-sm text-[#321C04]/70 mb-8">
                Practical, targeted guidance tailored to your exact inflection point.
              </p>

              {/* Help Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                {helpItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-[#321C04]/5 transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-xs ${
                        isInView
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${200 + idx * 40}ms` }}
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#F6E4CF] flex items-center justify-center text-[#321C04] group-hover:bg-[#321C04] group-hover:text-[#FFF9F2] transition-colors shrink-0">
                        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-sm font-medium text-[#321C04]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Card CTA: 350ms delay with Magnetic Button */}
              <div
                className={`transition-all duration-700 ease-out delay-350 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <MagneticButton
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#321C04] text-[#FFF9F2] font-semibold text-base hover:bg-[#1F1003] active:scale-[0.99] transition-colors duration-200 shadow-md cursor-pointer"
                >
                  <span>Talk to a Career Consultant</span>
                  <ArrowRight className="w-4 h-4 text-[#FFF9F2] transition-transform duration-300 group-hover:translate-x-1.5" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

