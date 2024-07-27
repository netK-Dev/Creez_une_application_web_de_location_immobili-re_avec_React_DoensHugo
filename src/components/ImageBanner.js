import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Banner.module.scss';

const ImageBanner = ({
  imageSrc,
  alt,
  marginTop = '38px',
  height = '223px', // Paramètre par défaut
  opacity = 0.6, // Paramètre par défaut
  text = '', // Paramètre par défaut
}) => {
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
  };

  return (
    <div className={styles.contImg} style={{ marginTop, height }}>
      <img src={imageSrc} className={styles.img} alt={alt} />
      <div className={styles.overlay} style={overlayStyle}></div>
      {text && <div className={styles.text}>{text}</div>}
    </div>
  );
};

ImageBanner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  marginTop: PropTypes.string,
  height: PropTypes.string,
  opacity: PropTypes.number,
  text: PropTypes.string,
};

export default ImageBanner;
