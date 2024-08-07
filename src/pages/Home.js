// src/pages/Home.js
import React from 'react';
import ImageBanner from '../components/ImageBanner';
import HomeList from '../components/HomeList';

// Composant Home pour la page d'accueil
const Home = ({ data }) => {
  return (
    <div>
      {/* Bannière avec image et texte superposé */}
      <ImageBanner
        imageSrc="/img/IMG_Home.webp"
        alt="Vue côtière de falaises rocheuses avec des arbres verts sur le dessus, s'avançant dans une mer agitée, avec des vagues déferlant sur une petite plage."
        marginTop="50px"
        opacity={0.6}
        text="Chez vous, partout et ailleurs"
      />
      {/* Liste des propriétés */}
      <HomeList properties={data} />
    </div>
  );
};

export default Home;
