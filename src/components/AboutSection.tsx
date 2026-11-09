import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake, Landmark } from 'lucide-react';
import { aboutImg, restorationImg } from '../assets/images';

interface AboutSectionProps {
  onDiscoverStory: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverStory }) => {
  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-[#0e1013]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Image with Overlapping Secondary Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-[#1a1d22]">
                <img
                  src={aboutImg}
                  alt="BM Group engineers on site reviewing technical construction blueprints"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono text-[#c8a261] tracking-wider uppercase bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                    On-Site Engineering & Oversight
                  </span>
                </div>
              </div>

              {/* Smaller Overlapping Image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-3/5 sm:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#c8a261]/80 shadow-2xl bg-[#13161b] hidden sm:block">
                <img
                  src={restorationImg}
                  alt="Precision structural restoration and waterproofing in progress"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5">
                  <span className="text-[10px] font-mono text-white tracking-wider uppercase">
                    Self-Performed Trades
                  </span>
                </div>
              </div>

              {/* Decorative Subtle Accent Corner */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#c8a261]/30 rounded-tl-xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c8a261]">
                <span>Our Philosophy</span>
                <span className="w-8 h-[1px] bg-[#c8a261]" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
                One Group. A Shared Commitment to Building Better.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Built on quality, integrity, and long-standing relationships, BM Group connects specialized businesses to deliver integrated construction solutions. Together, we bring knowledge, resources, and a commitment to creating lasting value.
            </p>

            {/* Three Value Statements */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#c8a261]/10 flex items-center justify-center shrink-0 border border-[#c8a261]/20">
                  <ShieldCheck className="w-5 h-5 text-[#c8a261]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Quality Without Compromise</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Rigorous quality assurance, certified safety programs, and strict engineering tolerances on every jobsite.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#c8a261]/10 flex items-center justify-center shrink-0 border border-[#c8a261]/20">
                  <HeartHandshake className="w-5 h-5 text-[#c8a261]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Integrity & Accountability</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Direct ownership of outcomes. We honor timelines, cost estimates, and trade commitments across every entity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#c8a261]/10 flex items-center justify-center shrink-0 border border-[#c8a261]/20">
                  <Landmark className="w-5 h-5 text-[#c8a261]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Enduring Generational Legacy</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Building resilient infrastructure and forward-thinking communities meant to elevate future generations.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onDiscoverStory}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c8a261] hover:text-[#d8a252] group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
