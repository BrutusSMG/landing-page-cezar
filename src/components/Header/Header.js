// src/components/Header/Header.js
import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const phoneNumber = ' 41998880161';
  const formattedPhoneNumber = '(41) 99888-0161';

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo da iGreen */}
        <Image
          src="https://static.wixstatic.com/media/2e2758_e69e00302d3548859e8a40341ee2dbfe~mv2.png/v1/fill/w_378,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/iGreen%20site_edited.png"
          alt="Logotipo iGreen Energy"
          className={styles.logo}
          width={150}
          height={40}
        />

        {/* Informações do Licenciado e Contato */}
        <div className={styles.licenseeInfo}>
          {/* NOVO WRAPPER: Agrupa a foto e o texto */}
          <div className={styles.profileWrapper}>
            <div className={styles.photoContainer}>
              <Image
                src="/cezarmachado.png"
                alt="Foto de Cezar Machado"
                width={44}
                height={44}
                className={styles.headerPhoto}
              />
              <Image
                src="/senior.png"
                alt="Selo Sênior"
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

          {/* Contato (Telefone ) */}
          <div className={styles.contactInfo}>
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
              {/* Ícone SVG do WhatsApp (Tabler Icons ) */}
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.contactIcon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
              
              {/* O número formatado para exibição */}
              <span className={styles.phoneNumberText}>{formattedPhoneNumber}</span>              
            </a>
          </div>
        </div>
      </div>
    </header>
   );
};

export default Header;