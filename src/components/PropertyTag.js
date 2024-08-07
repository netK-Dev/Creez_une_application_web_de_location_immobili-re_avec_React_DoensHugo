// src/components/PropertyTag.js
import React from 'react';
import style from '../styles/PropertyTag.module.scss';

// Composant pour afficher les tags d'une propriété
const PropertyTag = ({ tags }) => {
  return (
    <div className={style.tagContainer}>
      {tags.map((tag, index) => (
        <div key={index} className={style.tag}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default PropertyTag;
