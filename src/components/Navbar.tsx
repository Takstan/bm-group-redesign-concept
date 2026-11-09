import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0e1013]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 text-white font-display text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded bg-[#c8a261] flex items-center justify-center text-[#0e1013] font-bold text-sm tracking-tighter">
              BM
            </div>
            <span className="group-hover:text-[#c8a261] transition-colors">
              BM GROUP <span className="font-light text-neutral-400">INTERNATIONAL</span>
            </span>
          </a>

          {/* Zone 2: 4–5 nav links, 1–2 word labels, single-line */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-neutral-300">
            <a href="#about" className="hover:text-[#c8a261] transition-colors whitespace-nowrap shrink-0">
              About
            </a>
            <a href="#divisions" className="hover:text-[#c8a261] transition-colors whitespace-nowrap shrink-0">
              Divisions
            </a>
            <a href="#featured-work" className="hover:text-[#c8a261] transition-colors whitespace-nowrap shrink-0">
              Featured Work
            </a>
            <a href="#advantages" className="hover:text-[#c8a261] transition-colors whitespace-nowrap shrink-0">
              The Advantage
            </a>
            <a href="#companies" className="hover:text-[#c8a261] transition-colors whitespace-nowrap shrink-0">
              Our Companies
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c8a261] hover:bg-[#d8a252] text-[#0e1013] text-xs font-semibold tracking-wide transition-all shadow-md hover:shadow-[#c8a261]/20 whitespace-nowrap shrink-0"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#0e1013]/98 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between border-b border-white/10 animate-fadeIn">
          <nav className="flex flex-col space-y-5 text-sm tracking-wider uppercase font-medium text-neutral-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#c8a261]"
            >
              About BM Group
            </a>
            <a
              href="#divisions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#c8a261]"
            >
              Industry Divisions
            </a>
            <a
              href="#featured-work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#c8a261]"
            >
              Featured Work
            </a>
            <a
              href="#advantages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#c8a261]"
            >
              The Advantage
            </a>
            <a
              href="#companies"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#c8a261]"
            >
              Operating Companies
            </a>
            <a
              href="#people"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#c8a261]"
            >
              People & Values
            </a>
          </nav>

          <div className="pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-lg bg-[#c8a261] text-[#0e1013] text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-neutral-500 mt-4">
              Vancouver · Seattle · Portland · New Delhi
            </p>
          </div>
        </div>
      )}
    </>
  );
};
