// src/components/BenefitsSection/BenefitsSection.js

import React from 'react';
import styles from './BenefitsSection.module.css';

const BenefitItem = ({ icon, title, description }) => (
  <div className={styles.benefitItem}>
    <div className={styles.iconWrapper}>{icon}</div>
    <div>
      <h3 className={styles.itemTitle}>{title}</h3>
      <p className={styles.itemDescription}>{description}</p>
    </div>
  </div>
);

const BenefitsSection = () => {
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
          icon="💰"
          title="Economia Real e Garantida"
          description="Receba um desconto de até 15% na sua fatura de energia todos os meses, sem surpresas."
        />
        <BenefitItem
          icon="🛠️"
          title="Zero Obras ou Instalação"
          description="Você não precisa instalar placas solares ou fazer qualquer tipo de obra. A energia já chega pronta para você."
        />
        <BenefitItem
          icon="🌱"
          title="Energia 100% Limpa"
          description="Consuma energia de fonte solar e contribua ativamente para um planeta mais sustentável e um futuro mais verde."
        />
        <BenefitItem
          icon="✍️"
          title="Adesão Simples e Digital"
          description="Todo o processo é feito online, de forma rápida, transparente e sem burocracia ou custos de adesão."
        />
      </div>
    </section>
  );
};

export default BenefitsSection;
