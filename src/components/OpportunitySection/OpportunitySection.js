// src/components/OpportunitySection/OpportunitySection.js

import React from 'react';
import styles from './OpportunitySection.module.css';
import Button from '../Button/Button'; // Vamos reutilizar nosso componente Button!

const OpportunitySection = ({ showCtaButton }) => {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>
          Gostou da solução? E se além de economizar, você pudesse <span className={styles.highlight}>gerar renda</span>?
        </h2>
        <p className={styles.sectionSubtitle}>
          O mercado de energia sustentável está apenas começando. Assim como eu, você também pode se tornar um licenciado iGreen Energy e construir uma fonte de renda sólida, ajudando outras pessoas a economizarem.
        </p>
        
        {/* 
          Aqui, vamos passar uma classe customizada para o nosso componente Button.
          Isso requer uma pequena alteração no componente Button para ele aceitar classes extras.
        */}        

        <div className={`${styles.ctaWrapper} ${showCtaButton ? styles.ctaWrapperVisible : ''}`}>
          <Button text="Quero saber mais" onClick={scrollToContact} />
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
