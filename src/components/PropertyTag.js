import React from 'react';
import style from '../styles/PropertyTag.module.scss';

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
