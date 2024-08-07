// src/components/Owner.js
import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/Owner.module.scss';

// Composant pour afficher les informations du propriétaire
const Owner = ({ owner }) => {
  // Si le propriétaire n'est pas défini, ne rien afficher
  if (!owner) {
    return null;
  }

  return (
    <div className={style.ownerContainer}>
      <p className={style.ownerName}>{owner.name}</p>
      <div className={style.imgContainer}>
        <img
          src={owner.picture}
          alt={`Profil de ${owner.name}`}
          className={style.ownerImg}
        />
      </div>
    </div>
  );
};

// Validation des types de propriétés
Owner.propTypes = {
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default Owner;
