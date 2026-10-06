import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Phone, ArrowRight, Package, Truck } from 'lucide-react';

interface AboutAndProcessProps {
  onGetQuote: () => void;
}

const ABOUT_HIGHLIGHTS = [
  'Fully insured',
  'Professional service',
  'Careful handling',
  'Reliable collection',
  'Packing assistance',
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: '01 — Get In Touch',
    shortTitle: 'Get In Touch',
    description: 'Tell us what you need moved or collected.',
  },
  {
    number: '02',
    title: '02 — Get Your Quote',
    shortTitle: 'Get Your Quote',
    description: 'Receive a clear quote based on your requirements.',
  },
  {
    number: '03',
    title: '03 — We Handle The Move',
    shortTitle: 'We Handle The Move',
    description: 'Our team takes care of the loading, transportation and handling.',
  },
  {
    number: '04',
    title: '04 — Move Complete',
    shortTitle: 'Move Complete',
    description: 'Your belongings arrive safely at their destination.',
  },
];

export const AboutAndProcess: React.FC<AboutAndProcessProps> = ({ onGetQuote }) => {
  const [aboutImgError, setAboutImgError] = useState(false);
  const [vanImgError, setVanImgError] = useState(false);

  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="py-20 md:py-28 bg-white text-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Side: Professional Moving & Packing Photography */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6 space-y-4"
            >
              <div className="rounded-xl overflow-hidden border border-neutral-200 bg-[#171717] shadow-lg">
                <div className="aspect-[4/3] relative overflow-hidden">
                  {!aboutImgError ? (
                    <img
                      src="/src/assets/images/about_packing_service_1791297868152.jpg"
                      alt="Help in Hands Removers specialist carefully wrapping furniture and packing moving boxes inside a British home"
                      referrerPolicy="no-referrer"
                      onError={() => setAboutImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#171717] flex items-center justify-center">
                      <Package className="w-16 h-16 text-[#FCC803]" />
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-5 bg-[#0A0A0A] text-white flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display font-bold text-sm sm:text-base text-white">
                      Dedicated Packing & Careful Handling
                    </p>
                    <p className="text-xs text-neutral-400">
                      Every item wrapped, secured and protected for transit
                    </p>
                  </div>
                  <span className="font-mono tabular-nums text-xs font-bold text-[#FCC803] shrink-0">
                    ASHTON-UNDER-LYNE
                  </span>
                </div>
              </div>

              {/* Secondary Visual Strip showing A2B Collection Van */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-[#F5F5F5] border border-neutral-200 rounded-xl p-4">
                <div className="sm:col-span-5 aspect-[16/10] rounded-lg overflow-hidden bg-[#171717]">
                  {!vanImgError ? (
                    <img
                      src="/src/assets/images/a2b_collection_van_1791297882714.jpg"
                      alt="Help in Hands Removers Luton box van ready for A2B collection and house removals"
                      referrerPolicy="no-referrer"
                      onError={() => setVanImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Truck className="w-8 h-8 text-[#FCC803]" />
                    </div>
                  )}
                </div>
                <div className="sm:col-span-7 space-y-1">
                  <div className="text-xs font-bold text-[#0A0A0A] tracking-wide">
                    EQUIPPED FOR SMALL & LARGE MOVES
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Clean, well-maintained removal vans fitted with protective blankets, ties and heavy-duty trolleys for safe loading and A2B collections.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: About Copy & 5 Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="text-xs font-bold tracking-wider text-[#0A0A0A] border-l-2 border-[#FCC803] pl-3">
                ABOUT HELP IN HANDS REMOVERS
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.12]">
                Professional Moves. Less Stress.
              </h2>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                Moving can be stressful. Our goal is to make the process straightforward, organised and hassle-free. From packing and loading to transportation and unloading, Help in Hands Removers provides professional support throughout the move.
              </p>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Based in Ashton-under-Lyne, we have built our reputation on punctuality, respectful care for our customers&apos; homes, and clear communication from initial enquiry through to final placement of your furniture.
              </p>

              {/* 5 Required Key Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {ABOUT_HIGHLIGHTS.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3.5 rounded-lg bg-[#F5F5F5] border border-neutral-200/80"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#FCC803] text-[#0A0A0A] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <span className="font-display font-bold text-sm sm:text-base text-[#0A0A0A]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Row */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onGetQuote}
                  className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-[#FCC803] hover:bg-neutral-800 font-display font-bold text-sm px-6 py-3.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Discuss Your Move</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+447309684126"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0A0A0A] hover:text-neutral-700 py-2 px-3"
                >
                  <Phone className="w-4 h-4 text-[#0A0A0A]" />
                  <span className="font-mono tabular-nums">+44 7309 684126</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 md:py-24 bg-[#171717] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="text-xs font-bold tracking-wider text-[#FCC803] border-l-2 border-[#FCC803] pl-3">
              HOW IT WORKS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Simple 4-Step Moving Process
            </h2>
            <p className="text-base text-neutral-300">
              From your first call to the final box unloaded in your new property, we keep every stage clear and well-organised.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                className="bg-[#0A0A0A] border border-white/10 rounded-xl p-7 relative flex flex-col justify-between"
              >
                <div>
                  {/* Yellow Numbered Circle */}
                  <div className="w-12 h-12 rounded-full bg-[#FCC803] text-[#0A0A0A] font-mono tabular-nums font-extrabold text-base flex items-center justify-center mb-6 shadow-md">
                    {step.number}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span>Step {step.number} of 04</span>
                  <span className="text-[#FCC803] font-semibold">{step.shortTitle}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
