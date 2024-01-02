FROM node:20
LABEL maintainer="jarvice.robert@gmail.com"
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE $PORT
CMD ["npm","run","dev"]