FROM oven/bun:latest

COPY . .

RUN bun i
RUN bun run build

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["bun", ".output/server/index.mjs"]