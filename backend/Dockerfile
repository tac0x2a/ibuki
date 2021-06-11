FROM node:14.16-buster-slim

 # for npm run start:debug
RUN apt-get update
RUN apt-get install -y procps

# RUN mkdir /project

WORKDIR /backend
COPY package*.json ./
RUN npm install
