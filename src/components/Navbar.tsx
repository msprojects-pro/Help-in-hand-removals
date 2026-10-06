import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleMobileNav = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-150 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-[#0A0A0A] border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-white hover:text-[#FCC803] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FCC803]"
        >
          Help in Hands Removers
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#FCC803] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FCC803] hover:after:w-full after:transition-all after:duration-150 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onRequestQuote}
            className="hidden sm:inline-flex items-center justify-center bg-[#FCC803] text-[#0A0A0A] font-display font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-lg hover:bg-[#e5b500] active:scale-[0.99] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FCC803]"
          >
            Get a Free Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white hover:text-[#FCC803] hover:bg-white/5 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="lg:hidden bg-[#171717] border-b border-white/10 px-4 pt-3 pb-5 space-y-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleMobileNav(link.href);
              }}
              className="block py-2.5 px-3 text-base font-medium text-neutral-200 hover:text-[#FCC803] hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3 px-4 bg-[#FCC803] text-[#0A0A0A] font-display font-bold text-sm rounded-lg hover:bg-[#e5b500] transition-colors text-center cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
