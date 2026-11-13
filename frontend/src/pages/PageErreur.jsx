// Page 404 qui affiche quand l'adresse n'existe pas

function PageErreur() {
  return (
    <div className="container py-5 text-center">
      {/* Image de la page 404 : icône d'avertissement (comme sur la maquette) */}
      <i
        className="bi bi-exclamation-triangle text-primary d-block mb-3"
        style={{ fontSize: "96px" }}
        role="img"
        aria-label="Avertissement"
      ></i>
      <h1 className="text-secondary">Page non trouvée</h1>
    </div>
  );
}

export default PageErreur;
