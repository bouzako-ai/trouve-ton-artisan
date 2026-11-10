// =============================================
// Point d'entrée de l'API
// =============================================

require("dotenv").config();
const app = require("./src/app");
const { sequelize } = require("./src/models");

const PORT = process.env.PORT || 3000;

// Démarre le serveur et se connecte à la base de données
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Vérifie la connexion à la base de données
    console.log("Connexion à la base de données réussie.");

    //Démarre le serveur Express
    app.listen(PORT, () => {
      console.log(`API démarrée sur le port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Impossible de se connecter à la base de données :", error);
    process.exit(1); // Arrête le serveur en cas d'erreur de connexion à la base de données
  }
};

startServer();
