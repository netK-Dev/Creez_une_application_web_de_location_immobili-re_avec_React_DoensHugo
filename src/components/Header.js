// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.scss';

// Composant Header pour afficher l'en-tête du site
const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo du site */}
      <img src="/img/LOGO.webp" alt="Logo" className={styles.logo} />
      <nav className={styles.nav}>
        <ul>
          <li>
            {/* Lien de navigation vers la page d'accueil */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Accueil
            </NavLink>
          </li>
          <li>
            {/* Lien de navigation vers la page À Propos */}
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
