// src/components/Header/Header.js
import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const phoneNumber = '41997694828';
  const formattedPhoneNumber = '41 99769-4828';

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Coluna Esquerda: Logo */}
        <div className={styles.logoWrapper}>
          <Image
            src="https://static.wixstatic.com/media/2e2758_e69e00302d3548859e8a40341ee2dbfe~mv2.png/v1/fill/w_378,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/iGreen%20site_edited.png"
            alt="Logotipo iGreen Energy"
            width={151}
            height={48}
            className={styles.logo}
            priority
          />
        </div>

        {/* Coluna Central: Foto e Nome do Licenciado (MODIFICADO ) */}
        <div className={styles.licenseeInfo}>
          <div className={styles.photoContainer}>
            <Image
              src="/cezarmachado.png"
              alt="Foto de Cezar Machado"
              width={44}
              height={44}
              className={styles.headerPhoto}
            />
            {/* NOVO: Imagem do selo Sênior */}
            <Image
              src="/senior.png"
              alt="Selo de Licenciado Sênior"
              width={24}
              height={24}
              className={styles.seniorBadge}
            />
          </div>
          <div className={styles.licenseeText}>
            <p className={styles.licenseeName}>Cezar Machado</p>
            <p className={styles.licenseeTitle}>Licenciado Sênior</p>
          </div>
        </div>

        {/* Coluna Direita: Contato */}
        <div className={styles.contactInfo}>
          <a href={`tel:+55${phoneNumber}`}>
            <span>✆</span>
            {formattedPhoneNumber}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
