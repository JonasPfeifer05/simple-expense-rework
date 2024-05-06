FROM node:latest

COPY . .

RUN npm i
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 8080

CMD ["npm", "run", "start"]