FROM node:11-alpine

WORKDIR /mealService

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
