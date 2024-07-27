// src/pages/PropertyDetail.js
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PropertyTag from '../components/PropertyTag';
import StarRating from '../components/StarRating';
import Owner from '../components/Owner';

const PropertyDetail = ({ properties }) => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    // Redirige vers la page 404
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <h1>{property.title}</h1>
      <PropertyTag tags={property.tags} />
      <StarRating rating={property.rating} />
      <Owner owner={property.host} />
    </div>
  );
};

export default PropertyDetail;
