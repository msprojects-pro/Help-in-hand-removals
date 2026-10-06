import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Home,
  PackageCheck,
  Truck,
  Armchair,
  Trash2,
  ArrowUpDown,
  ArrowRight,
  Check,
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  formValue: string;
  category: 'moves' | 'collections';
  description: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'house-removals',
    number: '01',
    title: 'House Removals',
    formValue: 'House Removals',
    category: 'moves',
    description: 'Professional moving assistance for homes of all sizes.',
    highlights: [
      'Small & large residential moves',
      'Full home moving coordination',
      'Protective padded blankets & straps',
    ],
    icon: Home,
  },
  {
    id: 'packing-services',
    number: '02',
    title: 'Packing Services',
    formValue: 'Packing Services',
    category: 'moves',
    description: 'Careful packing and preparation to help make moving day easier.',
    highlights: [
      'Fragile & glassware protection',
      'Room-by-room organised labelling',
      'Full or partial packing assistance',
    ],
    icon: PackageCheck,
  },
  {
    id: 'a2b-collections',
    number: '03',
    title: 'A2B Collections',
    formValue: 'A2B Collection',
    category: 'collections',
    description: 'Reliable collection and transportation from one location to another.',
    highlights: [
      'Scheduled store & private collections',
      'Direct point-to-point transport',
      'Safe transit across Greater Manchester & UK',
    ],
    icon: Truck,
  },
  {
    id: 'furniture-removal',
    number: '04',
    title: 'Furniture Removal',
    formValue: 'Furniture Removal',
    category: 'collections',
    description: 'Safe handling and transportation of furniture and household items.',
    highlights: [
      'Sofas, wardrobes, beds & dining sets',
      'Careful doorway & staircase navigation',
      'Secure in-van strapping & protection',
    ],
    icon: Armchair,
  },
  {
    id: 'house-clearances',
    number: '05',
    title: 'House Clearances',
    formValue: 'House Clearance',
    category: 'collections',
    description: 'Efficient removal of unwanted household items and belongings.',
    highlights: [
      'Full or single-room property clearances',
      'Respectful, tidy & prompt turnaround',
      'Ideal for end-of-tenancy or probate moves',
    ],
    icon: Trash2,
  },
  {
    id: 'loading-unloading',
    number: '06',
    title: 'Loading & Unloading',
    formValue: 'Loading & Unloading',
    category: 'moves',
    description: 'Experienced assistance with the heavy lifting and moving process.',
    highlights: [
      'Professional moving assistance team',
      'Safe heavy lifting & space optimisation',
      'Support for vans, storage units & containers',
    ],
    icon: ArrowUpDown,
  },
];

interface ServicesProps {
  onSelectService: (serviceValue: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'moves' | 'collections'>('all');

  const filteredServices =
    activeFilter === 'all'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === activeFilter);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5F5F5] text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold tracking-wider text-[#0A0A0A] border-l-2 border-[#FCC803] pl-3">
              OUR REMOVAL & COLLECTION CAPABILITIES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A]">
              Removal Services Built Around You
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Help in Hands Removers handles every house move, packing task and A2B collection professionally, carefully and efficiently—whether you are moving a single piece of furniture or an entire family home.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="group"
            aria-label="Filter services by category"
            className="inline-flex items-center gap-1 p-1.5 bg-neutral-200/80 rounded-lg self-start md:self-auto"
          >
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#0A0A0A] text-[#FCC803] shadow-sm'
                  : 'text-neutral-700 hover:text-[#0A0A0A]'
              }`}
            >
              All Services (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('moves')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'moves'
                  ? 'bg-[#0A0A0A] text-[#FCC803] shadow-sm'
                  : 'text-neutral-700 hover:text-[#0A0A0A]'
              }`}
            >
              Moving & Packing
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('collections')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'collections'
                  ? 'bg-[#0A0A0A] text-[#FCC803] shadow-sm'
                  : 'text-neutral-700 hover:text-[#0A0A0A]'
              }`}
            >
              Collections & Clearances
            </button>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group bg-white rounded-xl p-7 border border-neutral-200 hover:border-[#0A0A0A] transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top Row: Icon & Editorial Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#0A0A0A] text-[#FCC803] flex items-center justify-center group-hover:bg-[#FCC803] group-hover:text-[#0A0A0A] transition-colors duration-150">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono tabular-nums text-sm font-bold text-neutral-400 group-hover:text-[#0A0A0A] transition-colors">
                      {service.number}.
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Inclusions */}
                  <ul className="space-y-2 mb-7 border-t border-neutral-100 pt-5">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700"
                      >
                        <Check className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  onClick={() => onSelectService(service.formValue)}
                  className="w-full py-3 px-4 rounded-lg bg-[#F5F5F5] group-hover:bg-[#FCC803] text-[#0A0A0A] font-display font-bold text-sm inline-flex items-center justify-between transition-colors duration-150 cursor-pointer whitespace-nowrap"
                >
                  <span>Enquire About {service.title}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                </button>
              </motion.article>
            );
          })}
        </div>

        {/* Additional Capabilities Strip (Small & Large Removals, Home Moving Services, Professional Moving Assistance) */}
        <div className="mt-10 bg-[#0A0A0A] text-white rounded-xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">
              Small & Large Removals • Home Moving Services • Professional Moving Assistance
            </h3>
            <p className="text-sm text-neutral-300">
              Need a tailored moving package in Ashton-under-Lyne or anywhere across Greater Manchester? We adapt our crew and van capacity to suit your exact move.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('Small & Large Removals')}
            className="bg-[#FCC803] text-[#0A0A0A] font-display font-bold text-sm px-6 py-3.5 rounded-lg hover:bg-[#e5b500] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request a Tailored Quote
          </button>
        </div>
      </div>
    </section>
  );
};
