export interface ProjectInquiry {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  division: 'development' | 'construction' | 'restoration' | 'materials' | 'integrated';
  projectLocation: string;
  budgetTier: 'under_1m' | '1m_to_5m' | '5m_to_20m' | '20m_plus';
  scopeDescription: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ProjectInquiry, string>>;
}

export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export function validatePhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  // Allows international, dashes, spaces, brackets, min 7 digits
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  return cleaned.length >= 7 && /^\d+$/.test(cleaned);
}

export function validateInquiry(data: Partial<ProjectInquiry>): ValidationResult {
  const errors: Partial<Record<keyof ProjectInquiry, string>> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please provide a valid business email address.';
  }

  if (!data.company || data.company.trim().length < 2) {
    errors.company = 'Please specify your company or organization name.';
  }

  if (!data.phone || !validatePhone(data.phone)) {
    errors.phone = 'Please provide a valid contact phone number.';
  }

  if (!data.division) {
    errors.division = 'Please select a primary industry division.';
  }

  if (!data.projectLocation || data.projectLocation.trim().length < 2) {
    errors.projectLocation = 'Please provide the project city or region.';
  }

  if (!data.scopeDescription || data.scopeDescription.trim().length < 15) {
    errors.scopeDescription = 'Please describe your project scope (minimum 15 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface ConsultationEstimate {
  divisionLead: string;
  assignedOffice: string;
  estimatedReviewHours: number;
  priorityTier: 'Standard' | 'Elevated' | 'Executive';
}

export function calculateConsultationRouting(
  division: ProjectInquiry['division'],
  budgetTier: ProjectInquiry['budgetTier'],
  location: string
): ConsultationEstimate {
  const normalizedLoc = (location || '').toLowerCase();
  
  let assignedOffice = 'Vancouver Head Office (BC)';
  if (normalizedLoc.includes('seattle') || normalizedLoc.includes('wa') || normalizedLoc.includes('washington')) {
    assignedOffice = 'Seattle Regional Office (WA)';
  } else if (normalizedLoc.includes('portland') || normalizedLoc.includes('or') || normalizedLoc.includes('oregon')) {
    assignedOffice = 'Portland Regional Office (OR)';
  } else if (normalizedLoc.includes('delhi') || normalizedLoc.includes('india')) {
    assignedOffice = 'New Delhi International Office';
  }

  const divisionLeads: Record<ProjectInquiry['division'], string> = {
    development: 'BMG Real Estate Development Advisory',
    construction: 'Urban Sawing & Construction Support Engineering',
    restoration: 'Polycrete Structural Restoration & Waterproofing Group',
    materials: 'Sanderson Concrete & Materials Supply Technical Desk',
    integrated: 'BM Group Integrated Multi-Disciplinary Practice',
  };

  const priorityTier: ConsultationEstimate['priorityTier'] =
    budgetTier === '20m_plus'
      ? 'Executive'
      : budgetTier === '5m_to_20m'
      ? 'Elevated'
      : 'Standard';

  const estimatedReviewHours = priorityTier === 'Executive' ? 12 : 24;

  return {
    divisionLead: divisionLeads[division] || divisionLeads.integrated,
    assignedOffice,
    estimatedReviewHours,
    priorityTier,
  };
}
