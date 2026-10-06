import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  ShieldCheck,
  Award,
  CheckCircle2,
  Send,
  RotateCcw,
} from 'lucide-react';

interface ContactAndFooterProps {
  selectedService: string;
}

const SERVICE_OPTIONS = [
  'House Removals',
  'Home Moving Services',
  'A2B Collection',
  'Furniture Removal',
  'Packing Services',
  'Loading & Unloading',
  'House Clearance',
  'Small & Large Removals',
  'Professional Moving Assistance',
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  movingFrom: string;
  movingTo: string;
  serviceRequired: string;
  message: string;
}

export const ContactAndFooter: React.FC<ContactAndFooterProps> = ({
  selectedService,
}) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    movingFrom: '',
    movingTo: '',
    serviceRequired: selectedService || 'House Removals',
    message: '',
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: selectedService,
      }));
    }
  }, [selectedService]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const phoneRegex = /^[0-9+\s()-]{7,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      setErrorMsg('Please enter a valid UK or contact phone number.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!formData.movingFrom.trim() || !formData.movingTo.trim()) {
      setErrorMsg('Please provide both Moving From and Moving To locations or postcodes.');
      return;
    }

    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    setSubmittedRef(`HIH-${randomDigits}`);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setErrorMsg(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      movingFrom: '',
      movingTo: '',
      serviceRequired: 'House Removals',
      message: '',
    });
  };

  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-28 bg-white text-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Business Information & Direct Contact */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="text-xs font-bold tracking-wider text-[#0A0A0A] border-l-2 border-[#FCC803] pl-3">
                  GET IN TOUCH FOR A FREE QUOTE
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A0A0A]">
                  Request Your Free Moving Quote
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Complete the enquiry form with your moving or collection details, or call us directly for immediate assistance.
                </p>
              </div>

              {/* Direct Contact Card */}
              <div className="bg-[#0A0A0A] text-white rounded-xl p-7 space-y-6 border border-neutral-800">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#FCC803]">
                    Help in Hands Removers
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                    Professional House Movers, Removals & A2B Collection Services
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-white/10">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#FCC803]/15 text-[#FCC803] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-neutral-400">
                        Location
                      </div>
                      <div className="font-display font-bold text-base text-white">
                        Ashton-under-Lyne, United Kingdom
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        Serving Ashton-under-Lyne, Tameside & Greater Manchester
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#FCC803]/15 text-[#FCC803] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-neutral-400">
                        Phone
                      </div>
                      <a
                        href="tel:+447309684126"
                        className="font-mono tabular-nums font-bold text-lg text-[#FCC803] hover:underline"
                      >
                        +44 7309 684126
                      </a>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        Direct line for quotes, bookings & A2B collections
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Highlights inside Contact Card */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#FCC803] shrink-0" />
                    <span>Fully Insured Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#FCC803] shrink-0" />
                    <span>Three Best Rated 24–25</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Frontend-Ready Quote Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#F5F5F5] border border-neutral-200 rounded-xl p-6 sm:p-9">
                {submittedRef ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="bg-white border border-neutral-200 rounded-xl p-8 text-center space-y-5"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#FCC803] text-[#0A0A0A] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <div className="space-y-2">
                      <span className="font-mono tabular-nums text-xs font-bold text-neutral-500">
                        ENQUIRY REFERENCE: {submittedRef}
                      </span>
                      <h3 className="font-display text-2xl font-extrabold text-[#0A0A0A]">
                        Quote Request Received
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto">
                        Thank you, <strong className="text-[#0A0A0A]">{formData.name}</strong>. We have logged your request for{' '}
                        <strong className="text-[#0A0A0A]">{formData.serviceRequired}</strong> from{' '}
                        <strong className="text-[#0A0A0A]">{formData.movingFrom}</strong> to{' '}
                        <strong className="text-[#0A0A0A]">{formData.movingTo}</strong>.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#F5F5F5] text-xs sm:text-sm text-neutral-700">
                      Need an immediate response? Call our team directly on{' '}
                      <a
                        href="tel:+447309684126"
                        className="font-mono tabular-nums font-bold text-[#0A0A0A] underline"
                      >
                        +44 7309 684126
                      </a>
                      .
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-[#FCC803] font-display font-bold text-sm px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Submit Another Quote Request</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                      <h3 className="font-display text-xl font-bold text-[#0A0A0A]">
                        Your Move Details
                      </h3>
                      <span className="text-xs text-neutral-500 font-medium">
                        Free, No-Obligation Quote
                      </span>
                    </div>

                    {errorMsg && (
                      <div
                        role="alert"
                        className="p-3.5 rounded-lg bg-red-50 border border-red-300 text-red-900 text-xs sm:text-sm font-medium"
                      >
                        {errorMsg}
                      </div>
                    )}

                    {/* Row 1: Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="quote-name"
                          className="block text-xs sm:text-sm font-bold text-[#0A0A0A] mb-1.5"
                        >
                          Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="quote-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-[#0A0A0A] text-sm focus:outline-none focus:border-[#0A0A0A] focus:ring-2 focus:ring-[#FCC803]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="quote-phone"
                          className="block text-xs sm:text-sm font-bold text-[#0A0A0A] mb-1.5"
                        >
                          Phone Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="quote-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 07309 684126"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-[#0A0A0A] text-sm font-mono tabular-nums focus:outline-none focus:border-[#0A0A0A] focus:ring-2 focus:ring-[#FCC803]"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Service Required */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="quote-email"
                          className="block text-xs sm:text-sm font-bold text-[#0A0A0A] mb-1.5"
                        >
                          Email <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="quote-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.co.uk"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-[#0A0A0A] text-sm focus:outline-none focus:border-[#0A0A0A] focus:ring-2 focus:ring-[#FCC803]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="quote-service"
                          className="block text-xs sm:text-sm font-bold text-[#0A0A0A] mb-1.5"
                        >
                          Service Required <span className="text-red-600">*</span>
                        </label>
                        <select
                          id="quote-service"
                          name="serviceRequired"
                          value={formData.serviceRequired}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-[#0A0A0A] text-sm font-medium focus:outline-none focus:border-[#0A0A0A] focus:ring-2 focus:ring-[#FCC803]"
                        >
                          {SERVICE_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Moving From & Moving To */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="quote-moving-from"
                          className="block text-xs sm:text-sm font-bold text-[#0A0A0A] mb-1.5"
                        >
                          Moving From <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="quote-moving-from"
                          name="movingFrom"
                          type="text"
                          required
                          value={formData.movingFrom}
                          onChange={handleChange}
                          placeholder="Postcode or town (e.g. OL6, Ashton)"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-[#0A0A0A] text-sm focus:outline-none focus:border-[#0A0A0A] focus:ring-2 focus:ring-[#FCC803]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="quote-moving-to"
                          className="block text-xs sm:text-sm font-bold text-[#0A0A0A] mb-1.5"
                        >
                          Moving To <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="quote-moving-to"
                          name="movingTo"
                          type="text"
                          required
                          value={formData.movingTo}
                          onChange={handleChange}
                          placeholder="Destination postcode or town"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-[#0A0A0A] text-sm focus:outline-none focus:border-[#0A0A0A] focus:ring-2 focus:ring-[#FCC803]"
                        />
                      </div>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label
                        htmlFor="quote-message"
                        className="block text-xs sm:text-sm font-bold text-[#0A0A0A] mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="quote-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your property size, preferred moving date, packing needs, or items to be collected..."
                        className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-[#0A0A0A] text-sm focus:outline-none focus:border-[#0A0A0A] focus:ring-2 focus:ring-[#FCC803]"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-lg bg-[#FCC803] hover:bg-[#e5b500] text-[#0A0A0A] font-display font-extrabold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 transition-colors duration-150 shadow-sm cursor-pointer whitespace-nowrap"
                    >
                      <Send className="w-4 h-4 stroke-[2.5]" />
                      <span>REQUEST A FREE QUOTE</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DARK BLACK FOOTER */}
      <footer className="bg-[#0A0A0A] text-white border-t border-white/10 pb-20 md:pb-12 pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
            <div className="space-y-1.5">
              <div className="font-display text-xl sm:text-2xl font-extrabold text-white">
                Help in Hands Removers
              </div>
              <p className="text-sm text-neutral-400">
                Professional House Removals & Collection Services • Ashton-under-Lyne, UK
              </p>
            </div>

            {/* Footer Navigation Links */}
            <nav
              aria-label="Footer Navigation"
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-neutral-300"
            >
              <a href="#home" className="hover:text-[#FCC803] transition-colors">
                Home
              </a>
              <span className="text-white/20" aria-hidden="true">|</span>
              <a href="#services" className="hover:text-[#FCC803] transition-colors">
                Services
              </a>
              <span className="text-white/20" aria-hidden="true">|</span>
              <a href="#about" className="hover:text-[#FCC803] transition-colors">
                About
              </a>
              <span className="text-white/20" aria-hidden="true">|</span>
              <a href="#reviews" className="hover:text-[#FCC803] transition-colors">
                Reviews
              </a>
              <span className="text-white/20" aria-hidden="true">|</span>
              <a href="#contact" className="hover:text-[#FCC803] transition-colors">
                Contact
              </a>
            </nav>

            {/* Footer Phone */}
            <div>
              <a
                href="tel:+447309684126"
                className="inline-flex items-center gap-2 font-mono tabular-nums font-bold text-base text-[#FCC803] hover:underline"
              >
                <Phone className="w-4 h-4" />
                <span>+44 7309 684126</span>
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <p>© 2026 Help in Hands Removers. All rights reserved.</p>
            <p>
              Three Best Rated 2024–2025 Award Winning • 100% Recommended (246 Reviews)
            </p>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA BAR (Strictly <= 15% viewport height cap combined with compact mobile navbar) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/15 px-3 h-13 flex items-center gap-2.5">
        <a
          href="tel:+447309684126"
          className="flex-1 h-9 rounded-md bg-[#171717] border border-white/20 text-white font-display font-bold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-[#FCC803]" />
          <span className="font-mono tabular-nums">Call 07309 684126</span>
        </a>
        <a
          href="#contact"
          className="flex-1 h-9 rounded-md bg-[#FCC803] text-[#0A0A0A] font-display font-extrabold text-xs inline-flex items-center justify-center whitespace-nowrap"
        >
          Get a Free Quote
        </a>
      </div>
    </>
  );
};
