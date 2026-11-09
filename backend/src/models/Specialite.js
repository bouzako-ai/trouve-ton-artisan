// Modèle specialite correspondant à la table "specialite" dans la base de données

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Définition du modèle Specialite
const Specialite = sequelize.define(
  "Specialite", // Nom du modèle
  {
    // Définition des colonnes de la table
    id_specialite: {
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
    tableName: "specialite", // Nom de la table dans la base de données
    timestamps: false, // Pas de colonnes createdAt et updatedAt
  },
);
module.exports = Specialite;
