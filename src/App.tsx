/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredibilityStats } from './components/CredibilityStats';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedWork } from './components/FeaturedWork';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OurCompanies } from './components/OurCompanies';
import { PeopleValues } from './components/PeopleValues';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { ProjectModal, DivisionModal, StoryModal } from './components/Modals';
import { ProjectInfo, DivisionInfo, OperatingCompany, DIVISIONS } from './data/companyData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectInfo | null>(null);
  const [selectedDivision, setSelectedDivision] = useState<DivisionInfo | null>(null);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState<boolean>(false);
  const [targetDivisionForInquiry, setTargetDivisionForInquiry] = useState<string>('integrated');

  const inquirySectionRef = useRef<HTMLElement>(null);

  const scrollToInquiry = (divisionId?: string) => {
    if (divisionId) {
      setTargetDivisionForInquiry(divisionId);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCompanies = () => {
    const element = document.getElementById('companies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCompany = (company: OperatingCompany) => {
    // Look up the corresponding division to display enriched modal
    const div = DIVISIONS.find((d) => d.id === company.divisionId);
    if (div) {
      setSelectedDivision(div);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1013] text-[#e8eaed] font-sans selection:bg-[#c8a261] selection:text-[#0e1013]">
      {/* Sticky Top Navigation */}
      <Navbar onOpenConsultation={() => scrollToInquiry()} />

      <main>
        {/* SECTION 01: Hero */}
        <Hero
          onDiscussProject={() => scrollToInquiry()}
          onExploreCompanies={scrollToCompanies}
        />

        {/* SECTION 02: Credibility Statistics */}
        <CredibilityStats />

        {/* SECTION 03: About */}
        <AboutSection onDiscoverStory={() => setIsStoryModalOpen(true)} />

        {/* SECTION 04: Services */}
        <ServicesSection
          onSelectDivision={(div) => setSelectedDivision(div)}
          onInquireDivision={(divId) => scrollToInquiry(divId)}
        />

        {/* SECTION 05: Featured Work */}
        <FeaturedWork
          onSelectProject={(proj) => setSelectedProject(proj)}
          onExploreAll={() => scrollToCompanies()}
        />

        {/* SECTION 06: Why Choose Us */}
        <WhyChooseUs />

        {/* SECTION 07: Our Companies */}
        <OurCompanies
          onSelectCompany={handleSelectCompany}
          onInquireCompany={(divId) => scrollToInquiry(divId)}
        />

        {/* SECTION 08: People & Values */}
        <PeopleValues />

        {/* SECTION 09: Final Call to Action & Booking Form */}
        <InquirySection
          ref={inquirySectionRef}
          initialDivision={targetDivisionForInquiry}
        />
      </main>

      {/* SECTION 10: Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectInquiry={(divId) => scrollToInquiry(divId)}
      />

      <DivisionModal
        division={selectedDivision}
        onClose={() => setSelectedDivision(null)}
        onSelectInquiry={(divId) => scrollToInquiry(divId)}
      />

      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />
    </div>
  );
}
