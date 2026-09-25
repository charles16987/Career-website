import React from 'react';
import {
  Calendar,
  MessageSquare,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { MagneticButton } from './MagneticButton';

interface FinalCTASectionProps {
  onOpenBooking: () => void;
  onOpenMessage: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onOpenBooking,
  onOpenMessage,
}) => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#321C04] text-[#FFF9F2] py-28 sm:py-36 px-6 sm:px-12 lg:px-20 relative overflow-hidden scroll-mt-20"
    >
      {/* Decorative ambient subtle circle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F6E4CF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Content */}
        <div>
          {/* Heading - 0ms delay */}
          <div
            className={`transition-all duration-700 ease-out delay-0 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D9C4AA] mb-4 block">
              Begin Your Conversation
            </span>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFF9F2] leading-tight mb-6 text-balance">
              Your next career move starts with{' '}
              <span className="font-editorial italic font-normal text-[#F6E4CF] block sm:inline">
                clarity.
              </span>
            </h2>
          </div>

          {/* Description - 100ms delay */}
          <p
            className={`text-base sm:text-xl text-[#D9C4AA]/90 max-w-2xl mx-auto leading-relaxed mb-10 text-balance transition-all duration-700 ease-out delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            You don't have to figure everything out alone. Get a practical
            conversation about your career, your options and your next step.
          </p>

          {/* Action Buttons (CTA) - 350ms delay with Magnetic Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 ease-out delay-350 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <MagneticButton
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FFF9F2] text-[#321C04] rounded-full font-semibold text-base hover:bg-white active:scale-[0.98] transition-colors duration-200 shadow-xl cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#321C04]" />
              <span>Book Your Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#321C04] transition-transform duration-300 group-hover:translate-x-1.5" />
            </MagneticButton>

            <MagneticButton
              onClick={onOpenMessage}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF9F2] border border-white/20 font-medium text-base backdrop-blur-xs transition-colors duration-200 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#F6E4CF]" />
              <span>Send a Message</span>
            </MagneticButton>
          </div>

          {/* Contact Direct Channels (Cards) - 200ms delay */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto pt-10 border-t border-white/10 text-left transition-all duration-700 ease-out delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Email */}
            <a
              href="mailto:hello@careerdrift.com"
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F6E4CF] group-hover:bg-[#F6E4CF] group-hover:text-[#321C04] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#D9C4AA]">Email Us</p>
                <p className="text-sm font-semibold text-[#FFF9F2] group-hover:text-[#F6E4CF] transition-colors">hello@careerdrift.com</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F6E4CF] group-hover:bg-[#F6E4CF] group-hover:text-[#321C04] transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#D9C4AA]">WhatsApp</p>
                <p className="text-sm font-semibold text-[#FFF9F2] group-hover:text-[#F6E4CF] transition-colors">+91 98765 43210</p>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div
            className={`flex items-center justify-center gap-4 mt-10 transition-all duration-700 ease-out delay-300 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CareerDrift on LinkedIn"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#FFF9F2] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CareerDrift on Twitter"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#FFF9F2] transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CareerDrift on Instagram"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#FFF9F2] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

