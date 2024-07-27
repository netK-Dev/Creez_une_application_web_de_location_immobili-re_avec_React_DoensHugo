// src/pages/PropertyDetail.js
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import style from '../styles/PropertyDetail.module.scss';
import Slider from '../components/Slider';
import PropertyTag from '../components/PropertyTag';
import StarRating from '../components/StarRating';
import Owner from '../components/Owner';
import Collapse from '../components/Collapse';

const PropertyDetail = ({ properties }) => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  useEffect(() => {
    // S'assurer que la fenêtre se positionne en haut lors du chargement du composant
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    // Redirige vers la page 404
    return <Navigate to="/404" />;
  }

  return (
    <div className={style.content}>
      <Slider images={property.pictures} />

      <div className={style.propertyInfo1}>
        <div className={style.titleLocTags}>
          <h1 className={style.title}>{property.title}</h1>
          <p className={style.txt}>{property.location}</p>
          <PropertyTag tags={property.tags} />
        </div>

        <div className={style.ownerAndStars}>
          <Owner owner={property.host} />
          <StarRating rating={property.rating} />
        </div>
      </div>

      <div className={style.propertyInfo2}>
        <Collapse title="Description" width="582px">
          <p>{property.description}</p>
        </Collapse>
        <Collapse title="Équipements" width="582px">
          {property.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default PropertyDetail;
