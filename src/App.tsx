import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ConsultationSection } from './components/ConsultationSection';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { AudienceSection } from './components/AudienceSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MessageModal } from './components/MessageModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Career Direction');
  const [selectedAudience, setSelectedAudience] = useState('Working Professionals');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenBooking = (service?: string, audience?: string) => {
    if (service) setSelectedService(service);
    if (audience) setSelectedAudience(audience);
    setIsBookingOpen(true);
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      const navOffset = 90;
      const elementPosition = servicesEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF9F2] text-[#321C04] overflow-x-clip selection:bg-[#F6E4CF]">
      {/* Initial Loading Screen */}
      <LoadingScreen isVisible={loading} />

      {/* Main Website - smoothly fades in when loading completes */}
      <div
        className={`transition-opacity duration-700 ease-out ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Subtle viewport top scroll progress bar */}
        <ScrollProgressBar />

        {/* Floating Navigation Bar */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        <main>
          {/* Section 1: Hero */}
          <HeroSection
            onOpenBooking={() => handleOpenBooking()}
            onExploreServices={handleExploreServices}
            isReady={!loading}
          />

          {/* Section 2: Career Consultation */}
          <ConsultationSection
            onOpenBooking={() => handleOpenBooking()}
          />

          {/* Section 3: Services */}
          <ServicesSection
            onSelectService={(service) => handleOpenBooking(service)}
          />

          {/* Section 4: How It Works */}
          <HowItWorksSection />

          {/* Section 5: Who This Is For */}
          <AudienceSection
            onSelectAudience={(aud) => handleOpenBooking(undefined, aud)}
          />

          {/* Common FAQ Accordion */}
          <FAQSection />

          {/* Section 6: Final CTA / Contact */}
          <FinalCTASection
            onOpenBooking={() => handleOpenBooking()}
            onOpenMessage={() => setIsMessageOpen(true)}
          />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Working Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
        initialAudience={selectedAudience}
      />

      <MessageModal
        isOpen={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
      />
    </div>
  );
}
