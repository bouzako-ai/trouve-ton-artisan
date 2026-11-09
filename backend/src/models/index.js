// Regroupement des modèles et relations entre eux MLD

const sequelize = require("../config/database");
const Artisan = require("./Artisan");
const Categorie = require("./Categorie");
const Specialite = require("./Specialite");

// Définition des relations entre les modèles
// Un artisan appartient à une spécialité (1,1)
Artisan.belongsTo(Specialite, {
  foreignKey: "id_specialite", // Clé étrangère dans la table artisan
  as: "specialite", // Nom pour accéder à la spécialité d'un artisan
});

// Une spécialité peut avoir plusieurs artisans (1,n)
Specialite.hasMany(Artisan, {
  foreignKey: "id_specialite", // Clé étrangère dans la table artisan
  as: "artisans", // Nom pour accéder aux artisans d'une spécialité
});

// Une spécialité appartient à une catégorie (1,1)
Specialite.belongsTo(Categorie, {
  foreignKey: "id_categorie", // Clé étrangère dans la table specialite
  as: "categorie", // Nom pour accéder à la catégorie d'une spécialité
});

// Une catégorie peut avoir plusieurs spécialités (1,n)
Categorie.hasMany(Specialite, {
  foreignKey: "id_categorie", // Clé étrangère dans la table specialite
  as: "specialites", // Nom pour accéder aux spécialités d'une catégorie
});

module.exports = {
  sequelize,
  Artisan,
  Categorie,
  Specialite,
};
