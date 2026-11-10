// Routes des artisans

const express = require("express");
const router = express.Router();

const {
  getTopArtisans,
  getArtisanById,
  searchArtisans,
} = require("../controllers/artisanController");

// Route pour récupérer les 3 artisans du mois avec GET/API/Artisans/top
router.get("/top", getTopArtisans);

// Route pour rechercher des artisans par nom avec GET/API/Artisans/search?nom=nomArtisan
router.get("/search", searchArtisans);

// Route pour récupérer un artisan spécifique avec GET/API/Artisans/:id
router.get("/:id", getArtisanById);

module.exports = router;
