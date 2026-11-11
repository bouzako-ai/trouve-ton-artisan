// Configuration de l'application Express

const express = require("express");
const cors = require("cors");
const app = express();
const apiKeyMiddleware = require("./middlewares/apiKey");

const artisanRoutes = require("./routes/artisansRoutes");
const categorieRoutes = require("./routes/categoriesRoutes");

app.use(cors({ origin: process.env.FRONTEND_URL })); // Autorise uniquement le frontend à accéder à l'API
app.use(apiKeyMiddleware); // Applique le middleware de vérification de la clé API
app.use("/api/artisans", artisanRoutes);
app.use("/api/categories", categorieRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvée" });
});

module.exports = app;
