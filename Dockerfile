FROM node:lts-alpine

RUN yarn global add serve

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

CMD serve -s /app/build