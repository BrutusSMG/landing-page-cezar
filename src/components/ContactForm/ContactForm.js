// src/components/ContactForm/ContactForm.js

import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import Button from '../Button/Button'; // Vamos reutilizar nosso botão!

const ContactForm = () => {
  // Estados para armazenar os dados do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consumption, setConsumption] = useState('');

  // Função chamada ao enviar o formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o recarregamento da página
    
    // Validação simples
    if (!name || !email || !consumption) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const formData = { name, email, consumption };
    console.log('Dados do formulário enviados:', formData);
    
    // Aqui, no futuro, enviaremos os dados para um backend, email, etc.
    alert(`Obrigado, ${name}! Recebemos seus dados e entraremos em contato em breve.`);

    // Limpa os campos após o envio
    setName('');
    setEmail('');
    setConsumption('');
  };

  return (
    <section className={styles.sectionContainer} id="contact">
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>Pronto para economizar?</h2>
        <p className={styles.formSubtitle}>
          Preencha os dados abaixo e dê o primeiro passo. É rápido, gratuito e sem compromisso.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Seu nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: João da Silva"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Seu melhor e-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex: joao.silva@email.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="consumption">Seu consumo médio mensal (em R$)</label>
            <input
              type="number"
              id="consumption"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              placeholder="Ex: 350"
              required
            />
          </div>

          <div className={styles.submitButton}>
            <Button text="Validar minha economia" type="submit" />
          </div>

          <p className={styles.privacyText}>
            🔒 Seus dados estão seguros. Não enviamos spam.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
