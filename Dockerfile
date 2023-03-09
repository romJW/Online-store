FROM node:16-alpine AS builder

WORKDIR /app

ADD . ./
RUN yarn --frozen-lockfile --non-interactive install
RUN yarn build

FROM node:16-alpine

WORKDIR /app

ENV NODE_ENV=production

ENV PORT "3001"

ADD package.json ./
COPY --from=builder /app/node_modules ./node_modules/
COPY --from=builder /app/build ./build/
COPY --from=builder /app/public ./public/

EXPOSE 3001

CMD [ "yarn", "start" ]
