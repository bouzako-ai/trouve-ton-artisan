// Configuration de l'application Express

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const artisanRoutes = require("./routes/artisansRoutes");
const categorieRoutes = require("./routes/categoriesRoutes");

app.use("/api/artisans", artisanRoutes);
app.use("/api/categories", categorieRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvée" });
});

module.exports = app;
