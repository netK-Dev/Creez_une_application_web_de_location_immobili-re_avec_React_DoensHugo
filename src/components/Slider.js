import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Slider.module.scss';
import leftArrow from '../assets/previous.svg';
import rightArrow from '../assets/next.svg';

// Composant Slider pour afficher et naviguer entre les images
const Slider = ({ images }) => {
  // État pour suivre l'index de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour naviguer vers l'image précédente
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // Fonction pour naviguer vers l'image suivante
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className={styles.sliderContainer}>
      {/* Affichage de l'image actuelle */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.sliderImage}
      />

      {/* Affiche les contrôles de navigation et l'indicateur seulement s'il y a plus d'une image */}
      {images.length > 1 && (
        <>
          <div className={styles.sliderControls}>
            {/* Bouton pour aller à l'image précédente */}
            <button className={styles.sliderButton} onClick={prevSlide}>
              <img src={leftArrow} alt="Précédent" />
            </button>
            {/* Bouton pour aller à l'image suivante */}
            <button className={styles.sliderButton} onClick={nextSlide}>
              <img src={rightArrow} alt="Suivant" />
            </button>
          </div>
          {/* Indicateur de la diapositive actuelle */}
          <p className={styles.sliderIndicator}>
            {currentIndex + 1}/{images.length}
          </p>
        </>
      )}
    </div>
  );
};

// PropTypes pour vérifier que la prop images est un tableau de chaînes et est obligatoire
Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
