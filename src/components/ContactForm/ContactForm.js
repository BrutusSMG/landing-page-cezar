import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';
import Button from '../Button/Button';

const ContactForm = ({ initialData }) => {
  // Define o estado inicial dos campos do formulário
  const initialState = {
    name: '',
    email: '',
    phone: '',
    avgBill: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  // Este useEffect é responsável por pré-preencher o formulário
  // quando os dados da calculadora chegam pela primeira vez.
  useEffect(() => {
    // Só executa se 'initialData' existir e tiver um valor de conta
    if (initialData && initialData.billValue) {
      setFormData(prevData => ({
        ...prevData,
        avgBill: initialData.billValue.toString(), // Pré-preenche o campo de consumo
      }));
    }
  }, [initialData]); // A dependência [initialData] garante que isso rode sempre que os dados da calculadora mudarem.

  // Função universal para atualizar o estado do formulário conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Inicia o estado de envio

    try {
      // Envia os dados para o endpoint do Formspree
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitSuccess(true); 
        setFormData(initialState); // Limpa o estado (bom para o caso de o usuário voltar)
      } else {
        alert('Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro de conexão ao enviar o formulário:', error);
      alert('Ocorreu um erro de conexão. Por favor, verifique sua internet e tente novamente.');
    } finally {
      setIsSubmitting(false); // Finaliza o estado de envio, reabilitando o botão
    }
  };

  // Lógica para definir o título do formulário de forma dinâmica
  const titleText = initialData && initialData.yearlyEconomy
    ? `Pronto para economizar R$ ${initialData.yearlyEconomy} por ano?`
    : 'Comece a economizar agora!';

  return (
    <section id="contact" className={styles.formSection}>
      <div className={styles.formWrapper}>
        {isSubmitSuccess ? (
          // Se o envio foi um sucesso, mostra esta mensagem
          <div className={styles.successMessage}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.successIcon} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M9 12l2 2l4 -4" />
            </svg>
            <h3 className={styles.successTitle}>Obrigado pela confiança!</h3>
            <p className={styles.successText}>
              Recebemos seus dados com sucesso. Nossa equipe entrará em contato o mais breve possível para dar os próximos passos.
            </p>
          </div>
         ) : (
          // Se não, mostra o formulário normal
          <>
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
                  name="name"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: João da Silva"
                  required
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
          </>
         )}
      </div>
    </section>
  );
};

export default ContactForm;
