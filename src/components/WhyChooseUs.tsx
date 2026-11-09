import React from 'react';
import { Network, ShieldCheck, Handshake, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      number: '01',
      title: 'Connected Expertise',
      summary: 'Access complementary construction specialists through one unified group.',
      icon: Network,
      details: [
        'Single accountable point of contact across development, trade execution, and supply',
        'Compressed scheduling with synchronized handoffs between specialized entities',
        'Elimination of finger-pointing between independent sub-contractors'
      ]
    },
    {
      number: '02',
      title: 'Quality-Driven Solutions',
      summary: 'A shared commitment to workmanship, safety, and long-term value.',
      icon: ShieldCheck,
      details: [
        'Proprietary safety management systems across all 500+ professionals',
        'Certified ISO and CSA compliant concrete formulations and precast standards',
        'Decades-long durability warranties on structural restorations and building envelopes'
      ]
    },
    {
      number: '03',
      title: 'Established Industry Relationships',
      summary: 'Businesses with substantial experience working across construction and development.',
      icon: Handshake,
      details: [
        'Deep relationships with municipal planning departments in BC and US Pacific Northwest',
        'Longstanding supplier networks guaranteeing material allocation during supply crunches',
        'Financially bonded group with over $1.2B in delivered project value'
      ]
    }
  ];

  return (
    <section id="advantages" className="py-20 sm:py-28 bg-[#0b0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c8a261] mb-2">
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
            The Advantage of Working Together.
          </h2>
          <div className="h-[2px] w-16 bg-[#c8a261] mx-auto mt-4 mb-4" />
          <p className="text-sm text-neutral-400">
            Why leading developers, municipal authorities, and commercial clients choose the BM Group integrated ecosystem over disparate independent contractors.
          </p>
        </div>

        {/* 3-Column Benefits Layout with Oversized Numbers */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.number}
                className="group relative p-8 rounded-2xl bg-[#121418] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Expanding bottom gold border on hover */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#c8a261] group-hover:w-full transition-all duration-500 ease-out" />

                <div>
                  {/* Top: Oversized number transitioning to gold on hover & Minimal Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl sm:text-5xl font-mono font-extrabold text-neutral-600 group-hover:text-[#c8a261] transition-colors duration-300">
                      {benefit.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#c8a261]/10 flex items-center justify-center text-neutral-400 group-hover:text-[#c8a261] border border-white/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#c8a261] font-medium mb-6">
                    {benefit.summary}
                  </p>

                  {/* Detail Bullet List */}
                  <ul className="space-y-3 pt-4 border-t border-white/5">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-[#c8a261] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="uppercase tracking-wider">BM Group Synergy</span>
                  <span className="text-[#c8a261]">100% Self-Coordinated</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
