import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const FAQSection: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does a typical 1-on-1 consultation session work?',
      answer:
        'We begin by discussing where you currently are—your background, energy levels, skills, and current frustrations. We then identify realistic options, unpack trade-offs, and outline 2–3 immediate, manageable next steps so you leave with clarity instead of overwhelm.',
    },
    {
      question: 'Is this suitable for ADHD or neurodivergent professionals?',
      answer:
        'Yes, absolutely. CareerDrift is intentionally designed to be calm, low-friction, and ADHD-friendly. We avoid 50-page complex roadmaps, confusing jargon, and rigid structures. Instead, we break choices down into clear, high-signal decisions and provide straightforward, bite-sized summaries.',
    },
    {
      question: 'What if I have no idea what industry or job I want?',
      answer:
        'That is one of the most common reasons people book with us. You do not need to have answers before you arrive. We will help you unpack your natural strengths, work preferences, and energy drainers to identify viable career directions that make sense for you.',
    },
    {
      question: 'How is CareerDrift different from a traditional recruiter?',
      answer:
        'Recruiters work for hiring companies and are incentivized to place candidates into specific open requisitions regardless of fit. CareerDrift is 100% on your side. Our only agenda is helping you gain clarity, negotiate better opportunities, and find sustainable work that fits your life.',
    },
    {
      question: 'Will I receive written summary notes after our call?',
      answer:
        'Yes. Within 24 hours of your consultation, you will receive a clean, 1-page action brief summarizing the key takeaways, recommended focus areas, and tangible next steps so you don’t have to stress about taking exhaustive notes during our conversation.',
    },
  ];

  return (
    <section
      id="faq"
      ref={ref}
      className="bg-[#FFF9F2] text-[#321C04] py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-[#321C04]/5 relative scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          {/* Heading - 0ms delay */}
          <div
            className={`transition-all duration-700 ease-out delay-0 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-xs uppercase tracking-widest font-semibold text-[#321C04]/60 mb-3 block">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#321C04] leading-tight text-balance">
              Everything you need to know.
            </h2>
          </div>

          {/* Description - 100ms delay */}
          <p
            className={`mt-3 text-base text-[#321C04]/75 transition-all duration-700 ease-out delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Straightforward answers to help you feel confident before scheduling.
          </p>
        </div>

        {/* Accordion List - 200ms staggered delay for cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-700 ease-out overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#321C04]/15 shadow-sm'
                    : 'bg-white/60 hover:bg-white border-[#321C04]/5'
                } ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${200 + index * 60}ms`,
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#321C04]/30"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-[#321C04] tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F6E4CF]/60 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#321C04] text-[#FFF9F2]' : 'text-[#321C04]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-sm sm:text-base text-[#321C04]/80 leading-relaxed border-t border-[#321C04]/5 animate-fade-in-down">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
