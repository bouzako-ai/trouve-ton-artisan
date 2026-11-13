// Page de la fiche d'un artisan

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getArtisanById } from "../services/api";
import Etoiles from "../components/Etoiles";

const formulaireVide = { nom: "", email: "", objet: "", message: "" };

function FicheArtisan() {
  const { id } = useParams(); // Id de l'artisan dans l'url
  const navigate = useNavigate();
  const [artisan, setArtisan] = useState(null); // L'artisan reçu de l'API
  const [erreur, setErreur] = useState(""); // Message si l'API ne répond pas
  const [formulaire, setFormulaire] = useState(formulaireVide); // Champs du formulaire
  const [envoye, setEnvoye] = useState(false); // true après validation du formulaire

  useEffect(() => {
    const chargerArtisan = async () => {
      try {
        const data = await getArtisanById(id);
        setArtisan(data);
      } catch (error) {
        console.error(error);
        // Artisan inexistant : on affiche la page 404
        if (error.message.includes("404")) {
          navigate("/page-non-trouvee", { replace: true });
        } else {
          setErreur("Impossible de charger cet artisan.");
        }
      }
    };
    chargerArtisan();
  }, [id, navigate]);

  // Met à jour le champ modifié
  const handleChange = (e) => {
    setFormulaire({ ...formulaire, [e.target.name]: e.target.value });
  };

  // Validation du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Contenu de l'email
    const sujet = formulaire.objet;
    const corps = `Message de ${formulaire.nom} (${formulaire.email}) :\n\n${formulaire.message}`;

    // Ouvre la messagerie, avec l'email de l'artisan comme destinataire
    window.location.href = `mailto:${artisan.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;

    setEnvoye(true); // Affiche le message de confirmation
    setFormulaire(formulaireVide); // Vide les champs
  };

  if (erreur) {
    return <p className="container py-5 text-danger">{erreur}</p>;
  }

  if (!artisan) {
    return <p className="container py-5">Chargement...</p>;
  }

  return (
    <>
      {/* Référencement : titre et description de la page */}
      <title>{`${artisan.nom} - ${artisan.specialite.nom} à ${artisan.ville} - Trouve ton artisan`}</title>
      <meta
        name="description"
        content={`${artisan.nom}, ${artisan.specialite.nom} à ${artisan.ville}. Consultez sa fiche et contactez-le en ligne.`}
      />

      {/* Informations de l'artisan */}
      <section className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-md-5">
            <div
              className="fiche-image"
              role="img"
              aria-label={`Image de ${artisan.nom}`}
            >
              <i className="bi-tools" aria-hidden="true"></i>
            </div>
          </div>

          <div className="col-12 col-md-7">
            <h1 className="text-secondary">{artisan.nom}</h1>
            <Etoiles note={artisan.note} />
            <p className="mb-1">{artisan.specialite.nom}</p>
            <p>{artisan.ville}</p>

            {/* Site web : affiché seulement si l'artisan en a un */}
            {artisan.site_web && (
              <a
                href={artisan.site_web}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site web de l'artisan
                <span className="visually-hidden">
                  {" "}
                  (s'ouvre dans un nouvel onglet)
                </span>
              </a>
            )}
          </div>
        </div>

        <h2 className="text-secondary mt-5">À propos</h2>
        <p>{artisan.a_propos}</p>
      </section>

      {/* Formulaire de contact */}
      <section className="bg-bleu-clair py-5">
        <div className="container">
          <h2 className="text-secondary mb-4">Contacter l'artisan</h2>

          {envoye && (
            <p className="alert alert-success" role="status">
              Votre messagerie s'ouvrira avec votre message pret à etre envoyé
            </p>
          )}

          <p>
            Tous les champs sont obligatoires{" "}
            <span className="text-danger" aria-hidden="true">
              *
            </span>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Nom
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                className="form-control"
                value={formulaire.nom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                value={formulaire.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="objet" className="form-label">
                Objet
              </label>
              <input
                id="objet"
                name="objet"
                type="text"
                className="form-control"
                value={formulaire.objet}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="form-control"
                value={formulaire.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default FicheArtisan;
