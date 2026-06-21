// src/components/OpportunitySection/OpportunitySection.js
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './OpportunitySection.module.css';
import Button from '../Button/Button';

const OpportunitySection = ({ 
  title = "Gostou da solução? Transforme economia em uma ",
  highlight = "oportunidade de negócio",
  subtitle = "O mercado de energia sustentável está em plena expansão. Junte-se ao nosso time de licenciados iGreen Energy e construa uma carreira sólida ajudando pessoas e empresas a economizarem.",
  showCtaButton = true 
}) => {

  // Usando useCallback para memorizar a função e evitar re-renders desnecessários
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("Elemento #contact não encontrado na página.");
    }
  }, []);

  return (
    <section className={styles.sectionContainer} aria-labelledby="opportunity-title">
      <div className={styles.contentWrapper}>
        <h2 id="opportunity-title" className={styles.sectionTitle}>
          {title}<span className={styles.highlight}>{highlight}</span>.
        </h2>
        
        <p className={styles.sectionSubtitle}>
          {subtitle}
        </p>  

        {showCtaButton && (
          <div className={styles.ctaWrapper}>
            <Button 
              text="Quero saber como ser um parceiro" 
              onClick={scrollToContact} 
              variant="primary" // Supondo que seu componente Button aceite variantes
            />
          </div>
        )}
      </div>
    </section>
  );
};

// Definindo PropTypes para maior segurança no desenvolvimento (boa prática de TI)
OpportunitySection.propTypes = {
  title: PropTypes.string,
  highlight: PropTypes.string,
  subtitle: PropTypes.string,
  showCtaButton: PropTypes.bool,
};

export default OpportunitySection;
