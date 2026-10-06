/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutAndProcess } from './components/AboutAndProcess';
import { ReviewsAndCta } from './components/ReviewsAndCta';
import { ContactAndFooter } from './components/ContactAndFooter';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('House Removals');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      <Navbar onRequestQuote={() => scrollToContact()} />
      <main className="flex-grow">
        <Hero onGetQuote={() => scrollToContact()} />
        <Services onSelectService={(service) => scrollToContact(service)} />
        <WhyChooseUs />
        <AboutAndProcess onGetQuote={() => scrollToContact()} />
        <ReviewsAndCta onGetQuote={() => scrollToContact()} />
        <ContactAndFooter selectedService={selectedService} />
      </main>
    </div>
  );
}
