import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <img
        src="/img/LogoFooter.svg"
        alt="Logo Footer"
        className={styles.logo}
      />
      <p className={styles.text}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
