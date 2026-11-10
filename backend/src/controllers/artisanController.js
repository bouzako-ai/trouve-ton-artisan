// Controller des artisans

const { Artisan } = require("../models");
const { Specialite } = require("../models");
const { Op } = require("sequelize"); // Importation de l'opérateur "like" pour la recherche d'artisans par nom

// Récupère les 3 artisans du mois
const getTopArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true },
      include: [{ model: Specialite, as: "specialite" }],
      limit: 3,
    });
    res.status(200).json(artisans);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des artisans" });
  }
};

// Les artisans d'une catégorie spécifique par un clic sur le menu
const getArtisansByCategorie = async (req, res) => {
  try {
    const idCategorie = req.params.id; // Récupère l'ID de la catégorie depuis les paramètres de la requête

    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          as: "specialite",
          where: { id_categorie: idCategorie },
        },
      ], // Filtre les artisans par la catégorie spécifiée
    });
    res.status(200).json(artisans);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des artisans" });
  }
};

// La fiche d'un artisan

const getArtisanById = async (req, res) => {
  try {
    const idArtisan = req.params.id; // Récupère l'ID de l'artisan depuis les paramètres de la requête
    const artisan = await Artisan.findByPk(idArtisan, {
      include: [{ model: Specialite, as: "specialite" }],
    });
    if (!artisan) {
      return res.status(404).json({ message: "Artisan non trouvé" }); // Si l'artisan n'existe pas, renvoie une réponse 404 (non trouvé)
    }
    res.status(200).json(artisan);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de l'artisan" });
  }
};

// Recheche d'artisans par leur nom dans la barre de recherche du site

const searchArtisans = async (req, res) => {
  try {
    const nom = req.query.nom; // Récupère le nom de l'artisan depuis les paramètres de la requête
    const artisans = await Artisan.findAll({
      where: {
        nom: { [Op.like]: `%${nom}%` }, // Le nom contient le texte tapé dans la barre de recherche
      },
      include: [{ model: Specialite, as: "specialite" }], // Ajoute la spécialité
    });
    res.status(200).json(artisans);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la recherche des artisans" });
  }
};

module.exports = {
  getTopArtisans,
  getArtisansByCategorie,
  getArtisanById,
  searchArtisans,
};
