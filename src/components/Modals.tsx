import React, { useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Building2, MapPin, Calendar, Award } from 'lucide-react';
import { ProjectInfo, DivisionInfo } from '../data/companyData';

interface ProjectModalProps {
  project: ProjectInfo | null;
  onClose: () => void;
  onSelectInquiry: (divisionId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onSelectInquiry }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#13161b] border border-white/10 rounded-2xl shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-neutral-300 hover:text-white transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13161b] via-[#13161b]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 text-xs font-medium text-[#c8a261] mb-2 tracking-wide uppercase">
              <span>{project.divisionName}</span>
              <span aria-hidden="true">·</span>
              <span>{project.companyInvolved}</span>
            </div>
            <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-300 mt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c8a261]" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#c8a261]" />
                Completed {project.completionYear}
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#c8a261]" />
                {project.metric}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Scope & Challenge</h3>
            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
              {project.scope}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <h3 className="text-xs uppercase tracking-wider text-[#c8a261] mb-2 font-medium">Key Outcome & Impact</h3>
            <p className="text-neutral-200 text-sm leading-relaxed">
              {project.outcome}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-neutral-400 mb-3 font-medium">Engineering & Project Highlights</h3>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-[#c8a261] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-400">
              Inquire about scheduling specialist resources for your upcoming development.
            </span>
            <button
              onClick={() => {
                onClose();
                onSelectInquiry(project.divisionId);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#c8a261] hover:bg-[#d8a252] text-[#0e1013] text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 shadow-lg"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DivisionModalProps {
  division: DivisionInfo | null;
  onClose: () => void;
  onSelectInquiry: (divisionId: string) => void;
}

export const DivisionModal: React.FC<DivisionModalProps> = ({ division, onClose, onSelectInquiry }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (division) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [division, onClose]);

  if (!division) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="division-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#13161b] border border-white/10 rounded-2xl shadow-2xl text-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close division modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-xs font-medium text-[#c8a261] mb-2 tracking-widest uppercase">
          <span>Division {division.number}</span>
          <span aria-hidden="true">·</span>
          <span>{division.companiesCount}</span>
        </div>

        <h2 id="division-modal-title" className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white mb-2">
          {division.name}
        </h2>
        <p className="text-[#c8a261] text-sm font-medium mb-4">{division.tagline}</p>
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
          {division.description}
        </p>

        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-neutral-400 mb-3 font-medium">Core Capabilities</h3>
          <ul className="space-y-2">
            {division.keyCapabilities.map((cap, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                <CheckCircle className="w-4 h-4 text-[#c8a261] shrink-0" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/5">
          <h3 className="text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Operating Companies in this Division</h3>
          <div className="flex flex-wrap gap-2">
            {division.exampleCompanies.map((comp, idx) => (
              <span key={idx} className="px-3 py-1 rounded bg-white/5 text-xs text-neutral-200 border border-white/10">
                {comp}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            Close Window
          </button>
          <button
            onClick={() => {
              onClose();
              onSelectInquiry(division.id);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#c8a261] hover:bg-[#d8a252] text-[#0e1013] text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 shadow-lg"
          >
            <span>Consult With {division.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#13161b] border border-white/10 rounded-2xl shadow-2xl text-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close story modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs uppercase tracking-widest text-[#c8a261] font-medium block mb-2">
          Group Heritage & Vision
        </span>
        <h2 id="story-modal-title" className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
          Built on Trust. Growing with Purpose.
        </h2>

        <div className="space-y-4 text-neutral-300 text-sm leading-relaxed mb-6">
          <p>
            BM Group International began over three decades ago in British Columbia as a specialized concrete contracting service with an unwavering commitment to craftsmanship and client trust.
          </p>
          <p>
            Recognizing that complex construction projects frequently suffer from fragmented trade contractors, misaligned schedules, and communication breakdowns, leadership made the deliberate decision to build a vertically integrated ecosystem.
          </p>
          <p>
            Today, BM Group spans 20 specialized companies and over 500 professionals operating across Canada, the United States, and India. From the initial land acquisition and development zoning to precision engineering support, structural restoration, and manufactured materials supply, our portfolio companies operate with shared safety standards and mutual accountability.
          </p>
          <p className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-[#c8a261] italic text-neutral-200">
            "We don’t just construct buildings; we build long-term relationships and generational infrastructure that stand the test of time."
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 py-4 border-t border-b border-white/10 mb-6 text-center">
          <div>
            <div className="text-xl font-bold font-mono text-[#c8a261]">30+</div>
            <div className="text-[11px] text-neutral-400 mt-1">Years History</div>
          </div>
          <div>
            <div className="text-xl font-bold font-mono text-[#c8a261]">20</div>
            <div className="text-[11px] text-neutral-400 mt-1">Companies</div>
          </div>
          <div>
            <div className="text-xl font-bold font-mono text-[#c8a261]">500+</div>
            <div className="text-[11px] text-neutral-400 mt-1">Specialists</div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#c8a261] hover:bg-[#d8a252] text-[#0e1013] text-xs font-semibold tracking-wide transition-colors"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};
