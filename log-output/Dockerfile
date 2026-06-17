FROM node:24-alpine

WORKDIR /app

COPY package* .

RUN npm i

COPY . .

CMD ["npm", "start"]