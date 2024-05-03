FROM oven/bun:1.0-alpine
WORKDIR /usr/src/app

COPY . .

RUN bun install

EXPOSE 3001

CMD [ "bun", "index.ts" ]