FROM node:20-alpine

WORKDIR /app

COPY . .

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

RUN npm install

# RUN npx prisma generate \
#   --schema=packages/prisma/schema/schema.prisma

RUN npm run build --workspace=file-processor

WORKDIR /app/apps/file-processor

CMD ["node", "dist/main.js"]
