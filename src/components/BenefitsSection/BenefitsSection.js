// src/components/BenefitsSection/BenefitsSection.js
import React from 'react';
import styles from './BenefitsSection.module.css';
import Button from '../Button/Button'; // Importamos o botão

// Componente auxiliar para cada item de benefício
const BenefitItem = ({ icon, title, description }) => (
  <div className={styles.benefitItem}>
    <div className={styles.iconWrapper}>{icon}</div>
    <div className={styles.textWrapper}>
      <h3 className={styles.itemTitle}>{title}</h3>
      <p className={styles.itemDescription}>{description}</p>
    </div>
  </div>
);

const BenefitsSection = () => {
  // Função para rolar até o formulário
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>Vantagens que vão além da economia</h2>
        <p className={styles.sectionSubtitle}>
          Ao se conectar à iGreen, você ganha de várias formas, sem complicação e sem letras miúdas.
        </p>
      </div>

      <div className={styles.benefitsGrid}>
        <BenefitItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" /><path d="M12 6v2m0 8v2" /></svg>
          }
          title="Economia Real e Garantida"
          description="Receba um desconto percentual fixo na sua fatura de energia todos os meses, sem surpresas ou variações."
        />
        <BenefitItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.693 10.724l-6.693 6.693v4h4l6.693 -6.693" /><path d="M19.36 14.36l-4.36 -4.36" /><path d="M18.732 9.732l-1.432 1.432" /><path d="M14.802 5.802l-2.829 2.829" /><path d="M3 3l18 18" /></svg>
          }
          title="Zero Obras ou Instalação"
          description="Você não precisa instalar placas solares ou fazer qualquer tipo de obra. A energia já chega pronta para você pela rede."
        />
        
        <BenefitItem
          icon={ <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21c.5 -4.5 2.5 -8 7 -10" /><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12.986 13z" /></svg> }
          title="Energia 100% Limpa"
          description="Consuma energia de fonte solar e contribua ativamente para um planeta mais sustentável e um futuro mais verde."
        />
        <BenefitItem
          icon={ <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h3" /><path d="M12 3v3" /><path d="M7.8 7.8l-2.2 -2.2" /><path d="M16.2 7.8l2.2 -2.2" /><path d="M7.8 16.2l-2.2 2.2" /><path d="M12 12l9 3l-4 2l-2 4l-3 -9" /></svg> }
          title="Adesão Simples e Digital"
          description="Todo o processo é feito online, de forma rápida, transparente e sem burocracia ou custos de adesão."
        />
      </div>

      {/* NOVO: Botão de Ação */}
      <div className={styles.ctaWrapper}>
        <Button text="Quero todos esses benefícios!" onClick={scrollToContact} />
      </div>
    </section>
   );
};

export default BenefitsSection;
