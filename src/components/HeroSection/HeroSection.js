// src/components/HeroSection/HeroSection.js
import React from 'react';
import styles from './HeroSection.module.css';
import Button from '../Button/Button';

const HeroSection = () => {
  const handleButtonClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroContainer}>      
      <h1 className={styles.mainTitle}>
        Reduza sua conta de luz <span className={styles.highlight}>todos os meses</span>. Sem obras e sem investimento.
      </h1>
      <p className={styles.subtitle}>
        Junte-se a dezenas de clientes satisfeitos e comece a economizar com energia 100% limpa e renovável.
      </p>
      
      <Button text="QUERO ECONOMIZAR AGORA" onClick={handleButtonClick} />
    </section>
  );
};

export default HeroSection;
