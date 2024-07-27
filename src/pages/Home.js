// src/pages/Home.js
import React from 'react';
import ImageBanner from '../components/ImageBanner';
import HomeList from '../components/HomeList';

const Home = ({ data }) => {
  return (
    <div>
      <ImageBanner
        imageSrc="/img/IMG_Home.webp"
        alt="Vue côtière de falaises rocheuses avec des arbres verts sur le dessus, s'avançant dans une mer agitée, avec des vagues déferlant sur une petite plage."
        marginTop="50px"
        opacity={0.6}
        text="Chez vous, partout et ailleurs"
      />
      <HomeList properties={data} />
    </div>
  );
};

export default Home;
