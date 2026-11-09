import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Building, ChevronRight, Award } from 'lucide-react';
import { FEATURED_PROJECTS, ProjectInfo } from '../data/companyData';

interface FeaturedWorkProps {
  onSelectProject: (project: ProjectInfo) => void;
  onExploreAll: () => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject, onExploreAll }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.divisionId === activeFilter);

  return (
    <section id="featured-work" className="py-20 sm:py-28 bg-[#0e1013] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c8a261] mb-2">
              <span>Proof of Execution</span>
              <span className="w-8 h-[1px] bg-[#c8a261]" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
              Built to Make an Impact.
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-xl">
              From landmark towers like Walker House in North Delta to critical transit infrastructure and civic streetscapes, explore how our integrated companies deliver lasting results.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#14171d] rounded-xl border border-white/10 shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#c8a261] text-[#0e1013] font-semibold shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('development')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'development'
                  ? 'bg-[#c8a261] text-[#0e1013] font-semibold shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Real Estate
            </button>
            <button
              onClick={() => setActiveFilter('construction')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'construction'
                  ? 'bg-[#c8a261] text-[#0e1013] font-semibold shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Construction Support
            </button>
            <button
              onClick={() => setActiveFilter('restoration')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'restoration'
                  ? 'bg-[#c8a261] text-[#0e1013] font-semibold shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Restoration
            </button>
            <button
              onClick={() => setActiveFilter('materials')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'materials'
                  ? 'bg-[#c8a261] text-[#0e1013] font-semibold shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Materials Supply
            </button>
          </div>
        </div>

        {/* Editorial Project Showcase: Alternating Full/Split Layouts */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#121418] hover:border-[#c8a261]/50 transition-all duration-300 shadow-xl cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#c8a261]"
              >
                <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[320px] overflow-hidden ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#c8a261] bg-black/75 px-3 py-1 rounded backdrop-blur-sm border border-white/10">
                        {project.divisionName}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Company & Location */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 mb-3">
                        <span className="flex items-center gap-1.5 font-medium text-[#c8a261]">
                          <Building className="w-3.5 h-3.5" />
                          {project.companyInvolved}
                        </span>
                        <span aria-hidden="true" className="text-neutral-600">·</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                          {project.location}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white group-hover:text-[#c8a261] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {/* Scope & Outcome */}
                      <p className="text-xs sm:text-sm text-neutral-300 mt-4 leading-relaxed line-clamp-3">
                        {project.scope}
                      </p>

                      <div className="mt-4 p-3.5 rounded-lg bg-white/[0.03] border border-white/5">
                        <span className="text-[11px] uppercase tracking-wider text-[#c8a261] font-medium block mb-1">
                          Key Outcome
                        </span>
                        <p className="text-xs text-neutral-200 leading-snug">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Footer Row: Metric & Action */}
                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#c8a261]" />
                        <span className="text-xs font-mono font-medium text-neutral-200">
                          {project.metric}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#c8a261] group-hover:text-white transition-colors">
                        <span>View Project Case</span>
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <span>Explore All Division Portfolio Projects</span>
            <ChevronRight className="w-4 h-4 text-[#c8a261]" />
          </button>
        </div>
      </div>
    </section>
  );
};
