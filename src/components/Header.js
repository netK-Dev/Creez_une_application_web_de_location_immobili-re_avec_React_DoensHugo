import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/img/LOGO.webp" alt="Logo" className={styles.logo} />
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Apropos">À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
