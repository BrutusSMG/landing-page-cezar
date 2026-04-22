// src/components/OpportunitySection/OpportunitySection.js

import React from 'react';
import styles from './OpportunitySection.module.css';
import Button from '../Button/Button'; // Vamos reutilizar nosso componente Button!

const OpportunitySection = () => {

  const handleOpportunityClick = () => {
    // Abre o WhatsApp com uma mensagem pré-definida
    const phoneNumber = '5541997694828'; // SUBSTITUA PELO WHATSAPP DO CEZAR
    const message = encodeURIComponent('Olá, Cezar! Vi na sua página que, além de economizar, também posso gerar renda com a iGreen. Gostaria de saber mais sobre a oportunidade.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank' );
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
        <Button 
          text="Quero saber mais" 
          onClick={handleOpportunityClick}
          customClass={styles.secondaryButton} // Passando a classe do botão secundário
        />
      </div>
    </section>
  );
};

export default OpportunitySection;
