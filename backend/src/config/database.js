// Configuration de la connexion à la base MySQL

// Charge les variables du fichier .env
require("dotenv").config();

const { Sequelize } = require("sequelize");

// Création de Sequelize à partir des variables d'environnement
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql", // Type de base de données utilisé
    logging: false, // Désactive l'affichage des requêtes SQL dans la console
  },
);

module.exports = sequelize;
