import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Award, Star, Truck } from 'lucide-react';

interface HeroProps {
  onGetQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetQuote }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[640px] lg:min-h-[760px] bg-[#0A0A0A] text-white overflow-hidden flex items-center"
    >
      {/* Background Photographic Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <img
            src="/src/assets/images/hero_uk_movers_1791297844269.jpg"
            alt="Professional Help in Hands Removers team loading furniture and boxes into a Luton removal van outside a British home"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center scale-[1.01]"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#171717] via-[#0A0A0A] to-[#1f1a08] flex items-center justify-center">
            <Truck className="w-32 h-32 text-[#FCC803]/15" />
          </div>
        )}
        {/* Multi-layered dark black scrim so white and yellow text remains ultra-readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Primary Value Proposition & Conversion Controls */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 space-y-6"
          >
            {/* Top Kicker & Award Recognition Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold tracking-wider text-[#FCC803] border-l-2 border-[#FCC803] pl-3.5">
              <span>FULLY INSURED • PROFESSIONAL REMOVALS</span>
              <span className="text-white/30" aria-hidden="true">|</span>
              <span className="inline-flex items-center gap-1.5 text-neutral-200 font-medium tracking-normal">
                <Award className="w-4 h-4 text-[#FCC803] shrink-0" />
                <span>Three Best Rated 2024–2025</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] max-w-2xl">
              Moving Made Simple.{' '}
              <span className="text-[#FCC803] block sm:inline">Done With Care.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed max-w-xl font-normal">
              Professional house removals, packing and collection services across Ashton-under-Lyne and surrounding areas.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onGetQuote}
                className="inline-flex items-center justify-center gap-2.5 bg-[#FCC803] text-[#0A0A0A] font-display font-extrabold text-sm sm:text-base px-7 py-4 rounded-lg hover:bg-[#e5b500] active:scale-[0.99] transition-all duration-150 shadow-lg shadow-[#FCC803]/10 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FCC803]"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="tel:+447309684126"
                className="inline-flex items-center justify-center gap-2.5 bg-[#171717]/90 text-white border border-white/20 hover:border-[#FCC803] hover:text-[#FCC803] font-display font-bold text-sm sm:text-base px-7 py-4 rounded-lg transition-all duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FCC803]"
              >
                <Phone className="w-4 h-4 text-[#FCC803]" />
                <span className="font-mono tabular-nums">CALL 07309 684126</span>
              </a>
            </div>

            {/* Trust Indicator Underneath */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-200">
              <div className="flex items-center gap-2 font-medium">
                <span className="text-[#FCC803] tracking-widest" aria-hidden="true">★</span>
                <span className="font-mono tabular-nums font-semibold text-white">100%</span>
                <span>Recommended</span>
                <span className="text-white/40" aria-hidden="true">•</span>
                <span className="font-mono tabular-nums font-semibold text-white">246</span>
                <span>Reviews</span>
              </div>
              <span className="hidden sm:inline text-white/25" aria-hidden="true">|</span>
              <div className="flex items-center gap-2 text-neutral-300 text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 text-[#FCC803] shrink-0" />
                <span>Goods in Transit & Public Liability Insured</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Framed Photographic Showcase & Three Best Rated Seal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5"
          >
            <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#171717] shadow-2xl">
              <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] relative overflow-hidden">
                {!imgError ? (
                  <img
                    src="/src/assets/images/hero_uk_movers_1791297844269.jpg"
                    alt="Help in Hands Removers loading household furniture into a modern removal van in Ashton-under-Lyne"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full bg-[#171717] flex items-center justify-center">
                    <Truck className="w-16 h-16 text-[#FCC803]" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              </div>

              {/* Integrated Award & Local Trust Footer Bar inside Framed Card */}
              <div className="p-4 sm:p-5 bg-[#171717] border-t border-white/10 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-[#FCC803] text-xs font-bold tracking-wide">
                    <Star className="w-3.5 h-3.5 fill-[#FCC803]" />
                    <Star className="w-3.5 h-3.5 fill-[#FCC803]" />
                    <Star className="w-3.5 h-3.5 fill-[#FCC803]" />
                    <span className="ml-1 font-mono tabular-nums">2024–2025</span>
                  </div>
                  <p className="font-display font-bold text-white text-sm sm:text-base">
                    Three Best Rated Award Winner
                  </p>
                  <p className="text-xs text-neutral-400">
                    Ashton-under-Lyne & Greater Manchester Removals
                  </p>
                </div>

                <div className="text-right shrink-0 border-l border-white/10 pl-4">
                  <div className="font-mono tabular-nums text-xl sm:text-2xl font-extrabold text-[#FCC803]">
                    100%
                  </div>
                  <div className="text-xs text-neutral-300 font-medium">
                    246 Reviews
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
