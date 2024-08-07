// src/utils/dataService.js
export async function loadData() {
  try {
    const response = await fetch('/dataTest.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Fonction pour le préchargement des images
export function preloadImages(data) {
  const images = [];
  data.forEach((item) => {
    images.push(item.cover);
    images.push(...item.pictures);
    images.push(item.host.picture);
  });

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}
