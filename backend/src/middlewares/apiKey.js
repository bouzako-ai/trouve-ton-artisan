// Middleware pour vérifier la clé API et limite l'accès à l'API à notre application

const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"]; // Récupère la clé API depuis les en-têtes de la requête

  // Vérifie si la clé API est présente et valide
  if (!apiKey) {
    return res.status(401).json({ error: "Clé API manquante" });
  }
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: "Clé API invalide" });
  }
  next();
};

module.exports = apiKeyMiddleware;
