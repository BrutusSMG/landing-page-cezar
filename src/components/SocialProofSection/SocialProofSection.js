// src/components/SocialProofSection/SocialProofSection.js

import React from 'react';
import Image from 'next/image';
import styles from './SocialProofSection.module.css';
import Button from '../Button/Button';

const SocialProofSection = ({ showCtaButton }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.proofContainer}>
      <p className={styles.title}>Uma solução com a confiança da</p>
      <Image
        src="https://static.wixstatic.com/media/2e2758_e69e00302d3548859e8a40341ee2dbfe~mv2.png/v1/fill/w_378,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/iGreen%20site_edited.png"
        alt="Logotipo da iGreen Energy"
        width={250} // Largura em pixels
        height={79}  // Altura em pixels
        className={styles.logo}
      />

      <div className={`${styles.ctaWrapper} ${showCtaButton ? styles.ctaWrapperVisible : ''}`}>
        <Button text="Quero Minha Economia Agora!" onClick={scrollToContact} />
      </div>
    </div>
   );
};

export default SocialProofSection;
