FROM node:8.16

#LOOPBACK 3
#RUN npm install -g loopback-cli

#LOOPBACK 4
RUN npm i -g @loopback/cli

COPY ./proyecto2 /home

EXPOSE 3000

WORKDIR /home

RUN npm install
