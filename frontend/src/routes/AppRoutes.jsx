// Liste des routes de l'application
import { Routes, Route } from "react-router-dom";
import PageAccueil from "../pages/PageAccueil";
import ListeArtisans from "../pages/ListeArtisans";
import FicheArtisan from "../pages/FicheArtisan";
import PageLegale from "../pages/PageLegale";
import PageErreur from "../pages/PageErreur";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageAccueil />} />
      <Route path="/categorie/:id" element={<ListeArtisans />} />
      <Route path="/recherche" element={<ListeArtisans />} />
      <Route path="/artisan/:id" element={<FicheArtisan />} />
      <Route path="/mentions-legales" element={<PageLegale />} />
      <Route path="/donnees-personnelles" element={<PageLegale />} />
      <Route path="/accessibilite" element={<PageLegale />} />
      <Route path="/cookies" element={<PageLegale />} />
      <Route path="*" element={<PageErreur />} />
    </Routes>
  );
}

export default AppRoutes;
