// Page d'accueil du site

import { useEffect, useState } from "react";
import { getTopArtisans } from "../services/api";
import CardArtisan from "../components/CardArtisan";

// 4 étapes demandées par l'énoncé
const etapes = [
  "Choisir la catégorie d'artisanat dans le menu.",
  "Choisir un artisan.",
  "Le contacter via le formulaire de contact.",
  "Une réponse sera apportée sous 48h.",
];

function PageAccueil() {
  const [topArtisans, setTopArtisans] = useState([]); // Liste des artisans les mieux notés
  const [erreur, setErreur] = useState(""); // Message d'erreur si l'API ne répond pas

  // Récupération des artisans les mieux notés depuis l'API au chargement du composant
  useEffect(() => {
    const chargerTopArtisans = async () => {
      try {
        const data = await getTopArtisans();
        setTopArtisans(data);
      } catch (error) {
        console.error("Erreur lors du chargement des artisans :", error);
        setErreur("Impossible de charger les artisans du mois.");
      }
    };

    chargerTopArtisans();
  }, []);

  return (
    <>
      {/* Référencement : titre et description de la page */}
      <title>Trouve ton artisan - Artisans d'Auvergne-Rhône-Alpes</title>
      <meta
        name="description"
        content="Trouvez un artisan en Auvergne-Rhône-Alpes : bâtiment, services, fabrication, alimentation. Contactez-le en ligne, réponse sous 48h."
      />

      {/* Comment trouver mon artisan*/}
      <section className="container py-5">
        <h1 className="h2 text-secondary mb-4">
          Comment trouver mon artisan ?
        </h1>
        <ol className="list-unstyled">
          {etapes.map((etape, index) => (
            <li key={index} className="d-flex align-items-center mb-3">
              <span className="etape-numero" aria-hidden="true">
                {index + 1}
              </span>

              <span>
                <span className="visually-hidden">Etape{index + 1} :</span>
                {etape}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Artisans du mois*/}

      <section className="bg-bleu-clair py-5">
        <div className="container">
          <h2 className="text-secondary mb-4">Les artisans du mois</h2>

          {erreur && <p className="text-danger">{erreur}</p>}

          <div className="row g-4">
            {topArtisans.map((artisan) => (
              <div key={artisan.id_artisan} className="col-12 col-md-4">
                <CardArtisan artisan={artisan} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default PageAccueil;
