// src/components/CalculatorSection/CalculatorSection.js
import React, { useState } from 'react';
import styles from './CalculatorSection.module.css';
import Button from '../Button/Button';

const CalculatorSection = ({ onCalculationDone }) => {
  const [billValue, setBillValue] = useState('');
  const [economy, setEconomy] = useState(null);

  const handleCalculate = () => {
    const value = parseFloat(billValue);
    if (isNaN(value) || value <= 0) {
      setEconomy(null);
      return;
    }
    // Assumindo uma economia de 15%
    const monthlyEconomy = value * 0.15;
    const yearlyEconomy = monthlyEconomy * 12;

    setEconomy({
      monthly: monthlyEconomy.toFixed(2).replace('.', ','),
      yearly: yearlyEconomy.toFixed(2).replace('.', ','),
    });

    if (onCalculationDone) {
      onCalculationDone({
        billValue: value, // O valor numérico da conta
        monthlyEconomy: monthlyEconomy.toFixed(2).replace('.', ','), // A economia formatada
      });      
    } 
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.calculatorWrapper}>
        <h3 className={styles.title}>Descubra AGORA quanto você pode economizar</h3>
        <div className={styles.inputGroup}>
          <input
            type="number"
            className={styles.input}
            value={billValue}
            onChange={(e) => setBillValue(e.target.value)}
            placeholder="R$ 350"
          />
          <Button text="Simular minha economia" onClick={handleCalculate} />
        </div>

        {economy && (
          <div className={styles.results}>
            <p>Sua economia estimada é de:</p>
            <p className={styles.mainResult}>R$ {economy.monthly} por mês</p>
            <p>Isso é R$ {economy.yearly} por ano!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CalculatorSection;
