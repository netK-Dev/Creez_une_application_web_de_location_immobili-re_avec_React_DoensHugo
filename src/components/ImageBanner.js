// src/components/ImageBanner.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Banner.module.scss';

// Composant ImageBanner pour afficher une bannière avec une image et un texte en superposition
const ImageBanner = ({
  imageSrc,
  alt,
  marginTop = '38px',
  opacity = 0.6,
  text = '',
}) => {
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
  };

  return (
    <div className={styles.contImg} style={{ marginTop }}>
      {/* Image de la bannière */}
      <img src={imageSrc} className={styles.img} alt={alt} />
      {/* Overlay semi-transparent */}
      <div className={styles.overlay} style={overlayStyle}></div>
      {/* Texte superposé */}
      {text && <div className={styles.text}>{text}</div>}
    </div>
  );
};

// Définition des types de props et des valeurs par défaut
ImageBanner.propTypes = {
  imageSrc: PropTypes.string.isRequired, // URL de l'image, requis
  alt: PropTypes.string.isRequired, // Texte alternatif pour l'image, requis
  marginTop: PropTypes.string, // Marge supérieure, optionnel
  opacity: PropTypes.number, // Opacité de l'overlay, optionnel
  text: PropTypes.string, // Texte superposé, optionnel
};

export default ImageBanner;
