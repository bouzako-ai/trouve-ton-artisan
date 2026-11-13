// Header avec le logo, le menu via l'API et la barre de recherche
// Présent sur toutes les pages de l'application

import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCategories } from "../services/api";
import logo from "../assets/Logo.png";

function Header() {
  const [categories, setCategories] = useState([]); // Liste des catégories récupérées depuis l'API
  const [searchTerm, setSearchTerm] = useState(""); // Texte saisi dans la barre de recherche
  const navigate = useNavigate(); // Hook pour naviguer vers une autre page

  // Récupération des catégories depuis l'API au chargement du composant
  useEffect(() => {
    const chargerCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Erreur lors du chargement des catégories :", error);
      }
    };

    chargerCategories();
  }, []);

  // Va sur la page des résultats quand on valide la recherche
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    if (searchTerm.trim() !== "") {
      navigate(`/recherche?nom=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(""); // Réinitialise la barre de recherche après la soumission
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <nav
        className="navbar navbar-expand-lg container"
        aria-label="Navigation principale"
      >
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Trouve ton artisan - Accueil" height="100" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Ouvrir le menu de navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu des catégories*/}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav mx-auto">
            {categories.map((categorie) => (
              <li className="nav-item" key={categorie.id_categorie}>
                <NavLink
                  className="nav-link"
                  to={`/categorie/${categorie.id_categorie}`}
                >
                  {categorie.nom}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Barre de recherche */}
        <form
          className="col-12 col-lg-auto mt-2 mt-lg-0"
          onSubmit={handleSearchSubmit}
          role="search"
        >
          <label htmlFor="recherche" className="visually-hidden">
            Rechercher un artisan
          </label>
          <input
            id="recherche"
            type="search"
            className="form-control"
            placeholder="Rechercher un artisan"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </nav>
    </header>
  );
}

export default Header;
