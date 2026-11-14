// Configuration de l'application Express

const path = require("path");
const express = require("express");
const cors = require("cors");
const apiKeyMiddleware = require("./middlewares/apiKey");
const artisanRoutes = require("./routes/artisansRoutes");
const categorieRoutes = require("./routes/categoriesRoutes");

const app = express();

// Autorise uniquement le frontend à accéder à l'API
app.use(cors({ origin: process.env.FRONTEND_URL }));

// Clé d'API vérifiée seulement pour les adresses /api
app.use("/api", apiKeyMiddleware);

// Routes de l'API
app.use("/api/artisans", artisanRoutes);
app.use("/api/categories", categorieRoutes);

// En ligne : envoie les fichiers du site React (dossier backend/public)
const dossierSite = path.join(__dirname, "../public");
app.use(express.static(dossierSite));

// Toutes les autres adresses
app.use((req, res) => {
  // Adresse d'API inconnue : erreur 404 en JSON
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ message: "Route non trouvée" });
  }
  // Adresse du site (ex : /artisan/5) : on envoie le site, React Router affiche la bonne page
  res.sendFile(path.join(dossierSite, "index.html"));
});

module.exports = app;
