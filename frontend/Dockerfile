FROM node:14.16-buster-slim

WORKDIR /frontend
COPY package*.json ./

RUN npm install -g @vue/cli@next
RUN npm install
RUN vue upgrade --next
