// =============================================
// Point d'entrée de l'API
// =============================================

require("dotenv").config();
const sequelize = require("./src/config/database");

// Fonction asynchrone de démarrage
const start = async () => {
  try {
    // Vérifie que la connexion à la base fonctionne
    await sequelize.authenticate();
    console.log("Connexion à la base de données réussie");

    // Test temporaire des modèles : compte les artisans en base
    const { Artisan } = require("./src/models");
    const total = await Artisan.count();
    console.log(`${total} artisans trouvés en base`);
  } catch (error) {
    console.error("Impossible de se connecter à la base :", error.message);
    process.exit(1); // Arrête le programme en cas d'échec
  }
};

start();
