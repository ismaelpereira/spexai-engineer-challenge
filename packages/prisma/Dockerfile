FROM node:20-alpine

WORKDIR /app

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

COPY package.json package-lock.json turbo.json ./
COPY packages/prisma ./packages/prisma

RUN npm install

WORKDIR /app/packages/prisma

CMD ["npx", "prisma", "migrate", "deploy"]
