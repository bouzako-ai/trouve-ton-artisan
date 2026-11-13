// Service de communication avec l'API backend

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Fonction qui appelle l'API en envoyant la clé et qui renvoie les données JSON
const fetchAPI = async (chemin) => {
  const response = await fetch(`${API_URL}${chemin}`, {
    headers: { "x-api-key": API_KEY }, // La clé qui donne accès à l'API
  });

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`);
  }

  return response.json();
};

// Ici on exporte une fonction pour chaque route de l'API que l'on souhaite utiliser dans le frontend
export const getCategories = () => fetchAPI("/categories");
export const getTopArtisans = () => fetchAPI("/artisans/top");
export const getArtisansByCategory = (id) =>
  fetchAPI(`/categories/${id}/artisans`);
export const searchArtisans = (nom) =>
  fetchAPI(`/artisans/search?nom=${encodeURIComponent(nom)}`);
export const getArtisanById = (id) => fetchAPI(`/artisans/${id}`);
