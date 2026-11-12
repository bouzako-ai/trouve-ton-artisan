// Card d'un artisan affichant son nom, sa note, sa spécialité et sa ville
import { Link } from "react-router-dom";
import Etoiles from "./Etoiles";

function CardArtisan({ artisan }) {
  return (
    <Link
      to={`/artisan/${artisan.id_artisan}`}
      className="card h-100 shadow-sm text-decoration-none text-body"
    >
      <div className="card-body">
        <h3 className="h5 card-title text-secondary">{artisan.nom}</h3>
        <Etoiles note={artisan.note} />
        <p className="card-text mb-1">{artisan.specialite.nom}</p>
        <p className="card-text mb-0">{artisan.ville}</p>
      </div>
    </Link>
  );
}

export default CardArtisan;
