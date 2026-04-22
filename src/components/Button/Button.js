// src/components/Button/Button.js

import React from 'react';
import styles from './Button.module.css';

// O componente recebe 'text' e 'onClick' como propriedades (props)
const Button = ({ text, onClick, type = 'button', customClass }) => {

  const buttonClassName = `${styles.button} ${customClass || ''}`;

  return (
    <button className={buttonClassName} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
