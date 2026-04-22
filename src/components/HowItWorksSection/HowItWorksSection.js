// src/components/HowItWorksSection/HowItWorksSection.js

import React from 'react';
import styles from './HowItWorksSection.module.css';

const HowItWorksSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Como você economiza na prática?</h2>
      <p className={styles.sectionSubtitle}>
        É mais simples do que parece. Assista ao vídeo e veja como conectamos você à energia limpa e mais barata.
      </p>

      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          src="https://video.wixstatic.com/video/2e2758_5ad86567368946adbadc424d14015ebe/1080p/mp4/file.mp4"
          controls // Adiciona os controles de play, pause, volume, etc.
          preload="metadata" // Carrega apenas as informações básicas do vídeo inicialmente
          playsInline // Importante para boa experiência em iPhones
        >
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </section>
   );
};

export default HowItWorksSection;
