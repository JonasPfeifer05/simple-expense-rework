FROM node:latest

COPY . .

RUN npm i
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["npm", "run", "start"]