import React from 'react';
import { ArrowRight, ChevronDown, Building, Compass } from 'lucide-react';
import { heroImg } from '../assets/images';

interface HeroProps {
  onDiscussProject: () => void;
  onExploreCompanies: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscussProject, onExploreCompanies }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0b0d]">
      {/* Background cinematic imagery with subtle zoom animation */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="BM Group commercial construction landmark at twilight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105 animate-[pulse_14s_ease-in-out_infinite_alternate]"
          style={{
            animationDuration: '14s',
            transformOrigin: 'center center',
          }}
        />
        {/* Measured dark overlay scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-[#0e1013]/70 to-[#0e1013]/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0e1013]/40 to-[#0e1013]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 sm:py-32">
        {/* Kicker tag with quiet unboxed metadata */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-medium text-[#c8a261] tracking-widest uppercase mb-6 backdrop-blur-sm animate-fadeIn">
          <span>British Columbia</span>
          <span aria-hidden="true">·</span>
          <span>Pacific Northwest</span>
          <span aria-hidden="true">·</span>
          <span>International</span>
        </div>

        {/* Upward Line-by-Line Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.12] text-balance">
          <span className="block opacity-95">Building More Than Structures.</span>
          <span className="block text-[#f3f4f6] mt-1 sm:mt-2">
            Building What’s <span className="text-[#c8a261]">Next.</span>
          </span>
        </h1>

        {/* Thin expanding gold line beneath headline */}
        <div className="flex justify-center my-6 sm:my-8">
          <div className="h-[2px] w-24 sm:w-36 bg-gradient-to-r from-transparent via-[#c8a261] to-transparent" />
        </div>

        {/* Supporting Copy */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 font-normal leading-relaxed text-pretty">
          From real estate development to construction services and material supply, BM Group brings together specialized expertise and industry-leading companies to build lasting value.
        </p>

        {/* Dual CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onDiscussProject}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#c8a261] hover:bg-[#d8a252] text-[#0e1013] text-sm font-semibold tracking-wide transition-all shadow-xl hover:shadow-[#c8a261]/25 flex items-center justify-center gap-2 group whitespace-nowrap shrink-0"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreCompanies}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/15 text-sm font-medium tracking-wide transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <Building className="w-4 h-4 text-[#c8a261]" />
            <span>Explore Our Companies</span>
          </button>
        </div>

        {/* Subtle Regional Presence ticker */}
        <div className="mt-14 sm:mt-16 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-neutral-400">
          <span className="text-neutral-500 uppercase tracking-wider font-medium">Core Regional Presence:</span>
          <span className="hover:text-white transition-colors">Vancouver (HQ)</span>
          <span className="text-neutral-600">/</span>
          <span className="hover:text-white transition-colors">Seattle</span>
          <span className="text-neutral-600">/</span>
          <span className="hover:text-white transition-colors">Portland</span>
          <span className="text-neutral-600">/</span>
          <span className="hover:text-white transition-colors">New Delhi</span>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#credibility"
        aria-label="Scroll to Credibility statistics"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-neutral-400 hover:text-[#c8a261] transition-colors p-2"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
