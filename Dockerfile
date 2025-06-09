ARG BUN_VERSION=1.2.13

FROM oven/bun:${BUN_VERSION}-alpine AS builder

WORKDIR /app

RUN apk add --no-cache bash curl unzip

ENV PATH="${PATH}:/root/.bun/bin"

COPY package.json bun.lock tsconfig.json ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

ENV NODE_ENV=production

RUN rm -rf node_modules && \
  rm -rf /root/.bun/install/cache/ && \
  bun install --frozen-lockfile --production

RUN curl -sf https://gobinaries.com/tj/node-prune | sh && \
  node-prune

FROM oven/bun:${BUN_VERSION}-alpine AS runner

ENV NODE_ENV=production

WORKDIR /app

# Copy the bundled code from the builder stage
COPY --from=builder --chown=node:node /app/package.json ./
COPY --from=builder --chown=node:node /app/dist ./dist
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/public ./public

RUN chown -R bun:bun /app

USER bun

EXPOSE 4173

CMD ["bun", "preview"]
