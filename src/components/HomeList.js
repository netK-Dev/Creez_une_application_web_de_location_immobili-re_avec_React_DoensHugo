// src/components/HomeList.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomeListing.module.scss';

// Composant HomeList pour afficher une liste de propriétés
const HomeList = ({ properties }) => {
  return (
    <div className={styles.listContainer}>
      {properties.map((property) => (
        // Chaque propriété est rendue comme un élément de la liste
        <div key={property.id} className={styles.listItem}>
          {/* Lien vers la page de détail de la propriété */}
          <Link to={`/property/${property.id}`} className={styles.link}>
            <div
              className={styles.listImage}
              // Affiche l'image de couverture de la propriété en arrière-plan
              style={{ backgroundImage: `url(${property.cover})` }}
            >
              {/* Titre de la propriété */}
              <h2 className={styles.listTitle}>{property.title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeList;
