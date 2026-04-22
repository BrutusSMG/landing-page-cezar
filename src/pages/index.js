// src/pages/index.js

import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import SocialProofSection from '@/components/SocialProofSection/SocialProofSection';
import AuthoritySection from '@/components/AuthoritySection/AuthoritySection';
import HowItWorksSection from '@/components/HowItWorksSection/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection/BenefitsSection';
import OpportunitySection from '@/components/OpportunitySection/OpportunitySection';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <SocialProofSection />
      <AuthoritySection />      
      <BenefitsSection />
      <OpportunitySection />
      <ContactForm />
      <Footer />
    </>
  )
}
