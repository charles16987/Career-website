import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const Footer: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (href === '#' || href === '') {
      scrollToTop();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer
      ref={ref}
      className="bg-[#1F1003] text-[#D9C4AA] py-16 px-6 sm:px-12 lg:px-20 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div
          className={`transition-all duration-700 ease-out delay-0 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#"
            onClick={(e) => handleLinkClick('#', e)}
            className="text-2xl font-bold tracking-tight text-[#FFF9F2] inline-block mb-2 hover:opacity-90 transition-opacity cursor-pointer"
          >
            CareerDrift<span className="text-[#F6E4CF]">.</span>
          </a>
          <p className="text-sm text-[#D9C4AA]/80 max-w-sm">
            Career guidance for your next chapter.
          </p>
        </div>

        {/* Quick Footer Links - 100ms delay */}
        <div
          className={`flex flex-wrap items-center gap-6 text-xs text-[#D9C4AA]/80 font-medium transition-all duration-700 ease-out delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#services"
            onClick={(e) => handleLinkClick('#services', e)}
            className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => handleLinkClick('#how-it-works', e)}
            className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
          >
            How It Works
          </a>
          <a
            href="#career-paths"
            onClick={(e) => handleLinkClick('#career-paths', e)}
            className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
          >
            Career Paths
          </a>
          <a
            href="#faq"
            onClick={(e) => handleLinkClick('#faq', e)}
            className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick('#contact', e)}
            className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* Copyright & Scroll to top - 200ms delay */}
        <div
          className={`flex items-center gap-4 text-xs text-[#D9C4AA]/60 w-full md:w-auto justify-between md:justify-end pt-4 md:pt-0 border-t border-white/5 md:border-t-0 transition-all duration-700 ease-out delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span>© 2026 CareerDrift. All rights reserved.</span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-[#FFF9F2] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

