import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Users, Shield, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export const PeopleValues: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeTestimonial];

  return (
    <section id="people" className="py-20 sm:py-28 bg-[#0b0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c8a261] mb-2">
            <span>Our People & Culture</span>
            <span className="w-8 h-[1px] bg-[#c8a261]" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
            Built on Relationships. Driven by People.
          </h2>
          <p className="text-base text-neutral-300 mt-4 leading-relaxed">
            Behind every successful project are people committed to doing things right. At BM Group, we believe strong relationships, diverse expertise, and shared values are fundamental to building a better future.
          </p>
        </div>

        {/* 2-Column Grid: Leadership & Workforce Pillars vs Testimonials */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Team & Leadership Statement */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 rounded-2xl bg-[#121418] border border-white/10 shadow-xl">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#c8a261]/15 border border-[#c8a261]/30 flex items-center justify-center text-[#c8a261]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#c8a261] font-semibold">
                    Executive Leadership Statement
                  </span>
                  <h3 className="text-lg font-display font-bold text-white">
                    BM Group Executive Council
                  </h3>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-neutral-200 italic leading-relaxed mb-6 border-l-2 border-[#c8a261] pl-4">
                "Our growth from a local contracting outfit into an international multi-disciplinary family of 20 companies hasn’t changed our fundamental compass: when we give our word to a partner, community, or worker, we deliver. Real strength in construction isn’t just concrete and steel—it’s the collective character of our 500 team members."
              </blockquote>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center">
                <div>
                  <div className="text-2xl font-mono font-bold text-[#c8a261]">500+</div>
                  <div className="text-[11px] text-neutral-400 mt-1">Trades & Staff</div>
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-[#c8a261]">0</div>
                  <div className="text-[11px] text-neutral-400 mt-1">Safety Compromise</div>
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-[#c8a261]">100%</div>
                  <div className="text-[11px] text-neutral-400 mt-1">In-House Trade Sync</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#c8a261]" />
                COR Certified Safety Programs
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#c8a261]" />
                VRCA & ULI Recognized
              </span>
            </div>
          </div>

          {/* Right Column: Verified Client & Partner Testimonials */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-[#14171d] border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Quote className="w-8 h-8 text-[#c8a261]/80" />
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                    Partner Testimonials
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-neutral-400 px-1">
                    {activeTestimonial + 1} / {TESTIMONIALS.length}
                  </span>
                  <button
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-base sm:text-lg text-white font-medium leading-relaxed mb-6 min-h-[120px]">
                "{current.quote}"
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-display font-bold text-white">
                    {current.author}
                  </h4>
                  <p className="text-xs text-[#c8a261] font-medium mt-0.5">
                    {current.title} · {current.organization}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    {current.location} (Project: {current.projectContext})
                  </p>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-black/40 px-2.5 py-1 rounded border border-white/5">
                    Verified Partner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
