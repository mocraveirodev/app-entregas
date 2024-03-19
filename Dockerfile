FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn --no-progress

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
