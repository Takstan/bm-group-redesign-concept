import React from 'react';
import { Building2, Phone, Mail, MapPin, ArrowUp, Globe } from 'lucide-react';
import { OFFICES } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090a0d] border-t border-white/10 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 text-white font-display text-lg font-bold tracking-tight">
              <div className="w-8 h-8 rounded bg-[#c8a261] flex items-center justify-center text-[#0e1013] font-bold text-sm">
                BM
              </div>
              <span>
                BM GROUP <span className="font-light text-neutral-400">INTERNATIONAL</span>
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              An international multi-disciplinary family of 20 companies uniting real estate development, construction support, structural restoration, and materials supply across the Pacific Northwest and globally.
            </p>
            <div className="pt-2 text-neutral-500 text-[11px]">
              Operating across Vancouver, Seattle, Portland, and New Delhi.
            </div>
          </div>

          {/* Core Divisions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
              Operating Divisions
            </h4>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <a href="#divisions" className="hover:text-[#c8a261] transition-colors">
                  01. Real Estate Development
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-[#c8a261] transition-colors">
                  02. Construction Support Services
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-[#c8a261] transition-colors">
                  03. Structural Restoration & Waterproofing
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-[#c8a261] transition-colors">
                  04. Materials Supply
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Hubs & Direct Contacts */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
              Regional Operations
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {OFFICES.map((office) => (
                <div key={office.city} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="font-semibold text-white flex items-center justify-between">
                    <span>{office.city}</span>
                    <span className="text-[10px] text-[#c8a261] font-mono">{office.country}</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">{office.address}</p>
                  <p className="text-[11px] font-mono text-neutral-300 mt-1">{office.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} BM Group of Companies. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://bmgroupinternational.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-[#c8a261]" />
              <span>Official Global Site (bmgroupinternational.com)</span>
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors p-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#c8a261]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
