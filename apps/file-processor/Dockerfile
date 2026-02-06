FROM node:20-alpine AS builder

WORKDIR /app

# Copy root package files
COPY package.json package-lock.json* ./
COPY turbo.json ./

# Copy workspace packages
COPY packages/prisma ./packages/prisma
COPY apps/file-processor/package*.json ./apps/file-processor/
COPY apps/file-processor/nest-cli.json ./apps/file-processor/
COPY apps/file-processor/tsconfig.json ./apps/file-processor/
COPY apps/file-processor/src ./apps/file-processor/src

# Install dependencies
RUN npm install

# Generate Prisma Client
WORKDIR /app/packages/prisma
RUN npm run generate

# Build NestJS
WORKDIR /app/apps/file-processor
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy root package files
COPY package.json package-lock.json* ./
COPY turbo.json ./

# Copy workspace packages
COPY packages/prisma ./packages/prisma
COPY apps/file-processor/package*.json ./apps/file-processor/

# Install production dependencies only
RUN npm install --production

# Generate Prisma Client
WORKDIR /app/packages/prisma
RUN npm run generate

# Copy built files
WORKDIR /app/apps/file-processor
COPY --from=builder /app/apps/file-processor/dist ./dist

CMD ["npm", "run", "start:prod"]
