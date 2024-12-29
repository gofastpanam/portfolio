# Stage de build
FROM --platform=amd64 node:20-alpine AS builder

WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm install

# Copie des fichiers source
COPY . .

# Build de l'application
RUN npm run build

# Stage de production
FROM node:20-alpine AS production

WORKDIR /app

# Copie des fichiers nécessaires depuis le stage de build
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/start.sh /app/start.sh


# Installation des dépendances de production uniquement
RUN npm ci --only=production

# Exposition du port
EXPOSE 3000

# Commande de démarrage
ENTRYPOINT [ "./start.sh" ]
# CMD ["npm", "start"]