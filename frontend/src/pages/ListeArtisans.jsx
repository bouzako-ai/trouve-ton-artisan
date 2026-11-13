// Page liste des artisans

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {
  getCategories,
  getArtisansByCategory,
  searchArtisans,
} from "../services/api";
import CardArtisan from "../components/CardArtisan";

function ListeArtisans() {
  const { id } = useParams(); // L'id de la catégorie dans l'URL (/categorie/2)
  const [searchParams] = useSearchParams(); // Les paramètres après le ? (/recherche?nom=pain)
  const nom = searchParams.get("nom");

  const [artisans, setArtisans] = useState([]); // Les artisans à afficher
  const [titre, setTitre] = useState(""); // Le titre de la page
  const [chargement, setChargement] = useState(true); // true pendant l'appel à l'API
  const [erreur, setErreur] = useState(""); // Message si l'API ne répond pas

  // Recharge les artisans à chaque changement de catégorie ou de recherche
  useEffect(() => {
    const chargerArtisans = async () => {
      setChargement(true);
      setErreur("");
      try {
        if (id) {
          // Cas 1 : une catégorie a été choisie dans le menu
          const data = await getArtisansByCategory(id);
          const categories = await getCategories();
          const categorie = categories.find(
            (c) => c.id_categorie === Number(id),
          );
          setTitre(categorie ? categorie.nom : "Catégorie inconnue");
          setArtisans(data);
        } else {
          // Cas 2 : une recherche a été faite dans le header
          const data = await searchArtisans(nom || "");
          setTitre(`Résultats pour « ${nom} »`);
          setArtisans(data);
        }
      } catch (error) {
        console.error(error);
        setErreur("Impossible de charger les artisans.");
      } finally {
        setChargement(false);
      }
    };
    chargerArtisans();
  }, [id, nom]);

  return (
    <section className="bg-bleu-clair py-5 h-100">
      {/* Référencement : titre et description de la page */}
      <title>{`${titre} - Trouve ton artisan`}</title>
      <meta
        name="description"
        content={`${titre} : trouvez un artisan en Auvergne-Rhône-Alpes et contactez-le en ligne.`}
      />
      <div className="container">
        <h1 className="h2 text-secondary mb-4">{titre}</h1>

        {chargement && <p>Chargement...</p>}
        {erreur && <p className="text-danger">{erreur}</p>}
        {!chargement && !erreur && artisans.length === 0 && (
          <p>Aucun artisan trouvé.</p>
        )}

        <div className="row g-4">
          {artisans.map((artisan) => (
            <div key={artisan.id_artisan} className="col-12 col-md-6 col-lg-4">
              <CardArtisan artisan={artisan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListeArtisans;
