// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NotFound.module.scss';

// Composant NotFound pour afficher une page d'erreur 404
const NotFound = () => {
  return (
    <div className={styles.page404}>
      {/* Image d'erreur 404 */}
      <img src="/img/404.webp" alt="erreur 404" className={styles.e404} />
      <p className={styles.txt}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      {/* Lien pour retourner à la page d'accueil */}
      <Link to="/" className={styles.link}>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default NotFound;
