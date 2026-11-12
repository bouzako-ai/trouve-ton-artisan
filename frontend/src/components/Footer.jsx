// Footer affichant les liens vers les pages légales et l'adresse de la région
// Présent sur toutes les pages de l'application

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-secondary text-white py-4">
      <div className="container d-md-flex justify-content-between ">
        {/* Liens vers les pages légales*/}
        <nav aria-label="Liens légaux">
          <ul className="list-unstyled mb-3 mb-md-0">
            <li>
              <Link to="/mentions-legales" className="text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/donnees-personnelles" className="text-white">
                Données personnelles
              </Link>
            </li>
            <li>
              <Link to="/accessibilite" className="text-white">
                Accessibilité
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="text-white">
                Cookies
              </Link>
            </li>
          </ul>
        </nav>
        {/* Adresse de la région*/}
        <address className="mb-0">
          101 cours Charlemagne
          <br />
          CS 20033
          <br />
          69269 LYON CEDEX 02
          <br />
          France
          <br />
          +33 (0)4 26 73 40 00
        </address>
      </div>
    </footer>
  );
}

export default Footer;
