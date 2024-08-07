// src/components/Collapse.jss
import React, { useState } from 'react';
import Arrow from '../assets/arrow.svg'; // Une seule image pour la flèche
import styles from '../styles/Collapse.module.scss';

// Composant Collapse pour afficher du contenu pliable/dépliable
const Collapse = ({ title, children, width }) => {
  // Déclare une variable d'état pour suivre si le contenu est plié ou non
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Fonction pour basculer l'état de plié/déplié
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${styles.collapseContainer} ${styles.responsiveCollapse}`}
      style={{ maxWidth: width }} // Applique la largeur maximale fournie en prop
    >
      <div className={styles.cont} onClick={toggleCollapse}>
        <span>{title}</span>
        <span
          className={`${styles.arrow} ${isCollapsed ? '' : styles.rotated}`} // Ajoute une classe pour la rotation si déplié
        >
          <img src={Arrow} alt="Toggle arrow" />
        </span>
      </div>
      <div
        className={`${styles.content} ${isCollapsed ? '' : styles.expanded}`} // Ajoute une classe pour l'extension si déplié
      >
        <div className={styles.innerContent}>{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
