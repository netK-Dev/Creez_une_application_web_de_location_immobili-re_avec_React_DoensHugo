import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/Owner.module.scss';

const Owner = ({ owner }) => {
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

Owner.propTypes = {
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default Owner;
