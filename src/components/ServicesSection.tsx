import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { DIVISIONS, DivisionInfo } from '../data/companyData';

interface ServicesSectionProps {
  onSelectDivision: (division: DivisionInfo) => void;
  onInquireDivision: (divisionId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectDivision,
  onInquireDivision,
}) => {
  return (
    <section id="divisions" className="py-20 sm:py-28 bg-[#0b0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c8a261] mb-2">
              <span>Core Divisions</span>
              <span className="w-8 h-[1px] bg-[#c8a261]" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
              Integrated Expertise. Complete Construction Solutions.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
            BM Group operates across four foundational sectors of the built environment, uniting specialized capability under one authoritative umbrella.
          </p>
        </div>

        {/* 2-Column Desktop Grid of 4 Interactive Rich Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {DIVISIONS.map((division) => (
            <div
              key={division.id}
              onClick={() => onSelectDivision(division)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectDivision(division);
                }
              }}
              className="group relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-white/10 cursor-pointer bg-[#14171d] shadow-xl text-left focus:outline-none focus:ring-2 focus:ring-[#c8a261]"
            >
              {/* Background Image with Hover Scale (1.04) */}
              <img
                src={division.image}
                alt={division.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Scrim Overlay that darkens bottom on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/60 to-[#0b0c0e]/20 group-hover:via-[#0b0c0e]/75 transition-colors duration-500" />

              {/* Card Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
                {/* Top: Division Number & Entity Count */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#c8a261] tracking-widest bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                    DIVISION {division.number}
                  </span>
                  <span className="text-xs text-neutral-300 font-medium bg-white/10 px-2.5 py-1 rounded backdrop-blur-sm">
                    {division.companiesCount}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div>
                  {/* Title with Gold Underline Animation */}
                  <div className="relative inline-block mb-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#f8f9fa] transition-colors">
                      {division.name}
                    </h3>
                    <div className="h-[2px] w-0 group-hover:w-full bg-[#c8a261] transition-all duration-300 ease-out" />
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-[#c8a261] mb-3">
                    {division.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">
                    {division.description}
                  </p>

                  {/* Key Capabilities Preview (Visible on desktop & mobile) */}
                  <div className="hidden sm:grid grid-cols-2 gap-2 mb-4 pt-3 border-t border-white/10">
                    {division.keyCapabilities.slice(0, 2).map((cap, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-neutral-300 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a261] shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link & Arrow */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-200 group-hover:text-[#c8a261] transition-colors">
                      Explore Capabilities
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#c8a261] flex items-center justify-center text-white group-hover:text-[#0b0c0e] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
