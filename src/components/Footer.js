// src/components/Footer.js
import React from 'react';
import styles from '../styles/Footer.module.scss';

// Composant Footer pour afficher le pied de page du site
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      {/* Logo du pied de page */}
      <img
        src="/img/LogoFooter.svg"
        alt="Logo Footer"
        className={styles.logo}
      />
      {/* Texte de copyright */}
      <p className={styles.text}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
