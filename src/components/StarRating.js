// src/components/StarRating.js
import React from 'react';
import filledStar from '../assets/StarActive.svg';
import emptyStar from '../assets/StarEmpty.svg';
import styles from '../styles/StarRating.module.scss';

const StarRating = ({ rating }) => {
  const maxRating = 5; // Nombre maximum d'étoiles

  // Convertir la note en nombre entier
  const numericRating = parseInt(rating, 10);

  // Générer les étoiles
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    // Ajouter une étoile remplie ou vide selon la note
    stars.push(
      <img
        key={i}
        src={i <= numericRating ? filledStar : emptyStar}
        alt="Etoile de notation"
        className={styles.star}
      />
    );
  }

  return <div className={styles.starRating}>{stars}</div>;
};

export default StarRating;
