import React, { useState, forwardRef } from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, Clock, Building2, MapPin, Send, RotateCcw } from 'lucide-react';
import {
  ProjectInquiry,
  validateInquiry,
  calculateConsultationRouting,
  ConsultationEstimate,
} from '../utils/inquiryValidation';
import { DIVISIONS } from '../data/companyData';

interface InquirySectionProps {
  initialDivision?: string;
}

export const InquirySection = forwardRef<HTMLElement, InquirySectionProps>(
  ({ initialDivision = 'integrated' }, ref) => {
    const [formData, setFormData] = useState<ProjectInquiry>({
      fullName: '',
      email: '',
      company: '',
      phone: '',
      division: (initialDivision as ProjectInquiry['division']) || 'integrated',
      projectLocation: '',
      budgetTier: '5m_to_20m',
      scopeDescription: '',
    });

    React.useEffect(() => {
      if (initialDivision) {
        setFormData((prev) => ({
          ...prev,
          division: initialDivision as ProjectInquiry['division'],
        }));
      }
    }, [initialDivision]);

    const [errors, setErrors] = useState<Partial<Record<keyof ProjectInquiry, string>>>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [consultationEstimate, setConsultationEstimate] = useState<ConsultationEstimate | null>(null);

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof ProjectInquiry]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    };

    const handleDivisionSelect = (divId: ProjectInquiry['division']) => {
      setFormData((prev) => ({ ...prev, division: divId }));
      if (errors.division) {
        setErrors((prev) => ({ ...prev, division: undefined }));
      }
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const validation = validateInquiry(formData);

      if (!validation.isValid) {
        setErrors(validation.errors);
        return;
      }

      const routing = calculateConsultationRouting(
        formData.division,
        formData.budgetTier,
        formData.projectLocation
      );

      setConsultationEstimate(routing);
      setIsSubmitted(true);
      const card = document.getElementById('contact');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const handleReset = () => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        division: 'integrated',
        projectLocation: '',
        budgetTier: '5m_to_20m',
        scopeDescription: '',
      });
      setErrors({});
      setConsultationEstimate(null);
    };

    return (
      <section
        id="contact"
        ref={ref}
        className="py-20 sm:py-28 bg-[#0a0b0d] relative overflow-hidden blueprint-grid"
      >
        {/* Subtle radial lighting on blueprint background */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0a0b0d]/70 to-[#0a0b0d] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c8a261] mb-2">
              <span>Initiate Collaboration</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
              Have a Project in Mind? <br className="hidden sm:inline" />
              <span className="text-[#c8a261]">Let's Build Something Meaningful.</span>
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#c8a261] to-transparent mx-auto mt-4 mb-4" />
            <p className="text-sm sm:text-base text-neutral-300">
              Connect directly with our senior development directors, engineering consultants, and materials specialists across Vancouver, Seattle, Portland, and New Delhi.
            </p>
          </div>

          {/* Form Card or Submission Confirmation */}
          <div className="bg-[#121419]/90 border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-10 backdrop-blur-xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Division Selection Pills/Tabs */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-3">
                    Service Division Needed <span className="text-[#c8a261]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                    {[
                      { id: 'development', label: 'Real Estate' },
                      { id: 'construction', label: 'Construction Support' },
                      { id: 'restoration', label: 'Restoration & Waterproofing' },
                      { id: 'materials', label: 'Materials Supply' },
                      { id: 'integrated', label: 'Integrated Group' },
                    ].map((div) => (
                      <button
                        key={div.id}
                        type="button"
                        onClick={() => handleDivisionSelect(div.id as ProjectInquiry['division'])}
                        className={`px-3 py-2.5 rounded-lg text-xs font-medium transition-all text-center border ${
                          formData.division === div.id
                            ? 'bg-[#c8a261] text-[#0e1013] border-[#c8a261] font-semibold shadow-md'
                            : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        {div.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Full Name <span className="text-[#c8a261]">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. David Morrison"
                      className={`w-full px-4 py-2.5 bg-[#171a21] border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-[#c8a261]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Business Email Address <span className="text-[#c8a261]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. d.morrison@propertypartners.com"
                      className={`w-full px-4 py-2.5 bg-[#171a21] border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-[#c8a261]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company & Phone Row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Company / Organization <span className="text-[#c8a261]">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Pacific Coast Developments"
                      className={`w-full px-4 py-2.5 bg-[#171a21] border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.company ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-[#c8a261]'
                      }`}
                    />
                    {errors.company && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Direct Phone Number <span className="text-[#c8a261]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. (604) 555-0199"
                      className={`w-full px-4 py-2.5 bg-[#171a21] border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-[#c8a261]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Location & Budget Row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="projectLocation" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Project Location / City <span className="text-[#c8a261]">*</span>
                    </label>
                    <input
                      id="projectLocation"
                      name="projectLocation"
                      type="text"
                      value={formData.projectLocation}
                      onChange={handleInputChange}
                      placeholder="e.g. Metro Vancouver, Seattle, Portland, etc."
                      className={`w-full px-4 py-2.5 bg-[#171a21] border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.projectLocation ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-[#c8a261]'
                      }`}
                    />
                    {errors.projectLocation && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        {errors.projectLocation}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budgetTier" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Estimated Project Value / Budget Tier
                    </label>
                    <select
                      id="budgetTier"
                      name="budgetTier"
                      value={formData.budgetTier}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-[#171a21] border border-white/15 rounded-lg text-sm text-white focus:outline-none focus:border-[#c8a261]"
                    >
                      <option value="under_1m">&lt; $1,000,000 (Specialized Trade / Material)</option>
                      <option value="1m_to_5m">$1,000,000 – $5,000,000 (Commercial Sub-contract)</option>
                      <option value="5m_to_20m">$5,000,000 – $20,000,000 (Major Infrastructure / Re-development)</option>
                      <option value="20m_plus">$20,000,000+ (Master Planned Community / High-Rise)</option>
                    </select>
                  </div>
                </div>

                {/* Scope Description */}
                <div>
                  <label htmlFor="scopeDescription" className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Project Scope & Engineering Requirements <span className="text-[#c8a261]">*</span>
                  </label>
                  <textarea
                    id="scopeDescription"
                    name="scopeDescription"
                    rows={4}
                    value={formData.scopeDescription}
                    onChange={handleInputChange}
                    placeholder="Describe your site details, timeline, target milestones, and specific trade disciplines needed (e.g. tower development, precision diamond wire sawing, structural waterproofing)..."
                    className={`w-full px-4 py-2.5 bg-[#171a21] border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                      errors.scopeDescription ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-[#c8a261]'
                    }`}
                  />
                  {errors.scopeDescription && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      {errors.scopeDescription}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-neutral-400">
                    Direct routing to our Vancouver, Seattle, Portland, or New Delhi offices.
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#c8a261] hover:bg-[#d8a252] text-[#0e1013] text-sm font-semibold tracking-wide transition-all shadow-xl hover:shadow-[#c8a261]/25 flex items-center justify-center gap-2 group whitespace-nowrap shrink-0"
                  >
                    <span>Submit Project Inquiry</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation Receipt */
              <div className="py-6 sm:py-8 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#c8a261]/20 border border-[#c8a261] mx-auto flex items-center justify-center text-[#c8a261]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="max-w-xl mx-auto">
                  <span className="text-xs uppercase tracking-widest text-[#c8a261] font-semibold">
                    Inquiry Successfully Registered
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                    Thank You, {formData.fullName}.
                  </h3>
                  <p className="text-sm text-neutral-300 mt-2">
                    Your project inquiry for <span className="text-white font-medium">{formData.company}</span> has been routed into the BM Group project management console.
                  </p>
                </div>

                {/* Consultation Routing Summary */}
                {consultationEstimate && (
                  <div className="max-w-2xl mx-auto p-6 rounded-xl bg-white/[0.03] border border-white/10 text-left grid sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-medium">
                        Assigned Operating Desk
                      </span>
                      <p className="text-sm font-semibold text-[#c8a261] mt-1">
                        {consultationEstimate.divisionLead}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-medium">
                        Assigned Regional Hub
                      </span>
                      <p className="text-sm font-medium text-white mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#c8a261]" />
                        {consultationEstimate.assignedOffice}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-medium">
                        Consultation Review SLA
                      </span>
                      <p className="text-sm font-medium text-white mt-1 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#c8a261]" />
                        Within {consultationEstimate.estimatedReviewHours} Business Hours
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-medium">
                        Project Tier
                      </span>
                      <p className="text-sm font-medium text-[#c8a261] mt-1">
                        {consultationEstimate.priorityTier} Priority Dispatch
                      </p>
                    </div>
                  </div>
                )}

                <div className="pt-4 flex justify-center">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs font-semibold tracking-wide transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Project Inquiry</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
);
