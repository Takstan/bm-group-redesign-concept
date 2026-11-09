import React, { useState } from 'react';
import { Building2, MapPin, Calendar, ArrowUpRight, Search } from 'lucide-react';
import { OPERATING_COMPANIES, OperatingCompany } from '../data/companyData';

interface OurCompaniesProps {
  onSelectCompany: (company: OperatingCompany) => void;
  onInquireCompany: (divisionId: string) => void;
}

export const OurCompanies: React.FC<OurCompaniesProps> = ({
  onSelectCompany,
  onInquireCompany,
}) => {
  const [selectedDivision, setSelectedDivision] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCompanies = OPERATING_COMPANIES.filter((company) => {
    const matchesDiv = selectedDivision === 'all' || company.divisionId === selectedDivision;
    const matchesSearch =
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.headquarters.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiv && matchesSearch;
  });

  return (
    <section id="companies" className="py-20 sm:py-28 bg-[#0e1013] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c8a261] mb-2">
              <span>Operating Portfolio</span>
              <span className="w-8 h-[1px] bg-[#c8a261]" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
              Different Specialties. One Stronger Group.
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-xl">
              From historic precast artisans to cutting-edge concrete scanning and commercial property developers, discover the companies powering BM Group.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies or specialties..."
              className="w-full pl-10 pr-4 py-2 bg-[#14171d] border border-white/10 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#c8a261]"
            />
          </div>
        </div>

        {/* Slowly moving Logo Marquee (desktop) with pause on hover */}
        <div className="mb-14 overflow-hidden border-y border-white/10 py-5 bg-[#121418]/60 backdrop-blur-sm group">
          <div className="flex items-center gap-12 whitespace-nowrap animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...OPERATING_COMPANIES, ...OPERATING_COMPANIES].map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                onClick={() => onSelectCompany(company)}
                className="flex items-center gap-3 cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
              >
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#c8a261] font-mono font-bold text-xs">
                  {company.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-sm font-semibold tracking-wide text-neutral-200 hover:text-[#c8a261] transition-colors">
                  {company.name}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono">
                  [{company.divisionName.split(' ')[0]}]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Division Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Companies (20)' },
            { id: 'development', label: 'Real Estate' },
            { id: 'construction', label: 'Construction Support' },
            { id: 'restoration', label: 'Restoration & Waterproofing' },
            { id: 'materials', label: 'Materials Supply' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedDivision(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                selectedDivision === tab.id
                  ? 'bg-[#c8a261] text-[#0e1013] font-semibold'
                  : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Company Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              onClick={() => onSelectCompany(company)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCompany(company);
                }
              }}
              className="p-6 rounded-xl bg-[#13161b] border border-white/10 hover:border-[#c8a261]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-lg text-left focus:outline-none focus:ring-2 focus:ring-[#c8a261]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c8a261]/10 border border-[#c8a261]/20 flex items-center justify-center text-[#c8a261] font-display font-bold text-sm">
                    {company.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">
                    Est. {company.foundingYear}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-white group-hover:text-[#c8a261] transition-colors">
                  {company.name}
                </h3>
                <span className="text-[11px] font-medium text-[#c8a261] block mt-1">
                  {company.specialty}
                </span>

                <p className="text-xs text-neutral-400 mt-3 leading-relaxed line-clamp-3">
                  {company.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px]">
                <span className="flex items-center gap-1 text-neutral-400">
                  <MapPin className="w-3 h-3 text-[#c8a261]" />
                  {company.headquarters}
                </span>
                <span className="text-[#c8a261] group-hover:translate-x-0.5 transition-transform flex items-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
