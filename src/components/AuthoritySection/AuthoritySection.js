// src/components/AuthoritySection/AuthoritySection.js
import React from 'react';
import styles from './AuthoritySection.module.css';

// Componente auxiliar para cada card
const FeatureCard = ({ icon, title, description }) => (
  <div className={styles.featureCard}>
    <div className={styles.iconWrapper}>{icon}</div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
  </div>
);

const AuthoritySection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>A tranquilidade de ser atendido por um especialista</h2>
        <p className={styles.sectionSubtitle}>
          Meu compromisso é com o seu resultado. Veja por que dezenas de clientes confiam no meu trabalho para economizar de verdade.
        </p>
      </div>

      <div className={styles.featuresGrid}>
        <FeatureCard
          icon={
            // Ícone de Troféu (Tabler Icons)
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 21l8 0" /><path d="M12 17l0 4" /><path d="M7 4l10 0" /><path d="M17 4v8a5 5 0 0 1 -10 0v-8" /><path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg>
          }
          title="Reconhecimento Sênior"
          description="Promovido a Sênior pela iGreen em tempo recorde, um selo de excelência e resultados comprovados."
        />
        <FeatureCard
          icon={
            // Ícone de Foguete (Tabler Icons )
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
          }
          title="+40 Clientes em 1 Semana"
          description="Um marco que demonstra a alta confiança e o desejo pela solução, validando mais de 40 novos clientes em apenas 7 dias."
        />
        <FeatureCard
          icon={
            // Ícone de Coração com Mão (Tabler Icons )
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M12 6l0 9" /><path d="M15 9l-6 0" /></svg>
          }
          title="Atendimento Humano"
          description="Você não é apenas mais um número. Garanto um acompanhamento próximo e dedicado para garantir sua máxima economia."
        />
      </div>
    </section>
   );
};

export default AuthoritySection;
