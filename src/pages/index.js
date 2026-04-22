// src/pages/index.js

import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import CalculatorSection from '@/components/CalculatorSection/CalculatorSection';
import SocialProofSection from '@/components/SocialProofSection/SocialProofSection';
import AuthoritySection from '@/components/AuthoritySection/AuthoritySection';
import HowItWorksSection from '@/components/HowItWorksSection/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection/BenefitsSection';
import OpportunitySection from '@/components/OpportunitySection/OpportunitySection';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer/Footer';

import React, { useState } from 'react';

export default function Home() {

  const [isCtaButtonVisible, setIsCtaButtonVisible] = useState(false);
  const [calculatorData, setCalculatorData] = useState(null);

  const handleCalculationDone = (data) => {    
    setIsCtaButtonVisible(true);
    setCalculatorData(data);
  };

  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <CalculatorSection onCalculationDone={handleCalculationDone} />
      <SocialProofSection showCtaButton={isCtaButtonVisible} />
      <AuthoritySection />      
      <BenefitsSection />
      <OpportunitySection />
      <ContactForm initialData={calculatorData} />
      <Footer />
    </>
  )
}
