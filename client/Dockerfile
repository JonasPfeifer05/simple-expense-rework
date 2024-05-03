FROM oven/bun:latest as build
WORKDIR /app
COPY package*.json ./
RUN bun --bun install
COPY . .
RUN bun --bun run build
#CMD ["bun", "--bun", "run", "dev", "--", "--host"]

FROM node:lts-alpine as prod
WORKDIR /app
RUN npm install -g http-server
COPY --from=build /app/dist ./dist
EXPOSE 8080
CMD [ "http-server", "dist" ]