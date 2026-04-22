// src/components/AuthoritySection/AuthoritySection.js

import React from 'react';
import styles from './AuthoritySection.module.css';

const AuthoritySection = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Por que falar com o Cezar Machado?</h2>

      <div className={styles.featuresGrid}>
        {/* Card 1: Reconhecimento Sênior */}
        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}>🏆</div>
          <h3 className={styles.cardTitle}>Reconhecimento Sênior</h3>
          <p className={styles.cardDescription}>
            Promovido a Sênior pela iGreen Energy em tempo recorde, um selo de excelência e comprometimento.
          </p>
        </div>

        {/* Card 2: Resultado Expressivo */}
        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}>🚀</div>
          <h3 className={styles.cardTitle}>Resultados Comprovados</h3>
          <p className={styles.cardDescription}>
            Mais de 40 cadastros de clientes satisfeitos validados em uma única semana, provando a eficácia da solução.
          </p>
        </div>

        {/* Card 3: Atendimento Personalizado */}
        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}>🤝</div>
          <h3 className={styles.cardTitle}>Atendimento Personalizado</h3>
          <p className={styles.cardDescription}>
            Você não é apenas mais um número. Receba um atendimento dedicado para garantir sua máxima economia e tranquilidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
