// Création d'un composant Etoiles réutilisable pour afficher les étoiles de notation d'un artisan

function Etoiles({ note }) {
  const pleines = Math.round(note); // Nombre d'étoiles pleines (4.5 -> 5, 4.1 -> 4)

  return (
    <p className="mb-2">
      {/* Les étoiles sont décoratives : les lecteurs d'écran lisent la note en texte */}
      <span className="text-primary fs-5" aria-hidden="true">
        {"★".repeat(pleines)}
        {"☆".repeat(5 - pleines)}
      </span>
      <span className="ms-2">{note} / 5</span>
    </p>
  );
}

export default Etoiles;
