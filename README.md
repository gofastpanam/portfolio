# Portfolio de Benjamin Jacob

Portfolio personnel présentant mes projets et compétences en développement web.

## 🚀 Technologies Utilisées

- **Frontend**: React avec Remix
- **Styling**: Tailwind CSS
- **Containerisation**: Docker
- **CI/CD**: GitHub Actions
- **Hébergement**: AWS EC2 (IP Statique)

## 🌟 Fonctionnalités

- Design responsive moderne avec Tailwind CSS
- Architecture conteneurisée avec Docker
- Pipeline CI/CD automatisé
- Environnements de staging et production séparés
- Déploiement automatique sur AWS

## 🛠️ Configuration Technique

### Environnements

- **Production**: http://[IP-STATIQUE]:3000
- **Staging**: http://[IP-STATIQUE]:3001

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
   - `SSH_HOST` : IP statique du serveur AWS
   - `SSH_USER` : Utilisateur SSH (ubuntu)
   - `SSH_PRIVATE_KEY` : Clé SSH privée (incluant BEGIN et END)
   - `SSH_KNOWN_HOSTS` : Empreinte du serveur (via ssh-keyscan -H [IP-STATIQUE])

2. **Workflow de Déploiement**
   - Push sur `dev` -> déploiement automatique sur staging (port 3001)
   - Push sur `main` -> déploiement automatique sur production (port 3000)

## 🔒 Sécurité

### Conteneurisation
- Utilisation d'un utilisateur non-root
- Multi-stage builds pour réduire la surface d'attaque
- Images basées sur Alpine Linux
- Permissions restrictives sur les fichiers

### CI/CD
- Secrets sécurisés dans GitHub Actions
- Vérification des signatures des images Docker
- Tests automatisés avant déploiement
- Health checks après déploiement

### Infrastructure
- Serveur AWS EC2 avec IP statique
- Ports exposés minimaux (3000/3001)
- Connexion SSH sécurisée
- Mises à jour automatiques des dépendances

### Bonnes Pratiques
- Pas de secrets dans le code
- Variables d'environnement pour la configuration
- Logs sécurisés et rotation automatique
- Conteneurs en lecture seule

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