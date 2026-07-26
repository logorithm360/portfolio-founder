# ==========================================
# STAGE 1: Build static React SPA production assets
# ==========================================
FROM node:20-alpine AS build-stage

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json ./

# Install only development and production dependencies
RUN npm ci

# Copy full frontend application codebase
COPY . .

# Compile and build production optimized assets
RUN npm run build

# ==========================================
# STAGE 2: Spin up lightweight production Nginx server
# ==========================================
FROM nginx:stable-alpine AS production-stage

# Copy compiled SPA static assets from build stage to nginx directories
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Replace standard nginx site configuration with our optimized custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose production SPA port
EXPOSE 3000

# Run lightweight Nginx server in the foreground
CMD ["nginx", "-g", "daemon off;"]
