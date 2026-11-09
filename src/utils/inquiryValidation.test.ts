import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateEmail,
  validatePhone,
  validateInquiry,
  calculateConsultationRouting,
} from './inquiryValidation';

test('email validation passes valid corporate emails and fails invalid formats', () => {
  assert.equal(validateEmail('partners@bmgroupinternational.com'), true);
  assert.equal(validateEmail('project.manager@vancouver-towers.ca'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('user@'), false);
  assert.equal(validateEmail(''), false);
});

test('phone validation handles formatted and unformatted numbers', () => {
  assert.equal(validatePhone('+1 (604) 555-0199'), true);
  assert.equal(validatePhone('6045550199'), true);
  assert.equal(validatePhone('123'), false);
  assert.equal(validatePhone(''), false);
});

test('validateInquiry flags incomplete submissions and passes comprehensive data', () => {
  const invalidInquiry = validateInquiry({
    fullName: '',
    email: 'bad',
    company: '',
    scopeDescription: 'short',
  });
  assert.equal(invalidInquiry.isValid, false);
  assert.ok(invalidInquiry.errors.fullName);
  assert.ok(invalidInquiry.errors.email);
  assert.ok(invalidInquiry.errors.company);
  assert.ok(invalidInquiry.errors.scopeDescription);

  const validInquiry = validateInquiry({
    fullName: 'Alexander Vance',
    email: 'avance@cascadiagrowth.com',
    company: 'Cascadia Property Partners',
    phone: '604-555-8910',
    division: 'development',
    projectLocation: 'North Delta, BC',
    budgetTier: '20m_plus',
    scopeDescription: 'Comprehensive mixed-use high-rise commercial development and structural foundation services.',
  });
  assert.equal(validInquiry.isValid, true);
  assert.equal(Object.keys(validInquiry.errors).length, 0);
});

test('consultation routing assigns proper regional office and priority tier', () => {
  const seattleRoute = calculateConsultationRouting(
    'restoration',
    '20m_plus',
    'Seattle, WA'
  );
  assert.equal(seattleRoute.assignedOffice, 'Seattle Regional Office (WA)');
  assert.equal(seattleRoute.priorityTier, 'Executive');
  assert.equal(seattleRoute.estimatedReviewHours, 12);
  assert.equal(seattleRoute.divisionLead, 'Polycrete Structural Restoration & Waterproofing Group');

  const vancouverRoute = calculateConsultationRouting(
    'materials',
    '1m_to_5m',
    'Surrey, Metro Vancouver'
  );
  assert.equal(vancouverRoute.assignedOffice, 'Vancouver Head Office (BC)');
  assert.equal(vancouverRoute.priorityTier, 'Standard');
  assert.equal(vancouverRoute.estimatedReviewHours, 24);
  assert.equal(vancouverRoute.divisionLead, 'Sanderson Concrete & Materials Supply Technical Desk');
});
