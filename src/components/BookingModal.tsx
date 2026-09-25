import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialAudience?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Career Direction',
  initialAudience = 'Working Professionals',
}) => {
  const [service, setService] = useState(initialService);
  const [audience, setAudience] = useState(initialAudience);
  const [format, setFormat] = useState('45-min Clarity Session');
  const [timeframe, setTimeframe] = useState('This Week');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  // Sync if props change
  React.useEffect(() => {
    if (initialService) setService(initialService);
  }, [initialService]);

  React.useEffect(() => {
    if (initialAudience) setAudience(initialAudience);
  }, [initialAudience]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = 'Please provide your name';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid email required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setNotes('');
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in-down"
    >
      <div
        className="relative w-full max-w-xl bg-[#FFF9F2] text-[#321C04] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#321C04]/10 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          aria-label="Close dialog"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F6E4CF] hover:bg-[#D9C4AA] text-[#321C04] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#F6E4CF] text-[#321C04] mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#321C04] mb-3">
              Consultation Requested
            </h3>
            <p className="text-sm sm:text-base text-[#321C04]/80 leading-relaxed max-w-md mx-auto mb-6">
              Thank you, <span className="font-semibold text-[#321C04]">{name}</span>. We’ve received your request for a <span className="font-semibold">{service}</span> session ({timeframe}). Our senior advisor will email calendar slots to <span className="font-semibold">{email}</span> within 4 hours.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-[#321C04]/10 text-left text-xs space-y-2 mb-8 max-w-sm mx-auto">
              <div className="flex justify-between text-[#321C04]/70">
                <span>Selected Focus:</span>
                <span className="font-semibold text-[#321C04]">{service}</span>
              </div>
              <div className="flex justify-between text-[#321C04]/70">
                <span>Current Stage:</span>
                <span className="font-semibold text-[#321C04]">{audience}</span>
              </div>
              <div className="flex justify-between text-[#321C04]/70">
                <span>Session Type:</span>
                <span className="font-semibold text-[#321C04]">{format}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="px-8 py-3 rounded-full bg-[#321C04] text-[#FFF9F2] font-semibold text-sm hover:bg-[#1F1003] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-8">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#321C04]/60 block mb-1">
                1-on-1 Guidance
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#321C04]">
                Book Your Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#321C04]/70 mt-1">
                No rigid forms or sales pitches. Just calm, thoughtful conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Focus area */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#321C04]/80 mb-1.5">
                  Primary Focus
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#321C04]/15 text-sm text-[#321C04] focus:outline-hidden focus:ring-2 focus:ring-[#321C04]/30"
                >
                  <option value="Career Direction">Career Direction</option>
                  <option value="Resume & CV Review">Resume & CV Review</option>
                  <option value="Interview Preparation">Interview Preparation</option>
                  <option value="LinkedIn Optimization">LinkedIn Optimization</option>
                  <option value="Career Transition">Career Transition</option>
                  <option value="Job Search Strategy">Job Search Strategy</option>
                  <option value="Freelancing Guidance">Freelancing Guidance</option>
                </select>
              </div>

              {/* Current stage */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#321C04]/80 mb-1.5">
                  Current Situation
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Students',
                    'Fresh Graduates',
                    'Job Seekers',
                    'Working Professionals',
                    'Career Changers',
                    'Freelancers',
                  ].map((aud) => (
                    <button
                      key={aud}
                      type="button"
                      onClick={() => setAudience(aud)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border text-left transition-colors truncate ${
                        audience === aud
                          ? 'bg-[#321C04] text-[#FFF9F2] border-[#321C04]'
                          : 'bg-white hover:bg-[#F6E4CF]/50 text-[#321C04] border-[#321C04]/15'
                      }`}
                    >
                      {aud}
                    </button>
                  ))}
                </div>
              </div>

              {/* Format & Timing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#321C04]/80 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Session Length
                  </label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#321C04]/15 text-xs text-[#321C04] focus:outline-hidden"
                  >
                    <option value="45-min Clarity Session">45-min Clarity Session</option>
                    <option value="75-min Deep Strategy Session">75-min Deep Strategy Session</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#321C04]/80 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Preferred Window
                  </label>
                  <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#321C04]/15 text-xs text-[#321C04] focus:outline-hidden"
                  >
                    <option value="Next 48 Hours">Next 48 Hours</option>
                    <option value="This Week">This Week</option>
                    <option value="Next Week">Next Week</option>
                    <option value="Flexible / Weekend">Flexible / Weekend</option>
                  </select>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#321C04]/80 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    className={`w-full px-3.5 py-2 rounded-xl bg-white border text-sm text-[#321C04] focus:outline-hidden focus:ring-2 focus:ring-[#321C04]/30 ${
                      errors.name ? 'border-red-500' : 'border-[#321C04]/15'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#321C04]/80 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    className={`w-full px-3.5 py-2 rounded-xl bg-white border text-sm text-[#321C04] focus:outline-hidden focus:ring-2 focus:ring-[#321C04]/30 ${
                      errors.email ? 'border-red-500' : 'border-[#321C04]/15'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Note / Context */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#321C04]/80 mb-1.5">
                  Anything specific you'd like us to know? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Wanting to shift from teaching into tech writing, feeling stuck on how to translate experience..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#321C04]/15 text-sm text-[#321C04] focus:outline-hidden focus:ring-2 focus:ring-[#321C04]/30 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#321C04] text-[#FFF9F2] font-semibold text-sm hover:bg-[#1F1003] active:scale-[0.99] transition-all duration-200 shadow-md cursor-pointer"
                >
                  <span>Request Consultation Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
