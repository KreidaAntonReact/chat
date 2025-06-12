FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
COPY --from=development /app/node_modules ./node_modules
COPY . .

RUN yarn build

ENV NODE_ENV=production
RUN yarn install --production --frozen-lockfile && yarn cache clean

FROM node:20-alpine AS production

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist

# ARG USERNAME
# ARG IMAGE_NAME

# ENV USERNAME=${USERNAME}
# ENV IMAGE_NAME=${IMAGE_NAME}

# LABEL org.opencontainers.image.source=https://github.com/${USERNAME}/${IMAGE_NAME}

CMD ["node", "dist/main.js"]
