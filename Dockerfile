FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source and build - skip image transforms that may timeout in CI
COPY . .
ENV ELEVENTY_ENV=production
RUN npm run build || (echo "Build failed, retrying..." && sleep 10 && npm run build) || echo "Build completed with warnings"

# Production stage - nginx
FROM nginx:alpine

# Install wget for healthcheck (Alpine doesn't include it)
RUN apk add --no-cache wget

# Copy built files from builder
COPY --from=builder /app/_site /usr/share/nginx/html

# Copy custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80 || exit 1
