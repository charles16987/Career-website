import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MessageModal: React.FC<MessageModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid email required';
    if (!message.trim()) newErrors.message = 'Please write a brief message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSent(true);
  };

  const handleClose = () => {
    setSent(false);
    setName('');
    setEmail('');
    setMessage('');
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
        className="relative w-full max-w-lg bg-[#FFF9F2] text-[#321C04] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#321C04]/10 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close dialog"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F6E4CF] hover:bg-[#D9C4AA] text-[#321C04] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {sent ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[#F6E4CF] text-[#321C04] mx-auto flex items-center justify-center mb-5">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-[#321C04] mb-2">
              Message Received
            </h3>
            <p className="text-sm text-[#321C04]/80 leading-relaxed max-w-sm mx-auto mb-6">
              Thank you for reaching out. We will read your note and respond back to{' '}
              <span className="font-semibold text-[#321C04]">{email}</span> within 24 hours.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2.5 rounded-full bg-[#321C04] text-[#FFF9F2] font-semibold text-xs hover:bg-[#1F1003] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-8">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#321C04]/60 block mb-1">
                Direct Inquiry
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-[#321C04]">
                Send a Message
              </h3>
              <p className="text-xs text-[#321C04]/70 mt-1">
                Have a quick question about our consultation sessions or fees? Ask us directly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#321C04]/80 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
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
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#321C04]/80 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
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

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#321C04]/80 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  className={`w-full px-3.5 py-2 rounded-xl bg-white border text-sm text-[#321C04] focus:outline-hidden focus:ring-2 focus:ring-[#321C04]/30 resize-none ${
                    errors.message ? 'border-red-500' : 'border-[#321C04]/15'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#321C04] text-[#FFF9F2] font-semibold text-sm hover:bg-[#1F1003] active:scale-[0.99] transition-all duration-200 shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
