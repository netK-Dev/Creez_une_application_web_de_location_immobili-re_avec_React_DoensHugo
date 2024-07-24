import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Banner.module.scss';

const ImageBanner = ({ imageSrc, alt, marginTop, opacity, text }) => {
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
  };

  return (
    <div className={styles.contImg} style={{ marginTop }}>
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
  opacity: PropTypes.number,
  text: PropTypes.string,
};

ImageBanner.defaultProps = {
  marginTop: '38px',
  opacity: 0.3,
  text: '',
};

export default ImageBanner;
