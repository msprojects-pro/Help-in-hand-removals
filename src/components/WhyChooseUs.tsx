import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, CheckCircle2, ThumbsUp } from 'lucide-react';

const TRUST_POINTS = [
  {
    title: 'Fully Insured',
    description:
      'Your belongings are handled by a fully insured professional service.',
    icon: ShieldCheck,
    meta: 'Complete Peace of Mind',
  },
  {
    title: 'Award Winning',
    description:
      'Three Best Rated 2024–2025 award-winning company.',
    icon: Award,
    meta: 'Verified Local Excellence',
  },
  {
    title: 'Professional Standards',
    description:
      'High-standard removal and packing services with attention to detail.',
    icon: CheckCircle2,
    meta: 'Trained & Careful Crew',
  },
  {
    title: 'Highly Recommended',
    description:
      '100% recommendation with 246 reviews.',
    icon: ThumbsUp,
    meta: 'Consistent 5-Star Service',
  },
];

const STATS = [
  {
    value: '100%',
    label: 'Recommended',
    context: 'Across verified customer feedback',
  },
  {
    value: '246+',
    label: 'Reviews',
    context: 'From local homeowners & A2B clients',
  },
  {
    value: '2024–2025',
    label: 'Award Winning',
    context: 'Three Best Rated Removals Company',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-28 bg-[#0A0A0A] text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#FCC803] border-l-2 border-[#FCC803] pl-3">
            WHY CHOOSE HELP IN HANDS REMOVERS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            A Moving Service You Can Trust
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            When entrusting your home contents and furniture to a removal company, reliability and protection come first. Here is why households across Ashton-under-Lyne choose our team.
          </p>
        </div>

        {/* Large Visual Statistics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="bg-[#171717] border border-white/10 rounded-xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="w-10 h-1 bg-[#FCC803] mb-5" />
              <div>
                <div className="font-mono tabular-nums text-4xl sm:text-5xl font-extrabold text-[#FCC803] tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="font-display text-xl font-bold text-white mb-1">
                  {stat.label}
                </div>
                <p className="text-xs sm:text-sm text-neutral-400">
                  {stat.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Four Core Trust Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="bg-[#171717] border border-white/10 hover:border-[#FCC803]/60 rounded-xl p-6 sm:p-7 transition-colors duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#FCC803]/15 border border-[#FCC803]/30 text-[#FCC803] flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2.5">
                    {point.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-5">
                    {point.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs font-medium text-[#FCC803]">
                  {point.meta}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
