// src/utils/dataService.js

// Fonction pour charger les données à partir d'un fichier JSON
export async function fetchData() {
  try {
    const response = await fetch('/dataTest.json'); // Effectue une requête pour obtenir les données JSON
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // Gère les erreurs HTTP
    }
    const jsonData = await response.json(); // Convertit la réponse en JSON
    return jsonData;
  } catch (error) {
    console.log(error);
    throw error; // Relance l'erreur pour être gérée ailleurs
  }
}

// Fonction pour le préchargement des images
export function preloadImages(data) {
  const images = [];
  data.forEach((item) => {
    images.push(item.cover); // Ajoute l'image de couverture
    images.push(...item.pictures); // Ajoute toutes les images de l'appartement
    images.push(item.host.picture); // Ajoute l'image du propriétaire
  });

  images.forEach((src) => {
    const img = new Image();
    img.src = src; // Précharge l'image
  });
}
