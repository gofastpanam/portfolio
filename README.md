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

- **Production**: http://localhost:3000
- **Staging**: http://localhost:3001

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

Le déploiement est entièrement automatisé via GitHub Actions :

### Configuration Requise

1. **Secrets GitHub**
   - `SSH_HOST` : IP du serveur 
   - `SSH_USER` : Utilisateur SSH 
   - `SSH_PRIVATE_KEY` : Clé SSH privée
   - `SSH_KNOWN_HOSTS` : Empreinte du serveur (via ssh-keyscan)

2. **Workflow de Déploiement**
   - Push sur `dev` -> déploiement automatique sur staging (port 3001)
   - Push sur `main` -> déploiement automatique sur production (port 3000)

### Processus Automatisé

1. **Build**
   - Tests et linting
   - Construction de l'image Docker
   - Push sur DockerHub

2. **Déploiement**
   - Connexion SSH au serveur
   - Pull de la nouvelle image
   - Redémarrage des conteneurs
   - Vérification de santé

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


## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.