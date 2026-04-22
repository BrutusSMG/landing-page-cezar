// src/components/HowItWorksSection/HowItWorksSection.js
import React from 'react';
import Image from 'next/image';
import styles from './HowItWorksSection.module.css';

// Componente auxiliar para os Passos (permanece o mesmo)
const Step = ({ title, iconUrl }) => (
  <div className={styles.stepCard}>
    <h3 className={styles.stepTitle}>{title}</h3>
    <Image src={iconUrl} alt={title} width={100} height={100} className={styles.stepIcon} />
  </div>
);

// NOVO: Componente auxiliar para os Conectores
const Connector = ({ text, positionClass }) => (
  <div className={`${styles.connector} ${positionClass}`}>
    <div className={styles.arrow}>→</div>
    <div>{text}</div>
  </div>
);

const HowItWorksSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.mainTitle}>Como funciona a conexão green</h2>
      
      <div className={styles.stepsGrid}>
        {/* Passos */}
        <Step
          title="A Fazenda Produz a Energia Solar"
          iconUrl="https://static.wixstatic.com/media/0c2907_57ba05c9c8c24aa7a7659ef15b420707~mv2.png/v1/fill/w_196,h_196,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/25076%20copy.png"
        />
        <Step
          title="A Energia é Injetada na Rede da Distribuidora"
          iconUrl="https://static.wixstatic.com/media/0c2907_c266562062de4ceb8af45e5658847f0a~mv2.png/v1/fill/w_180,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/100567%20copy.png"
        />
        <Step
          title="Que distribuirá para sua casa ou empresa"
          iconUrl="https://static.wixstatic.com/media/0c2907_055bca2bbbe74fd6aa6aed4937eedaeb~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/116074%20copy.png"
        />
        <Step
          title="Você economiza sem investimentos"
          iconUrl="https://static.wixstatic.com/media/0c2907_760ee56c0e344c7f9b2506afc3e5bf2c~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1611179%20copy.png"
        />

        {/* Conectores (Adicionados aqui ) */}
        <Connector text="Injeção" positionClass={styles.connector1} />
        <Connector text="Distribuição" positionClass={styles.connector2} />
        <Connector text="Economia" positionClass={styles.connector3} />
      </div>

      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          src="https://video.wixstatic.com/video/2e2758_5ad86567368946adbadc424d14015ebe/1080p/mp4/file.mp4"
          controls
          preload="metadata"
          playsInline
        >
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </section>
   );
};

export default HowItWorksSection;
