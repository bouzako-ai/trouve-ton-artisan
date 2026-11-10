// Controller des catégories

const { Categorie } = require("../models");

// Récupère toutes les catégories (utilisées pour le menu du site)
const getAllCategories = async (req, res) => {
  try {
    // Lecture asynchrone de toutes les catégories depuis la base de données, triées par nom
    const categories = await Categorie.findAll({
      order: [["nom", "ASC"]],
    });

    // Réponse 200 (succès) avec les données en JSON
    res.status(200).json(categories);
  } catch (error) {
    // En cas de problème : réponse 500
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des catégories" });
  }
};

module.exports = { getAllCategories };
