import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Career Paths', href: '#career-paths' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsOpen(false);
    if (href === '#' || href === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 90; // Offset for floating pill navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2.5rem)] max-w-xl">
      {/* Floating Pill Bar */}
      <div
        className={`relative flex items-center justify-between px-6 py-3.5 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-black/5 transition-all duration-300 ${
          scrolled ? 'shadow-xl bg-white' : ''
        }`}
      >
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => handleNavClick('#', e)}
          className="text-lg sm:text-xl font-bold tracking-tight text-[#321C04] hover:opacity-90 transition-opacity select-none cursor-pointer"
        >
          CareerDrift<span className="text-[#D9C4AA]">.</span>
        </a>

        {/* Desktop Quick Nav */}
        <div className="hidden md:flex items-center gap-5 text-xs tracking-wide uppercase font-medium text-[#321C04]/75">
          <a
            href="#services"
            onClick={(e) => handleNavClick('#services', e)}
            className="hover:text-[#321C04] transition-colors cursor-pointer"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => handleNavClick('#how-it-works', e)}
            className="hover:text-[#321C04] transition-colors cursor-pointer"
          >
            Process
          </a>
          <a
            href="#career-paths"
            onClick={(e) => handleNavClick('#career-paths', e)}
            className="hover:text-[#321C04] transition-colors cursor-pointer"
          >
            For Who
          </a>
        </div>

        {/* Right side: Book CTA + Animated Hamburger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#321C04] text-[#FFF9F2] hover:bg-[#1F1003] transition-colors whitespace-nowrap"
          >
            Book Call
          </button>

          {/* Animated Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="relative w-8 h-8 flex flex-col items-center justify-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#321C04]/30 rounded-full"
          >
            <span
              className={`block w-5 h-0.5 bg-[#321C04] rounded-full transition-transform duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                isOpen ? 'rotate-45 translate-y-[3px]' : '-translate-y-1'
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#321C04] rounded-full transition-transform duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                isOpen ? '-rotate-45 -translate-y-[1px]' : 'translate-y-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Animated Dropdown Menu */}
      <div
        className={`mt-2 bg-white/95 backdrop-blur-md rounded-3xl shadow-xl border border-black/5 p-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-3 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="w-full text-left px-4 py-3 rounded-2xl text-sm font-medium text-[#321C04] hover:bg-[#F6E4CF]/50 transition-colors flex items-center justify-between group"
            >
              <span>{item.label}</span>
              <span className="text-[#321C04]/30 group-hover:text-[#321C04] group-hover:translate-x-1 transition-all text-xs">
                →
              </span>
            </button>
          ))}
          <div className="pt-2 mt-1 border-t border-black/5">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-2xl bg-[#321C04] text-[#FFF9F2] text-sm font-medium hover:bg-[#1F1003] transition-colors text-center"
            >
              Book a Consultation
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
