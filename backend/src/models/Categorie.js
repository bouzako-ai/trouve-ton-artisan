// Modèle categorie correspondant à la table "categories" dans la base de données
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Définition du modèle Categorie
const Categorie = sequelize.define(
  "Categorie", // Nom du modèle
  {
    // Définition des colonnes de la table
    id_categorie: {
      type: DataTypes.INTEGER, // Type de données : entier
      primaryKey: true, // Clé primaire
      autoIncrement: true, // Auto-incrémentation
    },
    nom: {
      type: DataTypes.STRING(50), // Type de données : chaîne de caractères
      allowNull: false, // Ne peut pas être nul
    },
  },
  {
    tableName: "categorie", // Nom de la table dans la base de données
    timestamps: false, // Pas de colonnes createdAt et updatedAt
  },
);
module.exports = Categorie;
