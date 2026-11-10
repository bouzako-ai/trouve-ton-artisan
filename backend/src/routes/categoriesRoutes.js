// Routes des catégories

const express = require("express");
const router = express.Router();

const { getAllCategories } = require("../controllers/categorieController");
const { getArtisansByCategorie } = require("../controllers/artisanController");

// Route pour récupérer toutes les catégories avec GET/API/Categories
router.get("/", getAllCategories);

// Route pour récupérer les artisans d'une catégorie spécifique avec GET/API/Categories/:id/artisans
router.get("/:id/artisans", getArtisansByCategorie);

module.exports = router;
