// Page 404 qui affiche quand l'adresse n'existe pas

function PageErreur() {
  return (
    <div className="container py-5 text-center">
      {/* Référencement : titre et description de la page */}
      <title>Page non trouvée - Trouve ton artisan</title>
      <meta
        name="description"
        content="La page demandée n'existe pas sur Trouve ton artisan."
      />

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
