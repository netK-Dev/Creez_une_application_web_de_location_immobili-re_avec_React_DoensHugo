// src/pages/PropertyDetail.js
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PropertyTag from '../components/PropertyTag';

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
    </div>
  );
};

export default PropertyDetail;
