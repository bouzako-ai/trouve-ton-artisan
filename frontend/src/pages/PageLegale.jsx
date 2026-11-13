// Page légale : contenu non fourni, page en construction

function PageLegale() {
  return (
    <div className="container py-5 text-center">
      {/* Référencement : titre et description de la page */}
      <title>Page en construction - Trouve ton artisan</title>
      <meta
        name="description"
        content="Cette page de Trouve ton artisan est en cours de construction."
      />

      <h1 className="text-secondary mb-4">Page en construction</h1>
      {/* Icône de chargement (comme sur la maquette), décorative */}
      <div className="spinner-border text-primary" aria-hidden="true"></div>
    </div>
  );
}

export default PageLegale;
