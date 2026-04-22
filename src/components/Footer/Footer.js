// src/components/Footer/Footer.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const instagramIconUrl = "https://static.wixstatic.com/media/e1aa082f7c0747168d9cf43e77046142.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e1aa082f7c0747168d9cf43e77046142.png";
  const facebookIconUrl = "https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4057345bcf57474b96976284050c00df.png";
  const linkedinIconUrl = "https://static.wixstatic.com/media/aa0402eb9ba2430d9d0620b59556efca.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aa0402eb9ba2430d9d0620b59556efca.png";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Coluna 1: Sobre Cezar Machado */}
        <div className={styles.aboutColumn}>
          <div className={styles.footerPhotoContainer}>
            <Image
              src="/cezarmachado.png"
              alt="Foto de Cezar Machado"
              width={80}
              height={80}
              className={styles.footerPhoto}
            />
            <Image
              src="/senior.png"
              alt="Selo de Licenciado Sênior"
              width={100}
              height={100}
              className={styles.footerSeniorBadge}
            />
          </div>
          <h3>Cezar Machado</h3>
          <p>Licenciado Sênior iGreen Energy, ajudando pessoas e empresas a economizar com energia limpa e sustentável.</p>
        </div>

        {/* Coluna 2: Contato */}
        <div className={styles.footerColumn}>
          <h4>Contato</h4>
          <ul>
            {/* Substitua pelo seu link do WhatsApp */}
            <li><a href="https://wa.me/5541997694828" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            {/* Substitua pelo seu email */}
            <li><a href="mailto:cezarmachado@email.com">Email</a></li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div className={styles.footerColumn}>
          <h4>Siga-me</h4>
          <div className={styles.socialIcons}>
            {/* Substitua # pelos links reais das suas redes sociais */}
            <a href="#" target="_blank" rel="noopener noreferrer" title="Instagram">
              <Image src={instagramIconUrl} alt="Instagram" width={32} height={32} className={styles.socialIconImage} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="Facebook">
              <Image src={facebookIconUrl} alt="Facebook" width={32} height={32} className={styles.socialIconImage} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Image src={linkedinIconUrl} alt="LinkedIn" width={32} height={32} className={styles.socialIconImage} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© {currentYear} Cezar Machado. Todos os direitos reservados.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '8px', opacity: 0.7 }}>
          Este é um site de um licenciado independente iGreen Energy. A marca iGreen Energy é propriedade da iGreen Energy S/A.
        </p>
      </div>
    </footer>
   );
};

export default Footer;