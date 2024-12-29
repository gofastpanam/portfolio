# Portfolio de Benjamin Jacob

Portfolio personnel présentant mes projets et compétences en développement web.

## 🚀 Technologies Utilisées

- **Frontend**: React avec Remix
- **Styling**: Tailwind CSS
- **Containerisation**: Docker
- **CI/CD**: GitHub Actions
- **Hébergement**: AWS

## 🌟 Fonctionnalités

- Design responsive moderne avec Tailwind CSS
- Architecture conteneurisée avec Docker
- Pipeline CI/CD automatisé
- Environnements de staging et production séparés
- Déploiement automatique sur AWS

## 🛠️ Configuration Technique

### Environnements

- **Production**: http://votre-domaine.com (Port 3000)
- **Staging**: http://staging.votre-domaine.com (Port 3001)

### Prérequis

- Node.js >= 20.0.0
- npm
- Docker

### Installation Locale

```bash
# Cloner le repository
git clone https://github.com/gofastpanam/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Démarrer en développement
npm run dev
```

### Docker

```bash
# Production
docker compose up -d

# Staging
docker compose -f docker-compose.staging.yaml up -d
```

## 🚀 Déploiement

Le déploiement est automatisé via GitHub Actions :

- Push sur `dev` -> déploiement staging
- Push sur `main` -> déploiement production

### Pipeline CI/CD

1. **Lint & Type Check**
   - ESLint pour la qualité du code
   - TypeScript pour la vérification des types

2. **Build & Test**
   - Construction de l'image Docker
   - Tests automatisés

3. **Sécurité**
   - Scan des vulnérabilités
   - Vérification des dépendances

4. **Déploiement**
   - Push sur DockerHub
   - Déploiement automatique sur AWS

## 📝 Développement

```bash
# Démarrer en mode développement
npm run dev

# Build pour production
npm run build

# Démarrer en production
npm start
```

## 🔧 Configuration Docker

- **Production**: Port 3000
- **Staging**: Port 3001
- Images taguées automatiquement (production/staging)
- Healthchecks configurés

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📫 Contact

Nicolas Barbarisi - [LinkedIn](votre-linkedin) - email@example.com

Project Link: [https://github.com/gofastpanam/portfolio](https://github.com/gofastpanam/portfolio)
