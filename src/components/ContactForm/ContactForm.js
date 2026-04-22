// src/components/ContactForm/ContactForm.js
import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';
import Button from '../Button/Button';

// Recebe a prop 'initialData' da página principal
const ContactForm = ({ initialData }) => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    avgBill: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EFEITO: Este bloco de código roda sempre que 'initialData' muda.
  // É responsável por pré-preencher o formulário.
  useEffect(() => {
    if (initialData && initialData.billValue) {
      setFormData(prevData => ({
        ...prevData,
        avgBill: initialData.billValue.toString(), // Pré-preenche o consumo
      }));
    }
  }, [initialData]);

  // FUNÇÃO ÚNICA DE MUDANÇA: Esta função atualiza qualquer campo do formulário.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // FUNÇÃO DE ENVIO: Lida com o clique no botão de submit.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Obrigado! Seus dados foram enviados com sucesso.');
        setFormData(initialState); // Limpa o formulário
      } else {
        // Se o Formspree retornar um erro
        alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
      }
    } catch (error) {
      alert('Ocorreu um erro de conexão. Por favor, verifique sua internet e tente novamente.');
    } finally {
      setIsSubmitting(false); // Reabilita o botão
    }
  };

  // LÓGICA DO TÍTULO: Define o texto do título com base nos dados recebidos.
  const titleText = initialData
    ? `Pronto para economizar R$ ${initialData.monthlyEconomy} por mês?`
    : 'Comece a economizar agora!';

  return (
    <section id="contact" className={styles.formSection}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>{titleText}</h2>
        <p className={styles.subtitle}>
          Preencha seus dados abaixo. É o último passo para garantir seu desconto na conta de luz.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Campo Nome */}
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Seu nome</label>
            <input
              type="text"
              id="name"
              name="name" // O 'name' deve corresponder à chave no objeto formData
              className={styles.input}
              value={formData.name} // O valor vem do estado
              onChange={handleChange} // A função de mudança é a mesma para todos
              placeholder="Ex: João da Silva"
              required
            />
          </div>

          {/* Campo Email */}
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Seu melhor e-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              placeholder="Ex: joao.silva@email.com"
              required
            />
          </div>

          {/* Campo Telefone */}
          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>Seu WhatsApp (com DDD)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles.input}
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ex: (41) 99999-8888"
              required
            />
          </div>

          {/* Campo Consumo Médio */}
          <div className={styles.inputGroup}>
            <label htmlFor="avgBill" className={styles.label}>Consumo médio mensal (R$)</label>
            <input
              type="number"
              id="avgBill"
              name="avgBill"
              className={styles.input}
              value={formData.avgBill}
              onChange={handleChange}
              placeholder="Ex: 350"
              required
            />
          </div>

          {/* Botão de Envio */}
          <div className={styles.buttonWrapper}>
            <Button
              text={isSubmitting ? 'Enviando...' : 'Garantir meu desconto'}
              type="submit"
              disabled={isSubmitting}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
