// src/pages/PropertyDetail.js
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import style from '../styles/PropertyDetail.module.scss';
import Slider from '../components/Slider';
import PropertyTag from '../components/PropertyTag';
import StarRating from '../components/StarRating';
import Owner from '../components/Owner';
import Collapse from '../components/Collapse';

// Composant PropertyDetail pour afficher les détails d'une propriété
const PropertyDetail = ({ properties }) => {
  const { id } = useParams(); // Récupère l'ID de la propriété à partir des paramètres de l'URL
  const property = properties.find((p) => p.id === id); // Trouve la propriété correspondante dans la liste

  useEffect(() => {
    // S'assurer que la fenêtre se positionne en haut lors du chargement du composant
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    // Redirige vers la page 404 si la propriété n'est pas trouvée
    return <Navigate to="/404" />;
  }

  return (
    <div className={style.content}>
      {/* Composant Slider pour afficher les images de la propriété */}
      <Slider images={property.pictures} />

      <div className={style.propertyInfo1}>
        <div className={style.titleLocTags}>
          <h1 className={style.title}>{property.title}</h1>
          <p className={style.txt}>{property.location}</p>
          {/* Composant PropertyTag pour afficher les tags de la propriété */}
          <PropertyTag tags={property.tags} />
        </div>

        <div className={style.ownerAndStars}>
          {/* Composant Owner pour afficher les informations du propriétaire */}
          <Owner owner={property.host} />
          {/* Composant StarRating pour afficher la note de la propriété */}
          <StarRating rating={property.rating} />
        </div>
      </div>

      <div className={style.propertyInfo2}>
        {/* Composant Collapse pour afficher la description de la propriété */}
        <Collapse title="Description" width="582px">
          <p>{property.description}</p>
        </Collapse>
        {/* Composant Collapse pour afficher les équipements de la propriété */}
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
