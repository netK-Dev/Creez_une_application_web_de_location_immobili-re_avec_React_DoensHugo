// src/App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import PropertyDetail from './pages/PropertyDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.scss';
import { loadData, preloadImages } from './utils/dataService';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apartmentsData = await loadData(); // Charger les données des appartements
        setData(apartmentsData); // Mettre à jour l'état avec les données chargées
        preloadImages(apartmentsData); // Précharger les images des appartements
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page">
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/property/:id"
            element={<PropertyDetail properties={data} />}
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
