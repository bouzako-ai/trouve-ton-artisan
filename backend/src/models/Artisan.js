// Modèle artisan correspondant à la table "artisan" dans la base de données

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Définition du modèle Artisan
const Artisan = sequelize.define(
  "Artisan", // Nom du modèle
  {
    // Définition des colonnes de la table
    id_artisan: {
      type: DataTypes.INTEGER, // Type de données : entier
      primaryKey: true, // Clé primaire
      autoIncrement: true, // Auto-incrémentation
    },
    nom: {
      type: DataTypes.STRING(100), // Type de données : chaîne de caractères
      allowNull: false, // Ne peut pas être nul
    },
    note: {
      type: DataTypes.DECIMAL(2, 1), // Type de données : nombre décimal
      allowNull: false, // Ne peut pas être nul
    },
    ville: {
      type: DataTypes.STRING(100), // Type de données : chaîne de caractères
      allowNull: false, // Ne peut pas être nul
    },
    a_propos: {
      type: DataTypes.TEXT, // Type de données : texte
      allowNull: true, // Peut être nul
    },
    site_web: {
      type: DataTypes.STRING(255), // Type de données : chaîne de caractères
      allowNull: true, // Peut être nul
    },
    email: {
      type: DataTypes.STRING(150), // Type de données : chaîne de caractères
      allowNull: false, // Ne peut pas être nul
    },
    top: {
      type: DataTypes.BOOLEAN, // Type de données : valeur booléenne, true = artisan du mois
      allowNull: false, // Ne peut pas être nul
    },
    id_specialite: {
      type: DataTypes.INTEGER, // Type de données : entier
      allowNull: false, // Ne peut pas être nul
    },
  },
  {
    tableName: "artisan", // Nom de la table dans la base de données
    timestamps: false, // Pas de colonnes createdAt et updatedAt
  },
);
module.exports = Artisan;
