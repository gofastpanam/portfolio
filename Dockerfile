# Stage de build
FROM --platform=amd64 node:20-alpine AS builder

# Définition des arguments de build
ARG COMMIT_SHA
ARG APP_ENV

# Ajout des labels pour la traçabilité
LABEL org.opencontainers.image.source="https://github.com/gofastpanam/portfolio" \
      org.opencontainers.image.revision="${COMMIT_SHA}" \
      org.opencontainers.image.environment="${APP_ENV}"

# Création d'un utilisateur non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Installation des dépendances avec cache optimisé
COPY package*.json ./
COPY bun.lockb ./
RUN npm ci

# Copie des fichiers source
COPY . .

# Build de l'application
ENV NODE_ENV=production
RUN npm run build

# Stage de production
FROM node:20-alpine AS production

# Copie des labels et arguments du builder
ARG COMMIT_SHA
ARG APP_ENV
LABEL org.opencontainers.image.source="https://github.com/gofastpanam/portfolio" \
      org.opencontainers.image.revision="${COMMIT_SHA}" \
      org.opencontainers.image.environment="${APP_ENV}"

# Création du même utilisateur non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copie des fichiers nécessaires depuis le stage de build
COPY --from=builder --chown=appuser:appgroup /app/build ./build
COPY --from=builder --chown=appuser:appgroup /app/public ./public
COPY --from=builder --chown=appuser:appgroup /app/package*.json ./
COPY --from=builder --chown=appuser:appgroup /app/start.sh ./start.sh

# Installation des dépendances de production uniquement
ENV NODE_ENV=production
RUN npm ci --only=production && \
    npm cache clean --force

# Ajout des permissions d'exécution à start.sh
RUN chmod +x ./start.sh

# Configuration des variables d'environnement
ENV PORT=3000
ENV HOST=0.0.0.0

# Passage à l'utilisateur non-root
USER appuser

# Exposition du port
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Commande de démarrage
CMD ["./start.sh"]