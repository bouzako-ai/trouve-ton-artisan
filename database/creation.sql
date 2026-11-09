-- Script création de la base "trouve_ton_artisan"
-- Supprime la base si déjà existante pour relancer le script
DROP DATABASE IF EXISTS trouve_ton_artisan;

-- Création de la base avec encodage
CREATE DATABASE trouve_ton_artisan
CHARACTER SET utf8mb4;

USE trouve_ton_artisan;

-- Création table des catégories
CREATE TABLE categorie(
    id_categorie INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_categorie)
);

-- Création table specialite
CREATE TABLE specialite(
    id_specialite INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_specialite),
    id_categorie INT NOT NULL,
    FOREIGN KEY (id_categorie) REFERENCES categorie (id_categorie)
);

-- Création table artisans
CREATE TABLE artisan(
   id_artisan INT NOT NULL AUTO_INCREMENT,
   nom VARCHAR(100) NOT NULL,
   note DECIMAL(2,1) NOT NULL,
   ville VARCHAR(100) NOT NULL,
   a_propos TEXT NOT NULL,
   email VARCHAR(150) NOT NULL,
   site_web VARCHAR(255),    
   top BOOLEAN NOT NULL,
   id_specialite INT NOT NULL,
   PRIMARY KEY (id_artisan),
   FOREIGN KEY (id_specialite) REFERENCES specialite (id_specialite)   
);
