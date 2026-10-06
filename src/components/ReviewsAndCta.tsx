import React from 'react';
import { motion } from 'motion/react';
import { Star, Phone, ArrowRight, Award, CheckCircle } from 'lucide-react';

interface ReviewsAndCtaProps {
  onGetQuote: () => void;
}

const TESTIMONIALS = [
  {
    id: 'review-1',
    serviceType: 'Full House Removal & Packing',
    quote:
      'From the initial quote through to unloading the final boxes at our new address, the team was punctual, polite and remarkably careful with our furniture. Everything was wrapped and secured properly, making moving day completely stress-free.',
    attribution: 'Verified Residential Move Customer',
    location: 'Ashton-under-Lyne',
  },
  {
    id: 'review-2',
    serviceType: 'A2B Furniture Collection & Delivery',
    quote:
      'Booked Help in Hands Removers for an A2B collection of large household furniture items. Communication was clear, collection and delivery arrived right on time, and the crew handled awkward staircases with zero fuss.',
    attribution: 'Verified A2B Collection Customer',
    location: 'Greater Manchester',
  },
  {
    id: 'review-3',
    serviceType: 'Home Moving & Loading Assistance',
    quote:
      'High-standard service from start to finish. The movers worked tirelessly, protected all doorways and fragile items, and placed every piece of furniture exactly where we needed it. Easy to see why they are 100% recommended.',
    attribution: 'Verified Home Moving Customer',
    location: 'Tameside, UK',
  },
];

export const ReviewsAndCta: React.FC<ReviewsAndCtaProps> = ({ onGetQuote }) => {
  return (
    <>
      {/* REVIEWS / SOCIAL PROOF SECTION */}
      <section id="reviews" className="py-20 md:py-28 bg-[#F5F5F5] text-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Aggregate Rating Banner */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-bold tracking-wider text-[#0A0A0A] border-l-2 border-[#FCC803] pl-3">
                CUSTOMER REPUTATION & SOCIAL PROOF
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A]">
                Trusted By Our Customers
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                Consistent care, punctuality and attention to detail have earned Help in Hands Removers a 100% recommendation record across 246 reviews.
              </p>
            </div>

            {/* Prominent Rating Summary Block */}
            <div className="bg-[#0A0A0A] text-white rounded-xl p-6 sm:px-8 sm:py-6 border border-neutral-800 flex flex-wrap items-center gap-6 sm:gap-8 shrink-0">
              <div>
                <div
                  className="text-[#FCC803] text-xl tracking-widest mb-1"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
                <div className="font-display font-extrabold text-xl sm:text-2xl text-white">
                  100% Recommended
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  Three Best Rated 2024–2025 Winner
                </div>
              </div>

              <div className="border-l border-white/15 pl-6 sm:pl-8">
                <div className="font-mono tabular-nums text-3xl sm:text-4xl font-extrabold text-[#FCC803]">
                  246
                </div>
                <div className="font-display font-bold text-sm text-white">
                  Reviews
                </div>
                <div className="text-xs text-neutral-400">
                  Verified Feedback
                </div>
              </div>
            </div>
          </div>

          {/* 3 Realistic Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-white rounded-xl p-7 border border-neutral-200 flex flex-col justify-between"
              >
                <div>
                  {/* Stars & Service Kicker */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-[#0A0A0A]" aria-label="5 stars">
                      <Star className="w-4 h-4 fill-[#FCC803] text-[#FCC803]" />
                      <Star className="w-4 h-4 fill-[#FCC803] text-[#FCC803]" />
                      <Star className="w-4 h-4 fill-[#FCC803] text-[#FCC803]" />
                      <Star className="w-4 h-4 fill-[#FCC803] text-[#FCC803]" />
                      <Star className="w-4 h-4 fill-[#FCC803] text-[#FCC803]" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-500">
                      {item.serviceType}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-neutral-800 text-sm sm:text-base leading-relaxed mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Attribution Footer */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
                  <div className="font-semibold text-[#0A0A0A] flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0A0A0A]" />
                    <span>{item.attribution}</span>
                  </div>
                  <span>{item.location}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FULL-WIDTH CTA SECTION */}
      <section className="py-16 md:py-24 bg-[#0A0A0A] text-white border-y border-[#FCC803]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#171717] border border-[#FCC803]/40 rounded-2xl p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#FCC803]">
                <Award className="w-4 h-4" />
                <span>FULLY INSURED • THREE BEST RATED 2024–2025</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Planning Your Move?{' '}
                <span className="text-[#FCC803]">Let&apos;s Make It Easy.</span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                Get in touch with Help in Hands Removers today for professional removal, packing and collection services.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={onGetQuote}
                className="inline-flex items-center justify-center gap-2.5 bg-[#FCC803] text-[#0A0A0A] font-display font-extrabold text-sm sm:text-base px-7 py-4 rounded-lg hover:bg-[#e5b500] transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="tel:+447309684126"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0A0A0A] text-white border border-white/20 hover:border-[#FCC803] hover:text-[#FCC803] font-display font-bold text-sm sm:text-base px-7 py-4 rounded-lg transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#FCC803]" />
                <span className="font-mono tabular-nums">CALL 07309 684126</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
