// src/components/SocialProofSection/SocialProofSection.js

import React from 'react';
import Image from 'next/image';
import styles from './SocialProofSection.module.css';

const SocialProofSection = () => {
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
    </div>
   );
};

export default SocialProofSection;
