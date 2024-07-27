// src/pages/PropertyDetail.js
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const PropertyDetail = ({ properties }) => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    // Redirige vers la page 404
    return <Navigate to="/404" />;
  }

  return <div></div>;
};

export default PropertyDetail;
