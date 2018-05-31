FROM node:8.4.0

WORKDIR /usr/usr/app

COPY package*.json ./

RUN npm install --silent --progress=false

COPY . .

CMD ["npm", "start"]
